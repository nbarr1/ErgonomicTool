import { readFileSync, writeFileSync } from 'node:fs';
import { arch, argv, cwd, exit, platform, stderr, stdout, version } from 'node:process';
import { compareRuns, type RunRecord } from './compare.ts';
import { emit } from './emit.ts';

const usage = `Usage:
  node tools/determinism/cli.ts emit <output.json>
  node tools/determinism/cli.ts compare <run.json> <run.json> [...]`;

const [command, ...rest] = argv.slice(2);

if (command === 'emit' && rest.length === 1 && rest[0] !== undefined) {
  const record: RunRecord = {
    environment: { platform, arch, node: version },
    output: emit(cwd()),
  };
  writeFileSync(rest[0], `${JSON.stringify(record, null, 2)}\n`);
  stdout.write(`wrote ${rest[0]} (${platform}-${arch}, Node.js ${version})\n`);
  exit(0);
} else if (command === 'compare' && rest.length >= 2) {
  const runs = rest.map((path) => JSON.parse(readFileSync(path, 'utf8')) as RunRecord);
  const { problems, platforms, architectures } = compareRuns(runs);
  stdout.write(`operating systems: ${platforms.join(', ')}\n`);
  stdout.write(`processor architectures: ${architectures.join(', ')}\n`);
  for (const problem of problems) {
    stdout.write(`FAIL ${problem}\n`);
  }
  stdout.write(problems.length === 0 ? 'all outputs are identical\n' : '');
  exit(problems.length === 0 ? 0 : 1);
} else {
  stderr.write(`${usage}\n`);
  exit(2);
}
