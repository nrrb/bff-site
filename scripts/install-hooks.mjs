import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
const configured = spawnSync('git', ['config', '--get', 'core.hooksPath'], { encoding: 'utf8' });
if (configured.status !== 0 && configured.status !== 1) throw new Error('Cannot read Git hook configuration.');
const current = configured.stdout.trim();
if (current && current !== '.githooks') throw new Error(`Existing core.hooksPath is ${current}. Integrate the hooks manually to preserve it.`);
for (const hook of ['post-merge', 'pre-push']) {
  const path = execFileSync('git', ['rev-parse', '--git-path', `hooks/${hook}`], { encoding: 'utf8' }).trim();
  if (!current && existsSync(path)) throw new Error(`Existing ${path}; integrate it manually before installing these hooks.`);
}
execFileSync('git', ['config', '--local', 'core.hooksPath', '.githooks']);
console.log('Installed repository hooks: post-merge and pre-push.');
