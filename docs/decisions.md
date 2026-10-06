# Decision log

This log records every design default in the [build prompt](build-prompt.md), every decision the engineer made that the product owner hasn't confirmed, and every answer from the product owner. Each entry has one of these statuses:

- **Design default, pending confirmation:** The build prompt labels the item as a design default. The build follows it unless the product owner says otherwise.
- **Engineer decision, pending review:** The engineer made the decision to keep work moving. The product owner can reverse it.
- **Confirmed:** The product owner confirmed the decision. The entry records the date and the answer.

Open questions that need an answer before a decision can be made are in the [open-question log](open-questions.md).

## Design defaults from the build prompt

### D-001: One branch and pull request for each milestone

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, "Repository rules."
- **Decision:** Each milestone has one branch and one pull request, so that the product owner can review at each stop.

### D-002: Defer video-based pose estimation

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 3, "Tier 2: hold for a license or a decision."
- **Decision:** Video-based pose estimation is deferred, because a pose model needs its own accuracy and repeatability study. The first release stores video as evidence only.

### D-003: When the application suggests biomechanical analysis

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 3, "Biomechanical analysis."
- **Decision:** The application suggests biomechanical analysis in three cases: the task falls outside the stated scope of every Tier 1 method, the decision depends on the load at a particular joint, or the team is comparing workstation designs before building one. The assessor decides and records the reason.

### D-004: PostgreSQL for records

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 4, "Storage rules," and part 7, "Architecture."
- **Decision:** Records are stored in PostgreSQL with foreign keys and constraints. Attachments are stored in object storage.

### D-005: Assess jobs, not people

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 4, "Privacy and access."
- **Decision:** Worker names and health information stay out of assessment records. Injury data is stored as counts only. Each attachment records its consent status, and access to attachments is restricted by role.

### D-006: Four roles

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 4, "Privacy and access."
- **Decision:** The application has four roles: administrator, assessor, reviewer, and viewer.

### D-007: Ranking rule

- **Status:** Design default, pending confirmation. The product owner approves the rule, and any change creates a new rule version.
- **Source:** Build prompt, part 5, "Ranking rule."
- **Decision:** The 10-step ranking rule in part 5: native results first, bands only from sources, no comparison of native values across methods, band-to-level maps approved by a reviewer, unmapped methods left out of the level, highest level wins, fixed tie-breakers (open flags, then workers exposed, then injury and report counts), unassessed work kept visible, every position explained, and every ranking snapshotted.

### D-008: Accessibility target

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 6, "Accessibility."
- **Decision:** The application meets WCAG 2.2 at level AA.

### D-009: TypeScript for the engine, API, and web client

- **Status:** Design default, pending confirmation. The build prompt requires confirmation of the stack before milestone 2.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** TypeScript throughout. Repository tooling in milestone 1 uses the same language, so that the stack decision doesn't change the tooling if the default is confirmed.

### D-010: Standalone calculation engine

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** The engine is a standalone package with no dependency on the interface, the database, or the network. Each function takes a validated input object and returns a result object.

### D-011: The API is the only path that creates a stored result

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** The API validates inputs against the method schema, calls the engine, and writes the result. The web client can import the engine for previews only.

### D-012: Authentication through a maintained library

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** Sign-in uses a standard protocol through a maintained library. No custom cryptography.

### D-013: Repository layout

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** Top-level folders `engine/`, `methods/<method-id>/`, `api/`, `web/`, and `docs/`. Each method folder holds its specification data, transcriptions, code, and tests. The method specification document itself lives at `docs/methods/<method-id>.md`, as part 2 requires.

### D-014: Continuous integration checks

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** Continuous integration runs linting, type checks, unit tests, published-example tests, the cross-platform determinism run, end-to-end tests, and accessibility checks. Each check is added to the workflow in the milestone that first gives it something to check, so that no check passes vacuously.

### D-015: Pinned dependencies

- **Status:** Design default, pending confirmation.
- **Source:** Build prompt, part 7, "Architecture."
- **Decision:** Every dependency is pinned to an exact version, and the lockfile is committed.

## Engineer decisions

### D-101: Milestone 1 branch name

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Context:** The hosting session for this build is bound to the branch `claude/pensive-maxwell-mqwopv` and can't push to any other branch without the product owner's explicit permission. The repository had no branches before the first commit.
- **Decision:** Milestone 1 work is on `claude/pensive-maxwell-mqwopv`. Because that branch is the first one pushed, GitHub treats it as the default branch until a `main` branch exists and the product owner changes the default. Open question OQ-101 asks how the product owner wants the base branch set up for the milestone pull requests.

### D-102: Tool versions

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Node.js 22.22.0, TypeScript 6.0.3, ESLint 10.12.0, `typescript-eslint` 8.71.1, Prettier 3.9.9, and Vitest 5.0.3, all pinned exactly.
- **Reason:** TypeScript 7.0.2 was the newest release on October 6, 2026, but `typescript-eslint` 8.71.1 declares support for TypeScript versions below 6.1.0 only. TypeScript 6.0.3 is the newest release inside that range.

### D-103: Method identifiers

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Tier 1 methods use these identifiers in file names and in the method registry:

  | Method                         | Identifier          |
  | ------------------------------ | ------------------- |
  | Revised NIOSH Lifting Equation | `rnle`              |
  | LM-MMH equations               | `lm-mmh`            |
  | BWC/OSU push/pull guidelines   | `bwc-osu-push-pull` |
  | LiFFT                          | `lifft`             |
  | DUET                           | `duet`              |
  | The Shoulder Tool              | `shoulder-tool`     |
  | Job demands analysis           | `jda`               |

### D-104: Where downloaded sources are kept

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Downloaded source documents are kept outside the repository, in the build session's scratch storage. The repository records each one in [`sources.md`](sources.md) with its link, retrieval date, SHA-256 checksum, and terms of use. `.gitignore` also excludes `sources/`, `source-documents/`, and every PDF file, so that a local copy can't be committed by accident. A person who needs the exact file retrieves it from the recorded link and confirms the checksum.

### D-105: How the two transcription passes are made

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Context:** Part 2 requires two independent transcription passes for every table. In this build session, one agent makes both passes, and the build prompt doesn't name a second transcriber.
- **Decision:** Pass B is a manual reading of the rendered page image, written to a file before pass A exists. Pass A is a machine extraction of the PDF text layer. A script compares the passes cell by cell, and every difference is resolved against the page image and recorded with its evidence. Both passes come from the same agent, so they aren't independent in the sense of two people. A human second transcription before reviewer approval is recommended, and open question OQ-104 asks whether the reviewer accepts this procedure.

### D-106: Chapter 1 RNLE tables govern

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Context:** The NIOSH manual prints Tables 1 to 5 and 7 in chapter 1 and reprints them in chapter 3 "to provide a useful reference." The reprints differ in labels and formatting, including a typographical "≤2" where chapter 1 has "≤0.2."
- **Decision:** The chapter 1 tables are transcribed twice and govern. The chapter 3 reprints are compared with them by machine, and every difference is listed in `docs/methods/rnle.md`. No numeric multiplier differs.

### D-107: Transcription conventions

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Both passes follow the same conventions, which each manifest records: tables printed side by side in two unit systems are stored as separate files, merged cells are written on every row they span, line breaks inside a cell become single spaces, and multi-line headings are joined into one heading per column. Footnote markers and the characters printed in the source, such as "≤" and "−," are kept.

### D-108: Reference calculators are cross-checks only

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Where a public calculator's page is read, its content is used only to find disagreements with the primary source, which are then logged as open questions. It is never a source for an equation, threshold, or table value. The build sends no calculation requests to any calculator. Reference-tool parity pairs are recorded by a person, as part 2 of the build prompt requires.

### D-109: CI actions pinned to commit SHAs

- **Status:** Engineer decision, pending review.
- **Date:** October 6, 2026.
- **Decision:** Under design default D-015, every GitHub Action in the CI workflow is pinned to the full commit SHA of a release tag, with the tag named in a comment. The workflow uses `actions/checkout` v7, `actions/setup-node` v7, `actions/upload-artifact` v7, and `actions/download-artifact` v8, which run on Node.js 24. The v4 releases ran on the deprecated Node.js 20 runtime, and CI flagged them with a warning.
