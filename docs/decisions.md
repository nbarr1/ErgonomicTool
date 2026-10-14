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

- **Status:** Engineer decision, pending review. Partly superseded on October 7, 2026, by D-117: for LiFFT and the Shoulder Tool, the authors' calculators may supply values the papers don't print, with a small, recorded number of requests.
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

### D-115: First-release methods and order

- **Status:** Engineer recommendation, revised October 7, 2026, after the supplied papers were read. The product owner accepted it on October 7, 2026 ("That's fine"; answers OQ-001).
- **Recommendation:** Implement and validate the methods in this order: (1) the Revised NIOSH Lifting Equation; (2) the BWC/OSU push/pull guidelines; (3) DUET; (4) the LM-MMH equations. LiFFT and the Shoulder Tool follow when a source for their missing equations is settled (OQ-180 and OQ-200), and the job demands analysis follows when its field list is decided (D-113).
- **Reason:** The order follows how ready each method is and how much risk it carries. The NIOSH manual is public domain and its specification is drafted. The BWC/OSU specification is drafted but waits on answers about three source defects (OQ-130, OQ-132, OQ-133). DUET's paper prints everything its calculation needs, its worked examples reproduce, and building it first sets up the damage-per-cycle and cumulative-damage code that LiFFT and the Shoulder Tool would share. LM-MMH can be specified in full, but it has the most coefficients, the most open questions (OQ-160 to OQ-177), and a license question (OQ-150). The LiFFT manuscript and the Shoulder Tool paper don't print the equations or coefficients that turn their inputs into damage and risk, so neither can be implemented from its source.
- **Earlier version (October 6, 2026):** The first version put LiFFT, DUET, and the Shoulder Tool together in third place, before the papers had been read.

### D-117: The authors' online calculators may serve as sources

- **Status:** Product owner answer, October 7, 2026 (answers OQ-180 and OQ-200).
- **Answer:** "The online calculators are fine as a source."
- **How the build applies it:** For LiFFT and the Shoulder Tool, the authors' public calculators may supply the values that the papers don't print. Where a paper prints a value, the paper governs until the product owner answers OQ-140. The repository rule against automated bulk requests to calculator sites still applies, so the build makes only a small, recorded number of requests to any calculator. A value inferred from a calculator's rounded outputs is approximate, while a value printed by the authors is exact. The build therefore looks first for a document by the same authors that prints the missing values, and reports any such document to the product owner before using it.

### D-118: Private use and source licenses

- **Status:** Product owner answer, October 7, 2026 (answers OQ-150).
- **Answer:** "Don't do anything explicitly prohibited but this will be used privately as a tool and not distributed to the public."
- **Fact the answer depends on:** The GitHub repository is public (checked October 7, 2026), so everything pushed to it is published, including the LM-MMH transcriptions and specification. The repository rules don't allow the build to change the repository's visibility.
- **How the build applies it:** The build doesn't use any source in a way its license explicitly prohibits. The LM-MMH paper's license (CC BY-NC-ND 4.0) prohibits commercial use and sharing adapted material, and requires attribution. Private use of the equations is consistent with the answer. Publishing an implementation in a public repository may count as sharing adapted material, so the build doesn't push LM-MMH engine code while the repository is public.
- **Recommendation:** The product owner makes the repository private. That keeps the private-use premise true for the material already pushed. The build can't judge whether the files already pushed count as adapted material; that is a legal question.

### D-119: Source-backed answers to RNLE questions

- **Status:** Product owner answer, October 13, 2026. The engineer couldn't open the source PDF in the session that recorded these answers, so the product owner checked each page listed in this entry against the source and confirmed it the same day. For OQ-111, the product owner quoted section 1.3.5.4 and the Table 5 headings ("less than or equal to 1 hour, greater than 1 hour but less than or equal to 2 hours, and greater than 2 hours but less than or equal to 8 hours").
- **Answer:** "Start by accepting everything that has a verifiable source as the basis." Questions whose answer needs judgment stay open until the accepted answers are implemented.
- **Decisions:**
  - **OQ-111:** Exactly 2 hours is moderate duration, and exactly 1 hour is short. The section 1.3.5.2 text ("more than one hour, but not more than two hours") and the Table 5 heading ("> 1 but ≤ 2 Hours") agree.
  - **OQ-112:** The formulas govern HM, VM, DM, and AM, because "Each multiplier should be computed from the appropriate formula" (p. 7). Tables 1 to 4 are used only for verification. The three table entries that differ from their formulas are recomputed in the specification: 10/22 = 0.4545 (Table 1, .46), 10/23 = 0.4348 (Table 1, .44), and 0.82 + 4.5/130 = 0.8546 (Table 3, metric, .86).
  - **OQ-114:** The engine uses the exact quotient 50/15 = 3.33… lifts/minute. The printed 3.4 is an arithmetic or rounding error.
  - **OQ-115:** CM uses V at the point being evaluated. This follows Example 4 (Figure 14, p. 46), where CM is .95 at the origin (V = 22 in) and 1.0 at the destination (V = 59 in). It comes from a worked example, not from a stated rule.
  - **OQ-121:** Load weight is in pounds or kilograms, consistent with the load constant (51 lb or 23 kg) and the terminology list (p. 2). The glossary's "pounds or Newtons" (p. 75) is not followed.
  - **OQ-123, display precision only:** Results display as the p. 29 statement gives: multipliers to two decimal places, and weight limits and lifting indices to one. The rounding mode for a value that ends exactly in 5 stays open.
  - **OQ-125, the boundary at 1.0 only:** LI = 1.0 is in the lowest band, because section 1.4.3 (p. 20) sets the goal as "an LI of 1.0 or less." Whether the LI 3.0 statement is a published threshold for the band map stays open.
- **Pages the product owner checked:** The source is NIOSH Publication 94-110 (Revised 9/2021), [Applications Manual for the Revised NIOSH Lifting Equation](https://www.cdc.gov/niosh/media/pdfs/2026/06/94-110_2021-revision.pdf). The PDF page number is the printed page number plus 16.

  | Question | What to check                                                                             | Printed page | PDF page  |
  | -------- | ----------------------------------------------------------------------------------------- | ------------ | --------- |
  | OQ-111   | The duration definitions in section 1.3.5.2, and the Table 5 column headings              | 13-15        | 29-31     |
  | OQ-112   | "Each multiplier should be computed from the appropriate formula"                         | 7            | 23        |
  | OQ-112   | Table 1 at H = 22 and 23 inches (.46 and .44)                                             | 8-9          | 24-25     |
  | OQ-112   | Table 3, metric, at D = 130 cm (.86)                                                      | 11           | 27        |
  | OQ-114   | The illustration that prints "50/15 = 3.4 lifts/minute"                                   | 16           | 32        |
  | OQ-115   | Example 4 worksheet: CM .95 at the origin (V = 22 in), 1.0 at the destination (V = 59 in) | 46           | 62        |
  | OQ-121   | "pounds or kilograms" in the terminology list, and "pounds or Newtons" in the glossary    | 2 and 75     | 18 and 91 |
  | OQ-123   | The rounding statement for the examples                                                   | 29           | 45        |
  | OQ-125   | "design all lifting jobs to achieve an LI of 1.0 or less" in section 1.4.3                | 20           | 36        |

### D-120: Source-backed answers to BWC/OSU questions

- **Status:** Product owner answer, October 13, 2026. The product owner checked each page listed in this entry against the source and confirmed it the same day.
- **Answer:** "Start by accepting everything that has a verifiable source as the basis."
- **Decisions:**
  - **OQ-131:** A value is green only if it is at or below the printed green limit. For example, 41.5 lb is yellow where green is "41 lbs. or less" and yellow is "42-57 lbs." This is the literal reading of the printed limits, and it matches the online calculator. The application doesn't round the measured value.
  - **OQ-133:** The PDF governs, under D-108: at 2 Hand Push, 38 inches, red starts at 65 lb. The rows where a limit falls or stays level as hand height rises are confirmed as printed.
  - **OQ-135:** Hand distances outside 12 to 36 inches are rejected, with a message that states the allowed range. The source says the guidelines "are not applicable for significantly wider or narrower hand distances" (p. 2), and the online calculator rejects them. This rule matters only when two-handed turning is implemented, which waits on OQ-130.
- **Pages the product owner checked:** The source is the [BWC/OSU push/pull guidelines PDF](https://dam.assets.ohio.gov/image/upload/info.bwc.ohio.gov/forms/PushPullGuidelines.pdf), linked from the [BWC push/pull guide page](https://www.bwc.ohio.gov/employer/programs/safety/PushPullGuide/PushPullGuide.aspx). The PDF has no printed page numbers, so pages are PDF pages.

  | Question | What to check                                                                                                        | PDF page |
  | -------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
  | OQ-131   | Every limit is a whole number of pounds, for example 2 Hand Pull at 32 inches: "41 lbs. or less," "42-57 lbs."       | 3        |
  | OQ-133   | 2 Hand Push at 38 inches: red "65 lbs. or more"; at 39 inches: red "64 lbs. or more"                                 | 3        |
  | OQ-135   | "accommodate hand distances of 12" to 36" and are not applicable for significantly wider or narrower hand distances" | 2        |

### D-121: The RNLE engine computes in U.S. customary units

- **Status:** Product owner answer, October 13, 2026 (answers OQ-122). The engineer recommended this option.
- **Decision:** The engine converts every RNLE input to U.S. customary units and computes with the U.S. constants: LC = 51 lb, HM = 10/H, VM = 1 − .0075|V − 30|, and DM = .82 + 1.8/D (p. 7). Stored values stay in SI, as part 2 of the build prompt requires.
- **Reason:** The manual's metric and U.S. constants aren't exact conversions, so only one set can give the same result for equivalent inputs. Example 4 (Figure 14, p. 46) is printed in pounds and inches, so the published-example tests can check the engine without converting.
- **Consequences, computed from the transcribed formulas:** For the same task, a calculation with the metric constants gives a recommended weight limit about 2% lower than the engine's (2.0% to 2.6% lower for four illustrative tasks). Two boundaries also differ from a metric hand calculation: a horizontal distance between 63 and 63.5 cm gives a nonzero RWL in the engine but RWL = 0 with the metric limit of 63 cm, and a vertical location between 75 cm (29.53 in) and 30 in uses the V < 30 column of Tables 5 and 7 in the engine. The method reference should state these differences, so that metric users know why a hand calculation can differ.

### D-122: Two-handed turning waits for an answer from BWC or the authors

- **Status:** Product owner answer, October 13, 2026. The engineer recommended this option. OQ-130 stays open.
- **Decision:** The first release implements the BWC/OSU straight push and pull and one-handed pull tables only. Two-handed turning is left out until BWC or the guidelines' authors say which moment arm the turning limits assume. The product owner asks them.
- **Reason:** The PDF defines the moment arm as "the distance between the center of the object being turned and the hand dynamometer that is exerting the torque" (p. 4), which with centered hands is half the hand distance. The online calculator uses the full hand distance. The two readings differ by a factor of two: computed from the transcribed turning table, a 60 lb force with hands 24 inches apart at a hand height of 32 inches gives 60 ft-lbs. (green) under one reading and 120 ft-lbs. (red) under the other. No source settles which reading is right.
- **Consequence:** OQ-135 (the 12 to 36 inch hand-distance rule, answered in D-120) applies only to turning, so it has no effect until turning is implemented.

### D-123: FM is interpolated toward a row of .00

- **Status:** Product owner answer, October 13, 2026 (answers OQ-113). The engineer recommended the other option, setting FM to 0 above each column's last nonzero row.
- **Decision:** Between a column's last nonzero row and the .00 row after it, FM is interpolated linearly, as the p. 7 rule says for any frequency between two rows. In the ≤ 1 hour, V ≥ 30 column, the row after 15 is "> 15," which isn't a number, so interpolation isn't defined there and FM is .00 for any F above 15.
- **Examples, computed from the transcribed Table 5:** F = 12.5 in the ≤ 1 hour, V < 30 column gives FM = .185 (between .37 and .00). F = 8.5 in the > 2 but ≤ 8 hours, V < 30 column gives FM = .09 (between .18 and .00). F = 10.1 in the > 1 but ≤ 2 hours, V < 30 column gives FM = .234 (between .26 and .00).
- **Basis:** This reading applies the source's stated interpolation rule (p. 7) without an exception the source doesn't state. The engineer's recommendation, the stricter reading, would have treated all six columns alike. The product owner chose on a decision card and didn't state a reason.

### D-124: Answers to the second round of judgment questions

- **Status:** Product owner answers on decision cards, October 14, 2026. The evidence for each question is summarized in the question's entry in the open-question log. Unless an item says otherwise, the product owner chose the engineer's recommended option.
- **Decisions:**
  - **OQ-116:** The single-task LI is banded on the maximum load weight. The LI from the average load is shown next to it. The source doesn't say which load the single-task LI uses; the worksheets record both (Figure 3, p. 24; Figure 14, p. 46).
  - **OQ-117:** For the combined frequencies in the CLI, the Table 5 column is V < 30 if any task in the combination has V < 30 inches, and V ≥ 30 otherwise. Computed from the transcribed Table 5: the V < 30 value is never higher than the V ≥ 30 value in any of its 18 rows, so this choice never gives a higher FM.
  - **OQ-118:** For CLI renumbering, "the same STLI value" (p. 57) means equal at full precision. When STLI and F both tie, the tasks keep the assessor's original order. Example 7 (pp. 55-59), in which every task has F = 2.4, becomes a milestone 2 test of this rule. If it doesn't reproduce, the engineer brings the numbers back to the product owner.
  - **OQ-119:** When significant control at the destination means FIRWL is computed at both ends (p. 26), the lower of the two feeds FILI, STRWL, and STLI. This follows by analogy the single-task rule that "the lower of the RWL values at the origin or destination should be used to compute the Lifting Index for the task" (p. 26). The source doesn't state it for multi-task jobs.
  - **OQ-120:** When the RWL is zero, the application shows no numeric LI. It reports that the RWL is zero and no load is within the limit, names the multiplier that is zero, and places the result in the highest band of the approved band map. The source says only that a zero RWL means "zero, or no load" (p. 12).
  - **OQ-110:** The application records the assessor's yes-or-no answer to each "does not apply" condition (p. 6) and applies no numeric cut-off. Where the source prints a number (66 to 79 °F, 35% to 50% relative humidity, about 30 inches/second, a coefficient of friction below 0.4), the number is shown next to the question as guidance. The source qualifies the temperature with "significantly" and the speed with "about," so a hard cut-off would decide something the source doesn't.
  - **OQ-125, the LI 3.0 threshold:** The RNLE band map keeps three bands: LI ≤ 1.0, 1.0 < LI ≤ 3.0, and LI > 3.0. Results above 3.0 quote the source's statement with its attribution to "some experts" (p. 20), so that the result doesn't present it as NIOSH's own threshold. The boundary at 1.0 was answered in D-119.
  - **OQ-123, rounding exact halves:** A displayed value that ends exactly in 5 is rounded half away from zero, which matches how Tables 1 to 4 round the 15 formula values that end exactly in 5. This affects display only; calculations keep full precision. The display precision was answered in D-119.
  - **OQ-124:** The engine keeps full precision and doesn't round multipliers before multiplying. Each worked-example test (a) checks every printed multiplier against the engine's multiplier rounded to two decimals, (b) recomputes the printed RWL and LI from the printed, rounded multipliers to confirm the transcription, and (c) checks that the engine's full-precision RWL and LI are within half a unit of the last printed digit plus the effect of multiplier rounding, with that bound derived and documented for each example. The source says its rounding applies "for these examples" (p. 29).
  - **OQ-134:** A hand height between two whole-inch rows is classified against both neighboring rows, and the result is the worse of the two bands. The source gives no rule for heights between rows. Computed from the transcriptions: for every pair of neighboring rows except 2 Hand Push at 38 and 39 inches, one row's green and red limits are both lower than or equal to the other's. At 38 and 39 inches, 39 inches has the higher green limit (54 against 53 lb) but the lower red limit (64 against 65 lb), so no single row is more protective; the worse-band rule handles that pair as well.
