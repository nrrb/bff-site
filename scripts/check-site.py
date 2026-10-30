"""Validate the built portfolio without extra dependencies: npm run build first."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.images, self.headings = set(), [], [], []
        self.text = []
        self.meta = {}
        self.title, self.description, self.canonical = '', '', ''
        self.in_title = False
        self.anchor_depth = 0
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f"Duplicate ID: {a['id']}"
            self.ids.add(a['id'])
        if tag == 'a':
            assert self.anchor_depth == 0, 'Nested links'
            self.anchor_depth += 1
            self.links.append(a.get('href', ''))
        if tag == 'img':
            self.images.append(a)
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.headings.append(int(tag[1]))
        if tag == 'title': self.in_title = True
        if tag == 'meta': self.meta[a.get('property') or a.get('name')] = a.get('content', '')
        if tag == 'meta' and a.get('name') == 'description': self.description = a['content']
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a['href']
    def handle_endtag(self, tag):
        if tag == 'a': self.anchor_depth -= 1
        if tag == 'title': self.in_title = False
    def handle_data(self, data):
        self.text.append(data)
        if self.in_title: self.title += data

root = Path('dist')
projects = json.loads(Path('src/data/projects.json').read_text())
linked_projects = json.loads(Path('src/data/linked-projects.json').read_text())
routes = ['/', '/presentation/'] + [f"/projects/{p['slug']}/" for p in projects]
pages = {route: Page(root / route.lstrip('/') / 'index.html') for route in routes}
assert len(projects) == 6
assert len({p.title for p in pages.values()}) == len(routes)
for route, page in pages.items():
    assert page.title and page.description and page.canonical.endswith(route), route
    assert page.headings.count(1) == 1 and page.headings[0] == 1, route
    assert all(b <= a + 1 for a, b in zip(page.headings, page.headings[1:])), route
    assert 'main-content' in page.ids
    assert page.meta['og:image'] == 'https://bigfriendlyfunction.com/images/portrait.jpg'
    assert page.meta['twitter:image'] == page.meta['og:image']
    assert page.meta['twitter:card'] == 'summary'
    assert page.meta['og:image:width'] == '1000' and page.meta['og:image:height'] == '998'
    assert page.meta['og:image:alt'] and page.meta['twitter:image:alt'] == page.meta['og:image:alt']
    for href in page.links:
        assert href, f'Empty link: {route}'
        assert 'wa.me' not in href
        url = urlsplit(href)
        if url.scheme or url.netloc: continue
        target = url.path or route
        if target.endswith('.pdf'):
            pdf = root / target.lstrip('/')
            assert pdf.is_file() and pdf.read_bytes().startswith(b'%PDF-'), f'Missing or invalid PDF: {href}'
            continue
        assert target in pages, f'Missing route: {href}'
        assert not url.fragment or unquote(url.fragment) in pages[target].ids, href
    for img in page.images:
        assert img.get('alt') and (root / img['src'].lstrip('/')).is_file(), img
for project in projects:
    route = f"/projects/{project['slug']}/"
    assert route in pages['/'].links
    assert pages[route].description == project['description']
    assert project['source'] in pages[route].links
    if project['live']: assert project['live'] in pages[route].links
sources = [project['source'] for project in projects + linked_projects]
assert len(sources) == len(set(sources)), 'Duplicate project repository'
homepage_text = ' '.join(pages['/'].text)
for project in linked_projects:
    assert project['title'] and project['title'] in homepage_text
    assert project['description'] and project['description'] in homepage_text
    assert project['linkLabel'] and project['linkLabel'] in homepage_text
    for href in (project['source'], project['website']):
        url = urlsplit(href)
        assert url.scheme in ('http', 'https') and url.netloc, href
        assert href in pages['/'].links, f'Missing linked project: {href}'
assert 'mailto:nicholas@bigfriendlyfunction.com' in pages['/'].links
assert '/#resumes' in pages['/'].links
assert 'full-time' in pages['/'].description
assert any(image['src'] == '/images/portrait.jpg' and image['alt'] == pages['/'].meta['og:image:alt'] for image in pages['/'].images)
assert {href for href in pages['/'].links if href.endswith('.pdf')} == {
    f'/resumes/nicholas-bennett-{role}.pdf'
    for role in ('frontend-software-engineer', 'full-stack-software-engineer', 'solutions-engineer')
}
assert {path.relative_to(root).as_posix() for path in root.rglob('index.html')} == {
    route.lstrip('/') + 'index.html' for route in routes
}, 'Unexpected generated routes'
assert len(list((root / 'resumes').glob('*.pdf'))) == 3
assert not (root / 'images/nicholas-bennett-restaurants.jpg').exists()
for path in root.rglob('*.html'):
    page = Page(path)
    assert not any(urlsplit(link).path.rstrip('/') == '/restaurants' for link in page.links), f'Removed restaurant page linked from {path}'
    assert 'mailto:nicholasbennett.work@gmail.com' not in page.links
    assert 'tel:+12244324264' not in page.links
print(f'PASS: {len(routes)} static routes, 6 gallery links, {len(linked_projects)} additional projects with descriptions and website/source links, no duplicate repositories, 3 résumé PDFs, full-time availability metadata, homepage portrait and social preview metadata, all local anchors, unique titles, descriptions, canonical URLs, heading hierarchy, contact links, images, no nested links, and migrated restaurant content removed.')
