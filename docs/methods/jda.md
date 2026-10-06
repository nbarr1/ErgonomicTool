# Job demands analysis (`jda`): specification status

- **Status:** **Partly specified, blocked on field-level decisions.** The job demands analysis is descriptive. It produces a report, not a risk score, so it has no equation, constant, or threshold to transcribe.
- **Reference:** OHCOW's [JobAssess announcement](https://www.ohcow.on.ca/posts/jobassess-app/) and its [JobAssess tool page](https://my.ohcow.on.ca/tools-and-apps/job-assess-tool/), retrieved October 6, 2026. Checksums are in the [source log](../sources.md).
- **Open questions:** OQ-006 (which fields make up the analysis) and OQ-142 (whether the build may use OHCOW's field structure).

## What the public pages state

- **Purpose:** The tool captures "the Physical, Sensory, Cognitive and Psychosocial demands of any job" (announcement). "You select which demands are relative to the job you are assessing" (tool page).
- **Structure:** "After creating a quick job profile, you set up the relevant tasks and assign the various task elements. You can even include photos to enhance the job record" (announcement). The tool "is broken up into 10 key sections" (tool page).
- **Sections named in the announcement:** "Administrative Considerations," "Personal Protective Equipment (PPE)," "Tools, Equipment, and Materials," "Environmental Considerations," "Strength Demands," "Body Posture Frequency," "Sensory Demands," "Cognitive Demands," and "Psychosocial Factors." The announcement calls these "Additional sections," after the job profile and tasks. The pages don't say which of these make up the "10 key sections."
- **Data entry:** "simple checklists, picklists and text fields," and "you can even red flag items that are of concern" (announcement). "A flag icon is provided to 'red flag' any areas of specific concern" (tool page).
- **Lifecycle:** "you can save your work and return to it as required. At the end a final report is generated that can also be exported to a PDF file. You can duplicate existing JDAs to use as a starting point for creating new ones, access completed assessments, final reports and archive older JDA's" (tool page).
- **Origin:** The tool "originated as an Excel-based spreadsheet developed by OHCOW Ergonomists." It lists WorkSafeBC, a paper by Li, Gül, and Al-Hussein on "An improved physical demand analysis framework based on ergonomic risk assessment tools for the manufacturing industry," and Dr. Xinming Li as references (tool page).

## What the application can build without the field list

The part 4 record hierarchy and the part 6 workflow already cover the structure these pages describe:

- A job record with a job profile and the number of workers exposed.
- Tasks and task elements under each job, with photo attachments.
- Demand categories that the assessor selects as applicable, with the nine section names above as the first draft of the category list.
- Flags on any field or record, with a note.
- Save and return, duplication with the origin recorded, archiving, and a PDF report.

The fields inside each section aren't specified. They need a decision from the product owner.

## Finding for the product owner

The tool page says: "If you choose not to log in, you can still navigate through the various pages of the JobAssess Tool but you will not be able to save your completed assessments or view any reports." The field-level content may therefore be visible without an account, which differs from the build prompt's statement that it sits behind a login. The build didn't open those pages. Copying OHCOW's field structure into this application raises a reuse question that the product owner should decide first (OQ-142).
