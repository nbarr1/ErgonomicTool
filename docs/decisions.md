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

### D-101: Milestone 1 branch and base branch

- **Status:** Confirmed by the product owner on October 6, 2026.
- **Context:** The hosting session for this build is bound to the branch `claude/pensive-maxwell-mqwopv` and can't push to any other branch without the product owner's explicit permission. The repository had no branches before the first commit, so that branch became the repository's first branch and its default.
- **Decision:** Milestone 1 work is on `claude/pensive-maxwell-mqwopv`. The product owner renamed the repository's default branch to `main`. With the product owner's approval, `main` was then moved back to the first commit, `fd9070f` ("Add build prompt and repository scaffolding"), so that the milestone 1 pull request from `claude/pensive-maxwell-mqwopv` into `main` shows all of milestone 1 for review. Later milestones each get their own branch and pull request into `main` (design default D-001).

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

### D-116: Two-agent transcription passes for the supplied papers

- **Status:** Engineer decision, pending review (OQ-104).
- **Date:** October 7, 2026.
- **Context:** D-105 describes passes that one agent made by two methods. For the four papers the product owner supplied, the build could run two separate agents with separate working contexts.
- **Decision:** For the LM-MMH, DUET, LiFFT, and Shoulder Tool sources, two transcription agents work in parallel from the same structural skeleton (header row and row keys). Pass A starts from the text layer and checks every cell against page renders, which govern. Pass B works from page renders only, with no access to the text layer, the other pass, or the source survey; its tool log is checked for this after the run. Every minus sign in a number or equation is written as U+2212, whatever glyph the source uses, and labels keep their printed dashes. The engineer prefilled the skeletons' header rows and row keys from a one-pass survey, and both passes checked those cells against the page. The comparison, resolutions, and check are the same as for D-105.
- **Limits:** The two agents are separate instances of the same model, not two people. A human second transcription before reviewer approval is still recommended (OQ-104).

## Product owner answers

### D-110: The product owner is the qualified reviewer

- **Status:** Confirmed by the product owner on October 6, 2026 (answers OQ-008).
- **Decision:** The product owner is the qualified reviewer for method specifications and validation reports, and signs them.

### D-111: The product owner approves band maps and ranking configuration

- **Status:** Confirmed by the product owner on October 6, 2026 (answers OQ-010).
- **Decision:** The product owner approves each band map, the priority level names, and the tie-breaker order.

### D-112: Permission to implement the sources

- **Status:** Confirmed by the product owner on October 6, 2026 (answers OQ-009).
- **Decision:** "Unless stated otherwise, yes": the product owner has access to each primary source and permission to implement its equations and tables, except where the product owner says otherwise. The product owner supplied the LiFFT, DUET, Shoulder Tool, and LM-MMH papers on October 6, 2026 (answers OQ-102 and OQ-103).
- **Note:** The repository is public. The LM-MMH paper carries a CC BY-NC-ND 4.0 license, which permits non-commercial reuse of the article "provided the original work is properly cited, and is not altered, transformed, or built upon in any way." Committing transcribed coefficients to a public repository and building software on them may fall outside those terms, depending on whether the coefficients are protected at all. This is flagged for the product owner (OQ-150). It isn't legal advice.

### D-113: Deferred questions

- **Status:** Confirmed by the product owner on October 6, 2026.
- **Decision:** The Liberty Mutual interpretation figures (OQ-105) and the job demands field list (OQ-006 and OQ-142) are deferred. The LM-MMH band map proposal and the field-level job demands specification wait for them.

### D-114: Repository license

- **Status:** Engineer recommendation adopted at the product owner's request on October 6, 2026 (answers OQ-106). The product owner can change it.
- **Decision:** The Apache License, Version 2.0, covers the repository's original code and documentation. A `NOTICE` file states that third-party material, including every transcription of a source table, stays under its own terms and isn't relicensed.
- **Reason:** The repository is public. Apache 2.0 is a permissive license with an explicit patent grant and a `NOTICE` mechanism suited to recording third-party attributions. The license text was retrieved from `https://www.apache.org/licenses/LICENSE-2.0.txt` on October 6, 2026 (SHA-256 `cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30`).

### D-115: Recommended first-release methods and order

- **Status:** Engineer recommendation, pending the product owner's confirmation (OQ-001).
- **Recommendation:** All six calculation methods go in the first release, implemented and validated in this order: (1) the Revised NIOSH Lifting Equation; (2) the BWC/OSU push/pull guidelines; (3) LiFFT, DUET, and the Shoulder Tool, together; (4) the LM-MMH equations. The job demands analysis follows when its field list is decided (D-113).
- **Reason:** The order follows how ready each method is and how much risk it carries. The NIOSH manual is public domain and its specification is drafted. The BWC/OSU specification is drafted but waits on answers about three source defects (OQ-130, OQ-132, OQ-133). The three fatigue-failure tools share one calculation pattern (damage per cycle, summed cumulative damage, and a probability curve), so they are cheapest to build and validate together. LM-MMH has the most equations and coefficients, a license question (OQ-150), and deferred interpretation figures (OQ-105).
