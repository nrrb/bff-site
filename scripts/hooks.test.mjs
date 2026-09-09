import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const source = process.cwd();
const zeros = '0'.repeat(40);
function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), 'bff-hooks-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const run = (command, args = [], options = {}) => spawnSync(command, args, { cwd: dir, encoding: 'utf8', ...options });
  const git = (...args) => { const result = run('git', args); assert.equal(result.status, 0, result.stderr); return result.stdout.trim(); };
  git('init', '-b', 'main'); git('config', 'user.name', 'Hook Test'); git('config', 'user.email', 'hooks@example.invalid');
  for (const path of ['scripts', '.githooks', 'src', 'docs/images', 'bin']) mkdirSync(join(dir, path), { recursive: true });
  for (const file of ['screenshot.mjs', 'screenshot-state.mjs', 'install-hooks.mjs']) cpSync(join(source, 'scripts', file), join(dir, 'scripts', file));
  for (const file of ['post-merge', 'pre-push']) cpSync(join(source, '.githooks', file), join(dir, '.githooks', file));
  writeFileSync(join(dir, 'src/index.txt'), 'site version one');
  writeFileSync(join(dir, 'README.md'), '![Site](docs/images/homepage.png)');
  writeFileSync(join(dir, 'bin/npm'), '#!/bin/sh\necho captured >> capture.log\n', { mode: 0o755 });
  const env = { ...process.env, PATH: `${join(dir, 'bin')}:${process.env.PATH}` };
  const capture = () => {
    const hash = run('node', ['--input-type=module', '-e', "import {fingerprint} from './scripts/screenshot-state.mjs'; console.log(fingerprint());"]);
    assert.equal(hash.status, 0, hash.stderr);
    const image = Buffer.from('fixture image');
    writeFileSync(join(dir, 'docs/images/homepage.png'), image);
    writeFileSync(join(dir, 'docs/images/homepage.json'), JSON.stringify({ sourceSha256: hash.stdout.trim(), imageSha256: createHash('sha256').update(image).digest('hex') }));
  };
  const commit = () => { git('add', '.'); git('commit', '-m', 'fixture'); return git('rev-parse', 'HEAD'); };
  const push = (oid, remote = 'refs/heads/main') => run('sh', ['.githooks/pre-push'], { input: `refs/heads/feature ${oid} ${remote} ${zeros}\n` });
  return { dir, run, git, env, capture, commit, push };
}

test('pre-push validates the outgoing commit, rejecting stale or corrupted captures', t => {
  const f = fixture(t);
  f.capture(); const good = f.commit();
  assert.equal(f.push(good).status, 0);
  writeFileSync(join(f.dir, 'src/index.txt'), 'site version two');
  assert.equal(f.push(good).status, 0, 'Uncommitted edits cannot change validation of the outgoing commit');
  const stale = f.commit();
  assert.notEqual(f.push(stale).status, 0);
  assert.equal(f.push(stale, 'refs/heads/feature').status, 0);
  assert.equal(f.push(zeros).status, 0, 'Branch deletion is ignored');
  f.capture(); const fresh = f.commit();
  assert.equal(f.push(fresh).status, 0);
  writeFileSync(join(f.dir, 'docs/images/homepage.png'), 'altered image');
  assert.notEqual(f.push(f.commit()).status, 0);
  const multiple = f.run('sh', ['.githooks/pre-push'], { input: `refs/heads/feature ${good} refs/heads/feature ${zeros}\nrefs/heads/main ${stale} refs/heads/main ${zeros}\n` });
  assert.notEqual(multiple.status, 0, 'All pushed refs are inspected');
});

test('missing capture blocks main; hook installer preserves an existing configuration', t => {
  const f = fixture(t);
  assert.notEqual(f.push(f.commit()).status, 0);
  f.git('config', 'core.hooksPath', 'existing-hooks');
  assert.notEqual(f.run('node', ['scripts/install-hooks.mjs']).status, 0);
  assert.equal(f.git('config', '--get', 'core.hooksPath'), 'existing-hooks');
});

test('an actual fast-forward merge into main invokes capture; other branches do not', t => {
  const f = fixture(t);
  f.capture(); f.commit();
  assert.equal(f.run('node', ['scripts/install-hooks.mjs']).status, 0);
  f.git('switch', '-c', 'feature');
  assert.equal(f.run('sh', ['.githooks/post-merge', '0'], { env: f.env }).status, 0);
  assert.equal(existsSync(join(f.dir, 'capture.log')), false);
  writeFileSync(join(f.dir, 'src/index.txt'), 'merged site'); const tip = f.commit();
  f.git('switch', 'main');
  const merge = f.run('git', ['merge', '--ff-only', 'feature'], { env: f.env });
  assert.equal(merge.status, 0, merge.stderr);
  assert.equal(readFileSync(join(f.dir, 'capture.log'), 'utf8').trim(), 'captured');
  assert.equal(f.git('rev-parse', 'HEAD'), tip, 'The hook does not create commits');
  writeFileSync(join(f.dir, 'bin/npm'), '#!/bin/sh\nexit 1\n', { mode: 0o755 });
  const failure = f.run('sh', ['.githooks/post-merge', '0'], { env: f.env });
  assert.notEqual(failure.status, 0);
  assert.match(failure.stderr, /merge succeeded/);
});
