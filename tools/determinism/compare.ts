/** One platform's determinism run: where it ran, and what it produced. */
export interface RunRecord {
  environment: { platform: string; arch: string; node: string };
  output: unknown;
}

export interface Comparison {
  problems: string[];
  platforms: string[];
  architectures: string[];
}

/**
 * Compares the outputs of several runs. Every output must serialize to the same JSON text, and
 * the runs must cover at least two operating systems and two processor architectures.
 */
export function compareRuns(runs: RunRecord[]): Comparison {
  const problems: string[] = [];
  const platforms = [...new Set(runs.map((run) => run.environment.platform))].sort();
  const architectures = [...new Set(runs.map((run) => run.environment.arch))].sort();

  if (runs.length === 0) {
    problems.push('no runs to compare');
  }
  if (platforms.length < 2) {
    problems.push(`runs cover ${platforms.length} operating system(s); at least 2 are required`);
  }
  if (architectures.length < 2) {
    problems.push(
      `runs cover ${architectures.length} processor architecture(s); at least 2 are required`,
    );
  }

  const [first, ...others] = runs;
  if (first) {
    const reference = JSON.stringify(first.output);
    for (const run of others) {
      if (JSON.stringify(run.output) !== reference) {
        const { platform, arch } = run.environment;
        const base = `${first.environment.platform}-${first.environment.arch}`;
        problems.push(`output from ${platform}-${arch} differs from ${base}`);
      }
    }
  }
  return { problems, platforms, architectures };
}
