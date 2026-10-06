# Contributing

These conventions apply to every change in this repository. The governing specification is [`docs/build-prompt.md`](docs/build-prompt.md). Where this guide and the build prompt differ, the build prompt wins.

## Branches

- Each milestone has one branch and one pull request, so that the product owner can review at each stop. This rule is a design default (see decision D-001 in [the decision log](docs/decisions.md)).
- Name a milestone branch `milestone/<number>-<short-name>`, for example `milestone/2-calculation-engine`, unless the hosting environment assigns a branch name. Record an assigned name in the decision log.
- Don't push to a branch that someone else owns, and don't rewrite its history.
- Don't change repository visibility, permissions, or branch protection.

## Commits

- Commit in small steps. Each commit does one thing and leaves every check passing.
- Write a descriptive subject line in the imperative mood, with no ending period, at 72 characters or fewer. Explain why in the body when the reason isn't obvious.
- Commit code and its tests together.
- Update the README and the relevant guide in the same commit as the change they describe.
- Never commit credentials, tokens, or keys. Use `.env` files, which Git ignores, and keep `.env.example` current with placeholder values.
- Never commit papers, manuals, or other third-party documents. Record each one in [`docs/sources.md`](docs/sources.md) with its link, retrieval date, checksum, and terms of use. Store the downloaded file outside the repository or in an ignored folder such as `sources/`.

## Methods and data

- Write the method specification in `docs/methods/<method-id>.md` before any code. Give the page, table, or equation number for every item.
- Implement each calculation from its primary published source only. Don't write an equation, coefficient, lookup table, or threshold from memory.
- When a primary source can't be retrieved, stop work on that method and record the gap in [`docs/open-questions.md`](docs/open-questions.md).
- Add nothing that the source doesn't define, including interpolation, extrapolation, rounding rules, and default values. Log the question instead.
- Transcribe every table twice, in two independent passes, and reconcile the differences against the source. The transcription files and the check that enforces this rule are described in [`methods/README.md`](methods/README.md).
- Before you add a method, a threshold, or a default value that the build prompt doesn't specify, ask the product owner and record the answer in [`docs/decisions.md`](docs/decisions.md).

## Tests

- Run `npm run check` before you push. Continuous integration runs the same checks.
- When a test fails, fix the cause in the code or the transcription. Change an expected value only when the source shows that the value was wrong, and record the evidence in the commit message and the validation report.
- **No test is weakened, skipped, or deleted to make a build pass.** That includes loosening a tolerance, marking a test as skipped or expected to fail, and narrowing an assertion.
- A claim that tests pass includes the test output.

## Review

- Open each milestone pull request as a draft. Mark it ready for review when every check passes and the milestone report is complete.
- The milestone report states what is complete, what was verified with evidence, what wasn't verified, and which questions remain open.
- A method stays in draft until a qualified reviewer named by the product owner signs off on its specification and its validation report.
- The reviewer approves band maps, tolerances, and perturbation sizes before the comparison that uses them runs.

## Code style

- [`.editorconfig`](.editorconfig) sets the basic whitespace rules.
- [Prettier](https://prettier.io/) formats code and Markdown. Run `npm run format` to apply it.
- [ESLint](https://eslint.org/) with the strict, type-checked `typescript-eslint` rules checks code. Calculation code must not read the clock or call `Math.random`; the lint configuration rejects both.
- Every dependency is pinned to an exact version, and `package-lock.json` is committed.
