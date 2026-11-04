import { strict as assert } from 'node:assert';
import { mkdtemp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { compareSkills } from './check-skills.mjs';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'astrato-skills-check-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const source = join(root, 'source');
  const published = join(root, 'published');
  for (const directory of [source, published]) {
    await mkdir(join(directory, 'astrato', 'references'), { recursive: true });
    await writeFile(join(directory, 'astrato', 'SKILL.md'), 'Use https://docs.astrato.io\n');
    await writeFile(join(directory, 'astrato', 'references', 'guide.md'), 'Supporting content\n');
  }
  return { source, published };
}

test('matches complete folders while excluding source-only root notes', async (t) => {
  const { source, published } = await fixture(t);
  await writeFile(join(source, 'README.md'), 'Authoring notes, not a distributed skill.\n');
  assert.deepEqual(await compareSkills(source, published), []);
});

test('reports changed, missing and stale published files', async (t) => {
  const { source, published } = await fixture(t);
  await writeFile(join(published, 'astrato', 'SKILL.md'), 'Use http://docs.astrato.io\n');
  await rm(join(published, 'astrato', 'references', 'guide.md'));
  await mkdir(join(published, 'retired-skill'));
  await writeFile(join(published, 'retired-skill', 'SKILL.md'), 'Retired\n');
  assert.deepEqual(await compareSkills(source, published), [
    'Changed published file: astrato/SKILL.md',
    'Missing published file: astrato/references/guide.md',
    'Unexpected published file: retired-skill/SKILL.md',
  ]);
});

test('rejects empty or incomplete source trees and symlinked content', async (t) => {
  const { source, published } = await fixture(t);
  await symlink(join(source, 'astrato', 'SKILL.md'), join(published, 'linked.md'));
  await assert.rejects(compareSkills(source, published), /must not be symlinks/);
  await rm(join(published, 'linked.md'));
  await rm(join(source, 'astrato', 'SKILL.md'));
  await assert.rejects(compareSkills(source, published), /ENOENT/);
  await rm(join(source, 'astrato'), { recursive: true });
  await assert.rejects(compareSkills(source, published), /no skill folders/);
});
