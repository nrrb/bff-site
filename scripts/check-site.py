"""Validate the built portfolio without extra dependencies: npm run build first."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.images, self.headings = set(), [], [], []
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
        if tag == 'meta' and a.get('name') == 'description': self.description = a['content']
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a['href']
    def handle_endtag(self, tag):
        if tag == 'a': self.anchor_depth -= 1
        if tag == 'title': self.in_title = False
    def handle_data(self, data):
        if self.in_title: self.title += data

root = Path('dist')
projects = json.loads(Path('src/data/projects.json').read_text())
routes = ['/'] + [f"/projects/{p['slug']}/" for p in projects]
pages = {route: Page(root / route.lstrip('/') / 'index.html') for route in routes}
assert len(projects) == 6
assert len({p.title for p in pages.values()}) == 7
for route, page in pages.items():
    assert page.title and page.description and page.canonical.endswith(route), route
    assert page.headings.count(1) == 1 and page.headings[0] == 1, route
    assert all(b <= a + 1 for a, b in zip(page.headings, page.headings[1:])), route
    assert 'main-content' in page.ids
    for href in page.links:
        assert href, f'Empty link: {route}'
        assert 'wa.me' not in href
        url = urlsplit(href)
        if url.scheme or url.netloc: continue
        target = url.path or route
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
assert 'mailto:nicholas@bigfriendlyfunction.com' in pages['/'].links
print('PASS: 7 static routes, 6 gallery links, all local anchors, unique titles, descriptions, canonical URLs, heading hierarchy, contact links, images, and no nested links.')
