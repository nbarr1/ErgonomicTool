import { readFileSync } from 'node:fs';
import { argv, exit, stderr, stdout } from 'node:process';
import {
  checkTranscriptionFolder,
  diffGrids,
  findTranscriptionFolders,
  shapeProblems,
} from './check.ts';
import { parseCsv } from './csv.ts';

const usage = `Usage:
  node tools/transcription/cli.ts check <methods-folder>
  node tools/transcription/cli.ts compare <pass-a.csv> <pass-b.csv>`;

function check(methodsRoot: string): number {
  const folders = findTranscriptionFolders(methodsRoot);
  let failures = 0;
  for (const folder of folders) {
    const problems = checkTranscriptionFolder(folder);
    if (problems.length === 0) {
      stdout.write(`ok   ${folder}\n`);
    } else {
      failures += problems.length;
      stdout.write(`FAIL ${folder}\n`);
      for (const problem of problems) {
        stdout.write(`     ${problem}\n`);
      }
    }
  }
  stdout.write(`${folders.length} transcription folder(s) checked, ${failures} problem(s)\n`);
  return failures === 0 ? 0 : 1;
}

function compare(aPath: string, bPath: string): number {
  const a = parseCsv(readFileSync(aPath, 'utf8'));
  const b = parseCsv(readFileSync(bPath, 'utf8'));
  const shape = shapeProblems('pass A', a, 'pass B', b);
  if (shape.length > 0) {
    for (const problem of shape) {
      stdout.write(`shape: ${problem}\n`);
    }
    return 1;
  }
  const differences = diffGrids(a, b);
  for (const d of differences) {
    stdout.write(`row ${d.row}, column ${d.column}: pass A "${d.passA}" | pass B "${d.passB}"\n`);
  }
  stdout.write(`${differences.length} difference(s)\n`);
  return 0;
}

const [command, ...rest] = argv.slice(2);
if (command === 'check' && rest.length === 1 && rest[0] !== undefined) {
  exit(check(rest[0]));
} else if (
  command === 'compare' &&
  rest.length === 2 &&
  rest[0] !== undefined &&
  rest[1] !== undefined
) {
  exit(compare(rest[0], rest[1]));
} else {
  stderr.write(`${usage}\n`);
  exit(2);
}
