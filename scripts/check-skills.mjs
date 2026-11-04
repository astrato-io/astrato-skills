import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const publishedRoot = fileURLToPath(new URL('../skills/', import.meta.url));

async function filesBelow(root, prefix = '') {
  const files = new Map();
  for (const entry of await readdir(resolve(root, prefix), { withFileTypes: true })) {
    const path = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isSymbolicLink()) throw new Error(`Skill files must not be symlinks: ${path}`);
    if (entry.isDirectory()) {
      for (const [name, content] of await filesBelow(root, path)) files.set(name, content);
    } else if (entry.isFile()) {
      files.set(path, await readFile(resolve(root, path)));
    } else {
      throw new Error(`Unsupported skill entry: ${path}`);
    }
  }
  return files;
}

async function sourceFiles(root) {
  const files = new Map();
  for (const entry of await readdir(root, { withFileTypes: true })) {
    // Root-level authoring notes are not installed skills and must not be distributed.
    if (entry.isSymbolicLink()) throw new Error(`Source skills must not be symlinks: ${entry.name}`);
    if (!entry.isDirectory()) continue;
    await readFile(resolve(root, entry.name, 'SKILL.md'));
    for (const [name, content] of await filesBelow(root, entry.name)) files.set(name, content);
  }
  if (!files.size) throw new Error('The source contains no skill folders.');
  return files;
}

export async function compareSkills(source, published = publishedRoot) {
  const [expected, actual] = await Promise.all([sourceFiles(resolve(source)), filesBelow(resolve(published))]);
  const differences = [];
  for (const path of [...new Set([...expected.keys(), ...actual.keys()])].sort()) {
    if (!expected.has(path)) differences.push(`Unexpected published file: ${path}`);
    else if (!actual.has(path)) differences.push(`Missing published file: ${path}`);
    else if (!expected.get(path).equals(actual.get(path))) differences.push(`Changed published file: ${path}`);
  }
  return differences;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const [source, ...extra] = process.argv.slice(2);
    if (!source || extra.length) throw new Error('Usage: node scripts/check-skills.mjs <source-skills-directory>');
    const differences = await compareSkills(source);
    if (differences.length) throw new Error(differences.join('\n'));
    console.log('Published skill folders match the source.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
