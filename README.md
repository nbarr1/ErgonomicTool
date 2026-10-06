# Ergonomic assessment, prioritization, and storage application

This application helps ergonomists, safety professionals, and engineers assess jobs for musculoskeletal disorder (MSD) risk, rank those jobs for action, and store every assessment for later retrieval and comparison.

**The application supports professional judgment and doesn't replace it.** Its outputs are decision support for a qualified person. They aren't a diagnosis, a guarantee of safety, or a statement of regulatory compliance.

The governing specification is [`docs/build-prompt.md`](docs/build-prompt.md).

## What the application does

The application has three functions:

- **Assessment:** A user records the demands of a task and runs one or more published ergonomic assessment methods against those demands.
- **Prioritization:** The application ranks tasks, jobs, and work areas with an explicit, versioned rule, so that a team can decide where to intervene first.
- **Storage:** The application keeps every assessment, its inputs, and its results in a form that can be reopened, audited, compared, and exported.

Accuracy (each result matches the published method exactly) and repeatability (the same inputs produce the same result every time) outrank every other requirement.

## Status by milestone

The build runs in seven milestones, with a product-owner review at the end of each one. No application code is written until the method specifications are approved.

| Milestone                     | Status          | Notes                                                                                                                               |
| ----------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1. Sources and specifications | Awaiting review | Two draft specifications, five methods blocked on sources or decisions. See [the milestone 1 report](docs/milestones/m1-report.md). |
| 2. Calculation engine         | Not started     | Blocked on approved specifications and the stack decision.                                                                          |
| 3. Data and storage           | Not started     |                                                                                                                                     |
| 4. Assessment workflow        | Not started     |                                                                                                                                     |
| 5. Prioritization             | Not started     |                                                                                                                                     |
| 6. Biomechanical analysis     | Not started     |                                                                                                                                     |
| 7. Hardening                  | Not started     |                                                                                                                                     |

No method is validated. Every method is in draft until a reviewer named by the product owner approves its specification and signs its validation report.

## Install, run, and test

The repository holds documentation and repository tooling only. There is no application to run yet.

Requirements:

- Node.js 22.22.0 (the version in [`.nvmrc`](.nvmrc))
- npm 10

To install the pinned development tools, run this command from the repository root:

```sh
npm ci
```

To run every check that continuous integration runs, use this command:

```sh
npm run check
```

The individual checks are `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, and `npm run check:transcriptions`. The last one checks the double-transcription files described in [`methods/README.md`](methods/README.md). To reformat files in place, run `npm run format`.

## Repository layout

The layout follows the design default in part 7 of the build prompt. Folders marked "planned" don't exist yet.

```text
.github/workflows/   Continuous integration
docs/                Specification, logs, method specifications, validation reports, and guides
  build-prompt.md    Governing specification, stored unedited
  decisions.md       Decision log, including every design default
  open-questions.md  Open-question log
  sources.md         Source log: link, retrieval date, checksum, and terms of use
  methods/           One specification for each method: docs/methods/<method-id>.md
  milestones/        Plans and reports for each milestone
  validation/        One validation report for each method (from milestone 2)
  guides/            User guide, administrator guide, and method reference
methods/<method-id>/ Specification data, transcriptions, code, and tests for each method
tools/               Repository tooling: transcription check and determinism run
engine/              Calculation engine (planned, milestone 2)
api/                 API (planned, milestone 3)
web/                 Web client (planned, milestone 4)
```

## Documents

- [Build prompt](docs/build-prompt.md)
- [Decision log](docs/decisions.md)
- [Open-question log](docs/open-questions.md)
- [Source log](docs/sources.md)
- [Method specifications](docs/methods/README.md)
- [Validation reports](docs/validation/README.md)
- [Milestone 1 plan](docs/milestones/m1-plan.md)
- [Milestone 1 report](docs/milestones/m1-report.md)
- [User guide](docs/guides/user-guide.md)
- [Administrator guide](docs/guides/administrator-guide.md)
- [Method reference](docs/guides/method-reference.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

## License

The license is pending until the product owner chooses one. No license file exists, so no license is granted.
