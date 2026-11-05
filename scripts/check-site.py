"""Validate the built portfolio without extra dependencies: npm run build first."""
import json
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from xml.etree import ElementTree

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.images, self.headings = set(), [], [], []
        self.text = []
        self.meta = {}
        self.times = []
        self.in_time = False
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
        if tag == 'time':
            self.in_time = True
            self.times.append({'datetime': a.get('datetime', ''), 'text': ''})
        if tag == 'meta': self.meta[a.get('property') or a.get('name')] = a.get('content', '')
        if tag == 'meta' and a.get('name') == 'description': self.description = a['content']
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a['href']
    def handle_endtag(self, tag):
        if tag == 'a': self.anchor_depth -= 1
        if tag == 'title': self.in_title = False
        if tag == 'time': self.in_time = False
    def handle_data(self, data):
        self.text.append(data)
        if self.in_title: self.title += data
        if self.in_time: self.times[-1]['text'] += data

root = Path('dist')
projects = json.loads(Path('src/data/projects.json').read_text())
linked_projects = json.loads(Path('src/data/linked-projects.json').read_text())
routes = ['/', '/presentation/'] + [f"/projects/{p['slug']}/" for p in projects]
pages = {route: Page(root / route.lstrip('/') / 'index.html') for route in routes}
site = 'https://nicholasbennett.work'
assert [project['slug'] for project in projects[:3]] == ['mitre-attack-flashcards', 'tiny-goose-club', 'medium-talk']
assert len({p.title for p in pages.values()}) == len(routes)
for route, page in pages.items():
    assert page.title and page.description and page.canonical == site + route, route
    assert page.meta['og:url'] == page.canonical, route
    assert page.meta['og:title'] == page.title and page.meta['og:description'] == page.description, route
    assert page.headings.count(1) == 1 and page.headings[0] == 1, route
    assert all(b <= a + 1 for a, b in zip(page.headings, page.headings[1:])), route
    assert 'main-content' in page.ids
    assert page.meta['og:image'] == site + '/images/portrait.jpg'
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
homepage_text = ' '.join(' '.join(pages['/'].text).split())
commit_dates = [datetime.strptime(project['firstCommitDate'], '%Y-%m-%dT%H:%M:%SZ') for project in linked_projects]
assert commit_dates == sorted(commit_dates, reverse=True), 'Project first-commit dates must be newest first'
assert pages['/'].times == [
    {'datetime': project['firstCommitDate'], 'text': date.strftime('%B %Y')}
    for project, date in zip(linked_projects, commit_dates)
], 'Rendered project dates must match their initial commits'
for project in linked_projects:
    assert project['title'] and project['title'] in homepage_text
    assert project['description'] and project['description'] in homepage_text
    assert project['linkLabel'] and project['linkLabel'] in homepage_text
    for href in (project['source'], project['website']):
        url = urlsplit(href)
        assert url.scheme in ('http', 'https') and url.netloc, href
        assert href in pages['/'].links, f'Missing linked project: {href}'
assert 'mailto:nicholas@bigfriendlyfunction.com' in pages['/'].links
assert '/#focus' in pages['/'].links
assert {'resumes', 'services'} <= pages['/'].ids, 'Preserve old section anchors'
assert 'Good with code. Even better with people.' in homepage_text
assert 'Customer Success Management' in homepage_text
assert 'moving into customer success' in pages['/'].title.lower()
assert all(term in homepage_text for term in ('CyberMaxx', 'May 2025 to November 2026', '16 years', 'Elastic', 'Devo', 'AlienVault USM', 'MITRE ATT&CK', '4,000 Uber rides', 'Trader Joe’s'))
assert not any(role in homepage_text for role in ('Frontend Software Engineer', 'Full Stack Software Engineer', 'Solutions Engineer'))
assert 'full-time' in pages['/'].description
assert any(image['src'] == '/images/portrait.jpg' and image['alt'] == pages['/'].meta['og:image:alt'] for image in pages['/'].images)
assert not any(href.endswith('.pdf') for href in pages['/'].links), 'Old engineering résumés should not compete with Customer Success positioning'
assert {path.relative_to(root).as_posix() for path in root.rglob('index.html')} == {
    route.lstrip('/') + 'index.html' for route in routes
}, 'Unexpected generated routes'
assert len(list((root / 'resumes').glob('*.pdf'))) == 3
for pdf in (root / 'resumes').glob('*.pdf'):
    assert pdf.read_bytes().startswith(b'%PDF-'), f'Invalid archived résumé: {pdf}'
sitemap = ElementTree.parse(root / 'sitemap.xml')
locations = [loc.text for loc in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert sorted(locations) == sorted(site + route for route in routes), 'Sitemap must include every canonical page exactly once'
assert (root / 'robots.txt').read_text() == f'User-agent: *\nAllow: /\n\nSitemap: {site}/sitemap.xml\n'
redirects = json.loads(Path('vercel.json').read_text())['redirects']
assert len(redirects) == 3
assert {tuple((condition['type'], condition['value']) for condition in rule['has']) for rule in redirects} == {
    (('host', host),) for host in ('bigfriendlyfunction.com', 'www.bigfriendlyfunction.com', 'www.nicholasbennett.work')
}, 'Redirect aliases only; never redirect the canonical host'
for rule in redirects:
    assert rule['source'] == '/:path*' and rule['destination'] == site + '/:path*' and rule['permanent'] is True
assert not (root / 'images/nicholas-bennett-restaurants.jpg').exists()
for path in root.rglob('*.html'):
    page = Page(path)
    assert not any(urlsplit(link).path.rstrip('/') == '/restaurants' for link in page.links), f'Removed restaurant page linked from {path}'
    assert 'mailto:nicholasbennett.work@gmail.com' not in page.links
    assert 'tel:+12244324264' not in page.links
print(f'PASS: {len(routes)} static pages, {len(projects)} gallery links with cybersecurity/community projects first, {len(linked_projects)} additional projects with ordered dates, no duplicate repositories, Customer Success positioning, preserved résumé PDFs and legacy anchors, canonical/OG/social metadata on the new domain, sitemap and robots.txt, permanent redirect configuration, headings, local links and media, and no restaurant content.')
