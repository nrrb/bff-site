import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

export const imagePath = 'docs/images/homepage.png';
export const manifestPath = 'docs/images/homepage.json';
export const sha256 = data => createHash('sha256').update(data).digest('hex');
const isInput = path => /^(src\/|public\/|scripts\/.*\.mjs$)/.test(path) ||
  /^(package(-lock)?\.json|astro\.config\.mjs|tailwind\.config\.mjs|tsconfig\.json)$/.test(path);
export const git = args => execFileSync('git', args, { maxBuffer: 32 * 1024 * 1024 });
export function readAt(path, ref) {
  return ref ? git(['show', `${ref}:${path}`]) : readFileSync(path);
}
export function fingerprint(ref) {
  const paths = git(ref ? ['ls-tree', '-rz', '--name-only', ref] : ['ls-files', '-z', '--cached', '--others', '--exclude-standard'])
    .toString().split('\0').filter(isInput);
  const hash = createHash('sha256');
  for (const path of [...new Set(paths)].sort()) {
    hash.update(path).update('\0').update(sha256(readAt(path, ref))).update('\0');
  }
  return hash.digest('hex');
}
export function checkScreenshot(ref) {
  const manifest = JSON.parse(readAt(manifestPath, ref));
  if (manifest.sourceSha256 !== fingerprint(ref)) throw new Error('Screenshot is stale for the site source.');
  if (manifest.imageSha256 !== sha256(readAt(imagePath, ref))) throw new Error('Screenshot does not match its capture manifest.');
  if (!readAt('README.md', ref).toString().includes(imagePath)) throw new Error('README does not include the screenshot.');
}
