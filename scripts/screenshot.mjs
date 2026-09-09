import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fingerprint, checkScreenshot, imagePath, manifestPath, sha256 } from './screenshot-state.mjs';

const args = process.argv.slice(2);
if (args[0] === '--check' || args[0] === '--check-ref') {
  try {
    if (args[0] === '--check-ref' && !/^[a-f0-9]{40,64}$/.test(args[1] ?? '')) throw new Error('Expected a full commit ID.');
    checkScreenshot(args[0] === '--check-ref' ? args[1] : undefined);
    console.log('README screenshot matches the site source and image.');
  } catch (error) {
    console.error(`${error.message}\nRun npm run screenshot, then commit docs/images/homepage.png and docs/images/homepage.json before pushing main.`);
    process.exitCode = 1;
  }
} else if (args.length) {
  console.error('Usage: node scripts/screenshot.mjs [--check | --check-ref COMMIT]');
  process.exitCode = 1;
} else {
  const sourceSha256 = fingerprint();
  execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
  const { chromium } = await import('playwright');
  const root = resolve('dist');
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };
  const server = createServer(async (request, response) => {
    try {
      let pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      if (pathname.endsWith('/')) pathname += 'index.html';
      const path = resolve(root, `.${pathname}`);
      if (!path.startsWith(root + sep)) { response.writeHead(403).end(); return; }
      const content = await readFile(path);
      response.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' }).end(content);
    } catch { response.writeHead(404).end(); }
  });
  let browser;
  try {
    await new Promise((accept, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', accept); });
    browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, colorScheme: 'dark', reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'networkidle' });
    if (response.status() !== 200) throw new Error('Homepage did not load.');
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => image.decode()));
      for (const font of ['600 60px "Space Grotesk"', '400 18px Inter', '400 12px "JetBrains Mono"']) {
        if (!document.fonts.check(font)) throw new Error(`Font did not load: ${font}`);
      }
    });
    const image = await page.screenshot({ fullPage: true, animations: 'disabled' });
    if (errors.length) throw new Error(errors.join('\n'));
    if (fingerprint() !== sourceSha256) throw new Error('Site source changed during capture; run the script again.');
    await mkdir('docs/images', { recursive: true });
    await writeFile(imagePath, image);
    await writeFile(manifestPath, JSON.stringify({ sourceSha256, imageSha256: sha256(image), viewport: { width: 1440, height: 1000 }, fullPage: true, browser: `Chromium ${browser.version()}` }, null, 2) + '\n');
    console.log(`Captured ${imagePath}`);
  } finally {
    await browser?.close();
    server.closeAllConnections();
    await new Promise(accept => server.close(accept));
  }
}
