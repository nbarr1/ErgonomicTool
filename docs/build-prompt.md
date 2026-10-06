# Build prompt: ergonomic assessment, prioritization, and storage application

## Start here: repository and supporting files

I have linked you to a brand-new, empty GitHub repository. Build the whole application in that repository, and generate all of its supporting documentation and configuration there. I am the product owner. Wherever this prompt says "the product owner," it means me.

### First actions

Take these actions in order before any other work:

1. Confirm that you can read from and write to the repository, and that it is empty. If it contains anything, stop and tell me before you change it.
2. Save this prompt, unedited, as `docs/build-prompt.md`. It is the governing specification.
3. Create the supporting files listed in this section, and make the first commit.
4. Reply with your plan for the first milestone and with the open decisions that block it. Then begin the first milestone.

### Supporting files

Create these files at the start, and keep each one accurate as the build progresses:

- **`README.md`:** What the application does, its status by milestone, how to install, run, and test it, the repository layout, and links to the documents in `docs/`. Include the statement that the application supports professional judgment and doesn't replace it.
- **`.gitignore`:** Entries suited to the chosen stack. Exclude dependencies, build output, local environment files, secrets, editor files, and downloaded source documents.
- **`.env.example`:** Every required environment variable, with placeholder values only.
- **`CONTRIBUTING.md`:** Branching, commit, testing, and review conventions, including the rule that no test is weakened to make a build pass.
- **`CHANGELOG.md`:** One entry for each milestone and each method version.
- **`.editorconfig`, linter configuration, and formatter configuration:** One consistent code style from the first commit.
- **Continuous integration workflow:** A workflow file under `.github/workflows/` that runs the checks named in part 7.
- **`docs/`:** The decision, open-question, and source logs, the method specifications, the validation reports, and the user, administrator, and method reference guides that later parts define.
- **`LICENSE`:** Don't choose a license. Ask me which one applies, and state in the README that the license is pending until I answer.

Add other standard repository files when they become relevant, such as a pull request template or a security policy, and tell me when you add one.

### Repository rules

Follow these rules for every change to the repository:

- **Small commits:** Commit in small steps with descriptive messages.
- **One branch and pull request for each milestone:** This rule is a design default, so that I can review at each stop.
- **No secrets:** Never commit credentials, tokens, or keys.
- **No third-party documents:** Don't commit papers, manuals, or other copyrighted sources. Record each one in `docs/sources.md` with its link, retrieval date, and checksum.
- **No settings changes:** Don't change the repository's visibility, permissions, or branch protection.
- **Documentation in step with code:** Update the README and the relevant guide in the same commit as the change they describe.

### How to read this prompt

Three conventions apply throughout:

- **"The crawl":** The author of this prompt reviewed a set of reference web pages on October 5 and 6, 2026. Descriptions of methods and tools come from those pages. Treat them as leads to verify against primary sources, not as specifications. The primary papers and the textbook were not opened.
- **"Design default":** This label marks a recommendation, not a sourced fact. Follow each one unless I tell you otherwise, and list them in `docs/decisions.md`.
- **Vendor claims:** The commercial sites state injury-reduction and time-saving figures. This prompt doesn't rely on them, and the application doesn't repeat them.

## Source register

Every method and feature in this prompt traces to one of the sources in this section. The first 15 were retrieved on October 5, 2026. Treat the commercial products as workflow references only.

| Source | Type | What the page confirmed | Role in this build |
| --- | --- | --- | --- |
| [Inseer](https://www.inseer.com/) | Commercial product | A video upload produces a computer-vision assessment with color-coded risk. A dashboard identifies high-risk areas across an organization. Videos are stored for before-and-after comparison. | Workflow reference: assess, analyze, correct. |
| [OHCOW JobAssess](https://my.ohcow.on.ca/tools-and-apps/job-assess-tool/) | Free web tool, login required for details | Builds a job demands analysis of physical, sensory, cognitive, and psychosocial demands in 10 sections. Supports red flags, save and return, duplication, archiving, and PDF export. | Reference for job demands capture and the assessment lifecycle. |
| [The Shoulder Tool](https://theshouldertool.pythonanywhere.com/en/unit/english/) and its [instructions](https://theshouldertool.pythonanywhere.com/en/instruction/) | Free research tool, version 0.1.2 | Inputs per task: task type, lever arm, load, and repetitions per workday. Outputs: moment, cumulative damage, percent of total damage, and probability of a shoulder outcome. The instructions include worked examples and stated limitations. | Method to implement. Primary source: [Bani Hani et al. (2020)](https://doi.org/10.1080/00140139.2020.1811399). |
| [LiFFT](http://lifft.pythonanywhere.com/) | Free research tool, version 1.4.1 | Inputs per task: lever arm, load, and repetitions per workday. Outputs: moment, cumulative damage, percent of total damage, and probability of a high-risk job. | Method to implement. Primary source: [Gallagher et al. (2017)](http://www.sciencedirect.com/science/article/pii/S0003687017301023). |
| [DUET](http://duet.pythonanywhere.com/) | Free research tool, version 1.3.1 | Inputs per task: an OMNI-RES effort rating from 0 to 10 and repetitions per workday. Outputs: cumulative damage, percent of total damage, and probability of a distal upper extremity outcome. | Method to implement. Primary source: [Gallagher et al. (2018)](https://journals.sagepub.com/doi/abs/10.1177/0018720818789319). |
| [Work(s)](https://www.worksergo.com/) and its [user manual](https://www.worksergo.com/wp-content/uploads/2024/04/Works-User-Manual-v1.16.pdf) | Commercial product, licensed | Evaluates many feasible postures per task, converts each tool's output to a demand/capacity ratio (DCR), and exports a workbook of all inputs and outputs. The manual states that random posture sampling makes results differ slightly between runs. | Reference for input flow, DCR normalization, subtask combination, and reporting. The manual cites the published methods it uses. |
| [HandPak](https://potvinbiomechanics.com/handpak/) | Commercial product, licensed | Quantifies acceptable forces and torques for the forearm, wrist, and hand, for a single effort or by duty cycle. | Scope reference only. Not implementable without a license. |
| [Liberty Mutual manual materials handling population percentiles](https://libertymmhtables.libertymutual.com/) | Free web tool | Covers lifting, lowering, pushing, pulling, and carrying. Reports male and female population percentages. Based on the LM-MMH equations. | Method to implement. Primary source: [Potvin et al. (2021)](https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1891297). |
| [BWC/OSU push/pull guidelines](https://www.bwc.ohio.gov/employer/programs/safety/PushPullGuide/PushPullGuide.aspx) | Free web tool | Inputs: peak force from a force gauge, hand height, one or two hands, and a straight or turning path. Result: one of three population bands. | Method to implement. Primary source: the guidelines PDF linked on that page. |
| [Penn State OPEN Design Lab tools](https://www.openlab.psu.edu/tools/) | Research tools | Tools for evaluating accommodation, exploring anthropometric data, and working with digital human models. | Candidate source for anthropometric data. No method is scoped from it. |
| [Vitrue Health](https://www.vitruehealth.com/) | Commercial product | Employee self-assessment for display screen equipment by webcam, with automated reminders, reporting, and follow-up pathways. | Workflow reference for self-assessment and follow-up. |
| [OSHA ergonomics](https://www.osha.gov/ergonomics) and [Identify problems](https://www.osha.gov/ergonomics/identify-problems) | Government guidance | Lists MSD risk factors, the elements of an ergonomic process, and the injury records to review. Links to the [Applications Manual for the Revised NIOSH Lifting Equation](https://www.cdc.gov/niosh/docs/94-110/). | Source for risk-factor vocabulary, prioritization inputs, and the NIOSH manual. |
| [NIOSH ergonomics](https://www.cdc.gov/niosh/ergonomics/about/index.html) | Government guidance | Defines MSD, work-related MSD (WMSD), and ergonomics program. Lists workplace risks. | Source for definitions. |
| [TeachMeAnatomy](https://teachmeanatomy.info/) | Educational reference | Organizes anatomy by body region and publishes terminology pages for planes, movement, and location. | Reference for consistent body-region and movement terms. Don't copy its text or images. |
| [TuMeke](https://www.tumeke.io/start-free-trial) | Commercial product | Phone-based, AI-driven assessments from video. Use cases: risk assessments, managing improvements, training, and data analysis and reporting. | Workflow reference. |

Four further sources support the biomechanical analysis requirements. They were retrieved on October 6, 2026.

| Source | Type | What the source confirmed | Role in this build |
| --- | --- | --- | --- |
| [3DSSPP user's manual, version 7.1.0](https://www.ehs.com/wp-content/uploads/2021/06/3D-SSPP-Users-Manual-v7.1.0.pdf) | Commercial product manual, VelocityEHS | A static model that works from hand loads down to the feet and assumes negligible acceleration and momentum. It documents inputs, the coordinate system, low-back calculations, limits, batch files, and report export. | Reference for static analysis and for benchmark comparison. Proprietary. |
| [3DSSPP background information](https://c4e.engin.umich.edu/tools-services/3dsspp-software/3dsspp-background-information/) | University of Michigan Center for Ergonomics page | Points to Occupational Biomechanics, fourth edition, for the strength model. States that the predicted posture is a first approximation. | Pointer to the primary reference. |
| [OpenSim documentation: How Inverse Dynamics Works](https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim33/pages/53674153/How+Inverse+Dynamics+Works) | Open-source project documentation, version 3.3 | Inverse dynamics solves the equations of motion for the unknown generalized forces from a known motion. Statements about the tutorial come from search results. | Reference for inverse dynamics, and a candidate engine. |
| ISB joint coordinate system recommendations: [Wu et al. (2002)](https://doi.org/10.1016/s0021-9290(01)00222-6) and [Wu et al. (2005)](https://doi.org/10.1016/j.jbiomech.2004.05.042) | Published recommendations, Journal of Biomechanics | Joint coordinate system definitions for the ankle, hip, and spine, and for the shoulder, elbow, wrist, and hand. Only the PubMed records were read. | Convention for reporting joint angles. |

## Part 1: role, objective, and operating rules

You are a senior full-stack engineer. Build a web application that ergonomists, safety professionals, and engineers use to assess jobs for musculoskeletal disorder (MSD) risk, rank those jobs for action, and store every assessment for later retrieval and comparison.

The application has three functions:

- **Assessment:** A user records the demands of a task and runs one or more published ergonomic assessment methods against those demands.
- **Prioritization:** The application ranks tasks, jobs, and work areas so that a team can decide where to intervene first.
- **Storage:** The application keeps every assessment, its inputs, and its results in a form that can be reopened, audited, compared, and exported.

Two properties outrank every other requirement. **Accuracy** means that each result matches the published method exactly. **Repeatability** means that the same inputs produce the same result every time, for every user, on every device, and after every software update. When ease of use or delivery speed conflicts with accuracy or repeatability, accuracy and repeatability win.

### Operating rules

Follow these rules for the whole build:

1. Implement each calculation from its primary published source, as listed in the source register. Don't write an equation, coefficient, lookup table, or threshold from memory, and don't treat training knowledge as a source.
2. When you can't retrieve a primary source, stop work on that method, record the gap in `docs/open-questions.md`, and move to other work. Don't substitute an estimate, a secondary summary, or a similar method.
3. Treat the commercial products in the source register as references for workflow and feature scope only. Don't copy their code, text, table data, or proprietary scoring.
4. Before you add a method, a threshold, or a default value that this prompt doesn't specify, ask the product owner. Record each answer in `docs/decisions.md`.
5. Report what you verified and what you didn't verify. A claim such as "tests pass" needs the test output with it.
6. Present every output as decision support for a qualified person. Don't label any output as a diagnosis, a guarantee of safety, or a statement of regulatory compliance.

## Part 2: accuracy and repeatability requirements

These requirements turn "accurate" and "repeatable" into properties that tests can check. Treat each one as an acceptance criterion.

### Source fidelity

Follow these rules so that each method matches its publication:

1. **Write the method specification before the code.** For each method, create `docs/methods/<method-id>.md`. Record every equation, constant, lookup table, input definition, measurement instruction, valid input range, output definition, interpretation threshold, and stated limitation. Give the page, table, or equation number for each item.
2. **Store constants as data with provenance.** Keep coefficients and tables in data files, separate from code. Attach a source locator to every value.
3. **Transcribe every table twice.** Make two independent passes, compare them, and resolve each difference against the source.
4. **Add nothing the source doesn't define.** That includes interpolation, extrapolation, rounding rules, and default values. When a source is silent or ambiguous, log the question and wait for an answer.
5. **Keep a method in draft until a person approves it.** A qualified reviewer named by the product owner signs off on the specification and the test results. Label draft results in the interface and exclude them from rankings.

### Deterministic calculation

Build the calculation engine so that identical inputs always produce identical outputs:

- **Pure functions:** Calculations read no clock, network, locale, or environment setting.
- **No unseeded randomness:** If a method requires sampling, use a seeded generator and store the seed with the result. The Work(s) manual documents why: its random posture sampling yields slightly different values on each run.
- **One system of record:** The server-side engine produces every stored result. A client-side preview is acceptable, but the stored value is always the server's.
- **Canonical units:** Store each quantity in one SI unit per dimension. Define each conversion factor once, from a cited standards source.
- **Source units for computation:** Compute each method in the units its source uses, converting from canonical units with the shared factor.
- **Full precision:** Keep full precision through calculation and storage. Round only for display, using the rule recorded in the method specification.
- **Fixed order of operations:** Sum across tasks in a defined order, because floating-point addition is order-sensitive.

### Input integrity

Apply these rules to every input field:

- **Typed schema:** Each input has a name, definition, unit, allowed range, and measurement instruction, all taken from the source.
- **No silent correction:** Reject out-of-range values with a message that states the range. Don't clamp, impute, or extrapolate.
- **No hidden defaults:** Show every default value on the form and save it with the record.
- **Input provenance:** Record whether each value was measured, estimated, taken from a specification, or derived. For measured values, record the instrument.

### Versioning and reproducibility

Make every stored result reproducible for as long as the record exists:

- **Immutable results:** A saved result never changes. It stores the input snapshot, method ID and version, engine version, data-file checksum, seed where one applies, user, timestamp, and full-precision outputs.
- **Versioned methods:** Any change to a method's logic or data creates a new method version. Earlier versions stay executable.
- **Explicit recalculation:** Recalculating under a newer version creates a new result linked to the earlier one, with the differences shown.
- **Reproduce command:** Provide a function that reruns a stored result under its recorded versions and confirms identical outputs.

### Repeatability between analysts

Two analysts who assess the same task should enter the same inputs. Support that outcome in two ways:

- **Measurement instructions at the point of entry:** Show the source's instruction beside each field. For example, the Shoulder Tool instructions define the lever arm as the greatest horizontal distance from the acromion to the center of the hand or load. The BWC/OSU page defines hand height as the distance from the floor to the knuckles on the handle.
- **Independent second assessments:** Let a second analyst assess the same task without seeing the first entry. Show the input differences side by side, and don't average them automatically.

### Verification

A method is ready for review only when all of these tests pass:

- **Published worked examples:** Reproduce every worked example in the primary source, and cite the page in the test. For example, the Shoulder Tool instructions report a 20.8% probability of a right shoulder outcome for a 2-pound load, a 16-inch lever arm, and 2,880 repetitions per workday.
- **Reference-tool parity:** Where a public calculator exists, compare against input and output pairs that a person records from it, with the tool version and date. Don't send automated bulk requests to those sites.
- **Boundaries:** Test the minimum, the maximum, and a value just outside each limit.
- **Unit round trips:** Equivalent metric and English inputs produce the same stored result.
- **Cross-platform determinism:** Run the suite on at least two operating systems and two processor architectures. Outputs match exactly.
- **Constant coverage:** At least one test fails if any stored constant changes.

Record the outcome in `docs/validation/<method-id>.md`, listing each test, its expected value, its actual value, and its source.

### Biomechanical model accuracy

Biomechanical analysis meets every requirement in this part, plus the rules in this section. Working definition, for the product owner to confirm: clinical accuracy means that kinematics follow published anatomical conventions, and that every output agrees with an approved reference within a stated tolerance.

- **Model specification first:** Before any code, document the segments, joints, degrees of freedom, and segment parameters, with the source of each value. Apply the double-transcription rule to every parameter table.
- **Published joint conventions:** Report joint angles in the joint coordinate systems that the International Society of Biomechanics recommends. [Wu et al. (2002)](https://doi.org/10.1016/s0021-9290(01)00222-6) covers the ankle, hip, and spine. [Wu et al. (2005)](https://doi.org/10.1016/j.jbiomech.2004.05.042) covers the shoulder, elbow, wrist, and hand. Record the axis definitions, rotation sequences, and neutral posture in the specification.
- **One global frame and one sign convention:** Define them once, and convert at every boundary with a tested mapping. The tools differ: 3DSSPP sets X to the right, Y forward, and Z up, and it takes the load applied to the hand. Work(s) sets X forward, Y up, and Z to the right, and it takes the force applied by the hand.
- **Assumptions on the result:** Label each result as static or dynamic. A static result carries the statement that acceleration and momentum are treated as negligible.
- **Deterministic numerics:** Fix the solver, convergence tolerance, iteration limit, and starting values. Fix the filter type, cutoff, and order, and the differentiation and resampling methods. Store all of them with the result.
- **Quality gates for motion data:** Report tracking error for inverse kinematics and residual forces and moments for inverse dynamics. Reject a trial that exceeds the thresholds the reviewer approved. The OpenSim tutorial notes that results are sensitive to model scaling, so record how the model was scaled.
- **Physical consistency tests:** Confirm whole-body equilibrium for static cases. Confirm that mirrored inputs give mirrored outputs. Confirm that inverse dynamics at zero velocity and zero acceleration reproduces the static result. Confirm agreement with closed-form solutions for single-segment cases.
- **Benchmark comparison:** Compare every output with an approved reference, such as recorded 3DSSPP runs from a license holder or a published dataset. The reviewer sets the tolerance for each output before the comparison runs. Report the largest and the mean difference.
- **No tuning to pass:** Change a model parameter only when a source supports the change. Record the evidence.
- **Limits matched to the model:** Compare a joint load with a limit only when the limit's source defines it for a comparable model and population. The 3DSSPP manual, for example, takes its back compression and strength limits from the NIOSH Work Practices Guide for Manual Lifting (1981).
- **Stated sensitivity:** For each result, rerun the analysis with fixed perturbations of the key inputs, and show the resulting range. The reviewer approves the perturbation sizes.
- **Not a diagnosis:** Describe outputs as estimated loads on a model. Don't present them as a measurement of an individual's tissue or as a clinical finding.

### Honest output

Every result screen and report shows the method name, method version, citation, and the limitations that the source states. When a task falls outside a method's stated scope, say so and don't calculate. For example, the Shoulder Tool instructions state that the tool doesn't address an arm held directly above the shoulder.

## Part 3: assessment method library

Build the library in three tiers. Tier 1 methods have a public source that the crawl confirmed. Tier 2 items need a license or a product-owner decision. Tier 3 items are candidates that no one has scoped. Biomechanical analysis is a separate layer, described after the tiers.

The input and output columns list only what the crawled pages show. They are a starting checklist, not a specification. The primary source governs.

### Tier 1: implement first

| Method | Assesses | Inputs seen in the crawl | Outputs seen in the crawl | Build from |
| --- | --- | --- | --- | --- |
| Revised NIOSH Lifting Equation | Manual lifting | Not shown on a crawled page | Not shown on a crawled page | [Applications Manual for the Revised NIOSH Lifting Equation](https://www.cdc.gov/niosh/docs/94-110/), DHHS (NIOSH) Publication 94-110. OSHA describes it as a complete description of all terms, with sample calculations. |
| LM-MMH equations | Lift, lower, push, pull, and carry | Frequency, height, distance, and horizontal reach for lift and lower, per the paper's abstract | Maximum acceptable load for 50% of the population, in kg, with coefficients of variation for other percentiles. The Liberty Mutual tool reports male and female population percentages. | [Potvin et al. (2021)](https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1891297) |
| BWC/OSU push/pull guidelines | Pushing and pulling | Peak measured force, hand height, one or two hands, straight or turning path | One of three bands: safe for at least 80%, for 50% to 80%, or for less than 50% of the population | Guidelines PDF linked on the [BWC/OSU page](https://www.bwc.ohio.gov/employer/programs/safety/PushPullGuide/PushPullGuide.aspx) |
| LiFFT | Low back, lifting and lowering | Per task: lever arm, load, repetitions per workday | Moment, cumulative damage, percent of total damage, probability of a high-risk job | [Gallagher et al. (2017)](http://www.sciencedirect.com/science/article/pii/S0003687017301023) |
| DUET | Distal upper extremity | Per task: OMNI-RES effort rating from 0 to 10, repetitions per workday | Cumulative damage, percent of total damage, probability of a distal upper extremity outcome | [Gallagher et al. (2018)](https://journals.sagepub.com/doi/abs/10.1177/0018720818789319) |
| The Shoulder Tool | Shoulder, each side separately | Per task: task type, lever arm, load, repetitions per workday | Moment, cumulative damage, percent of total damage, probability of a shoulder outcome | [Bani Hani et al. (2020)](https://doi.org/10.1080/00140139.2020.1811399) |
| Job demands analysis | Whole job, descriptive | Job profile, tasks, task elements, photos, and nine named sections | A descriptive report, not a risk score | [OHCOW's JobAssess announcement](https://www.ohcow.on.ca/posts/jobassess-app/). Field-level content sits behind a login. |

The LM-MMH input and output details come from the publisher's abstract as shown in a search result, not from a full read of the paper.

### Details the crawl confirmed

Carry these points into the method specifications, and verify each against the primary source:

- **Fatigue-failure tools:** LiFFT, DUET, and the Shoulder Tool each sum cumulative damage across tasks into a daily total and report each task's share. The reference tools provide 10 task rows. Check whether that limit is part of the method before allowing more.
- **Shoulder Tool measurement:** The load is divided between the hands, unevenly where one shoulder bears more. The lever arm is horizontal for handling tasks and vertical for forward pushes and backward pulls. Use the maximum lever arm for each shoulder.
- **Shoulder Tool outcome:** The instructions define the outcome as symptoms severe enough that the worker seeks medical attention.
- **Shoulder Tool binning:** For highly variable jobs, the instructions describe grouping tasks into moment ranges, and they recommend the narrowest practical ranges. They note that binning can inflate the result somewhat.
- **LiFFT outcome:** The tool defines a high-risk job as 12 or more injuries per 200,000 hours worked, citing Marras et al. (1993).
- **BWC/OSU force:** The measured force is the maximum, which is usually the starting force and can be the uphill force on a slope. A path with both straight and curved sections counts as turning.
- **Liberty Mutual interpretation:** A search-result excerpt from the Liberty Mutual site advises designing for at least 90% of the female population. It also flags tasks below 75% as much higher risk. Confirm both figures in the tool before using them.
- **Job demands sections:** OHCOW names administrative considerations, personal protective equipment, tools and equipment and materials, environmental considerations, strength demands, body posture frequency, sensory demands, cognitive demands, and psychosocial factors.

### Tier 2: hold for a license or a decision

| Item | What the crawl confirmed | Why it is held |
| --- | --- | --- |
| [HandPak](https://potvinbiomechanics.com/handpak/) | Commercial software for acceptable forces and torques at the forearm, wrist, and hand | Proprietary. Requires a license from its publisher. |
| Arm Force Field, La Delfa and Potvin (2017) | The Work(s) manual describes it as a neural network that predicts manual arm strength from posture, hand location, and force direction | Requires the published model parameters and permission to reuse them. |
| Maximum acceptable effort equation, Potvin (2012) | The Work(s) manual uses it to adjust strength for duty cycle | Needed only if strength-based methods enter scope. |
| Above-shoulder correction, Rempel and Potvin (2022) | The Work(s) manual states that its outputs for two effort directions match an ACGIH limit for above-shoulder work | Confirm access and licensing for both publications. |
| Feasible-posture prediction | Work(s) uses a proprietary method named InteliPose | Proprietary. Don't replicate it. |
| Video-based pose estimation | Inseer, TuMeke, and Vitrue Health describe computer-vision assessment from video or webcam | Design default: defer it. A pose model needs its own accuracy and repeatability study. Store video as evidence in the first release. |

### Tier 3: candidates that are not scoped

OSHA's "Identify problems" page links to four collections of assessment tools. Review them with the product owner before adding any method:

- [Washington State Department of Labor and Industries evaluation tools](https://lni.wa.gov/safety-health/preventing-injuries-illnesses/sprains-strains/evaluation-tools)
- [UK Health and Safety Executive manual handling tools](https://www.hse.gov.uk/msd/manual-handling/index.htm)
- [AIHA Ergonomic Assessment Toolkit](https://aiha-assets.sfo2.digitaloceanspaces.com/AIHA/resources/ErgonomicAssessmentToolkit.pdf)
- [Department of Defense Ergonomics Working Group assessment tools](https://www.denix.osd.mil/ergo-wg/assessmenttools/)

A search result for OHCOW's public tools listing also names a RULA tool and a Quick Exposure Check tool. Neither page was opened.

### Biomechanical analysis

Offer biomechanical analysis as a second layer, for tasks that the Tier 1 methods can't assess or can't resolve. It estimates net joint moments, joint reaction forces, and low-back loads from posture, external loads, and anthropometry.

Design default: the application suggests biomechanical analysis in three cases, and the assessor decides and records the reason.

- **Out of scope for Tier 1:** The task falls outside the stated scope of every Tier 1 method. The Work(s) manual gives large trunk twists and asymmetric hand forces as examples for the LM-MMH equations.
- **Joint-specific question:** The decision depends on the load at a particular joint.
- **Design comparison:** The team is comparing workstation designs before building one.

| Analysis type | What it computes | Inputs | Use it when | Source basis |
| --- | --- | --- | --- | --- |
| Static posture analysis | Net joint moments and reaction forces for a held posture, and low-back compression and shear | Anthropometry, posture as joint or segment angles, hand loads, other external forces, and the support condition | The exertion is held or slow | The [3DSSPP user's manual](https://www.ehs.com/wp-content/uploads/2021/06/3D-SSPP-Users-Manual-v7.1.0.pdf) describes a top-down model from the hand loads to the feet. It assumes that acceleration and momentum are negligible. |
| Posture from hand positions | A candidate posture that places the hands at measured locations | Hand locations and anthropometry | The assessor needs a starting posture to correct | The 3DSSPP manual calls its inverse kinematics result a first approximation that may not represent the actual posture. |
| Motion-based inverse kinematics | Joint angles over time that best reproduce a recorded motion | Motion capture data and a model scaled to the subject | Recorded motion exists | OpenSim tutorial, as shown in a search result |
| Inverse dynamics | Net joint reaction forces and moments over time, including inertial effects | Joint kinematics, external forces, and segment inertial parameters | Acceleration affects the load | [OpenSim documentation](https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim33/pages/53674153/How+Inverse+Dynamics+Works): the known motion is used to solve the equations of motion for the unknown generalized forces. |

Apply these rules to every biomechanical analysis:

- **Static first:** The 3DSSPP manual describes dividing an activity into a sequence of static postures. Use inverse dynamics only when recorded motion passes the quality gates in part 2.
- **Predicted postures are drafts:** Label a predicted posture as predicted. Require the assessor to confirm it against an observation or photo before the result becomes final.
- **Named low-back model:** State the spinal level and the calculation method on every result. The 3DSSPP manual reports forces at L5/S1 and a separate three-dimensional compression at L4/L5, so values from different models aren't interchangeable.
- **Strength comparison needs a source:** Report the share of a population with enough strength only when a published or licensed strength dataset supports it.
- **Motion data source:** Video-derived kinematics remain deferred under Tier 2. Until that changes, motion data comes from imported motion capture files.
- **Same caution as the source:** The 3DSSPP manual states that it shouldn't be the sole determinant of job design. Show the equivalent statement on every biomechanical result.

3DSSPP is licensed software, and VelocityEHS publishes its manual. Don't copy its code, strength data, or algorithms. The product owner chooses one of three roles for it:

- **Benchmark:** A license holder runs agreed cases in 3DSSPP, and the outputs become comparison fixtures. The manual documents batch files and report export, which support this use.
- **Import:** The application stores 3DSSPP's exported report data as an external result, labeled with the tool version. The application doesn't recompute it.
- **None:** The application doesn't use 3DSSPP.

For a native engine, the 3DSSPP manual names Occupational Biomechanics, fourth edition, by Chaffin, Andersson, and Martin (2006) as the reference for the model mathematics. For inverse kinematics and inverse dynamics, evaluate a native implementation against an open-source library such as OpenSim. Confirm the library's license, and pin its version.

Register each analysis type through the method registry. Add three fields to its entry: the model version, the convention set, and the solver settings.

### Method registry

Register every method through one interface, so that the application treats all methods the same way. Each entry declares these fields:

- **Identity:** Method ID, name, version, and status of draft, validated, or retired.
- **Citation:** Full reference and link to the primary source.
- **Applicability:** Task types, body regions, and body side, as the source states them.
- **Schemas:** Input and output definitions with units and ranges.
- **Interpretation:** Result bands, only where the source publishes them.
- **Limitations:** The source's own statement of what the method doesn't cover.

## Part 4: data model, storage, and audit trail

Storage must let a user reopen, audit, compare, and export any assessment for as long as the record exists.

### Record hierarchy

Model the workplace as a chain of records, from the organization down to a single result:

1. **Organization:** The tenant. No data crosses organizations.
2. **Site:** A physical location with its own time zone.
3. **Area:** A department, line, or zone within a site.
4. **Job:** A role that workers perform. It holds the job demands analysis and the number of workers exposed.
5. **Task:** A distinct activity within a job.
6. **Task element:** One row of method inputs, such as a single lift or exertion.
7. **Assessment:** One method version applied to one task by one analyst on one date.
8. **Result:** The immutable output of an assessment.

### Supporting records

These records attach to the hierarchy:

- **Measurement:** The value and unit as entered, the canonical value, the provenance, and the instrument.
- **Attachment:** A photo, video, or document linked to a job, task, or assessment. Inseer stores video for before-and-after comparison, and OHCOW's tool accepts photos.
- **Flag:** A marker of concern on any field or record, with a note. OHCOW's tool uses a red flag for this purpose.
- **Control:** A planned or completed change to a task, with an owner, status, and dates. It links a baseline assessment to a follow-up assessment.
- **Injury and report counts:** Optional counts by job and period. OSHA names the sources: OSHA 300 logs, 301 reports, workers' compensation records, first aid logs, and worker reports.
- **Ranking snapshot:** The ranking rule version, its inputs, and the resulting order at a point in time.
- **Audit event:** The actor, action, time, and the values before and after.

### Biomechanical analysis records

A biomechanical analysis adds these records, so that any result can be rerun from its stored inputs:

- **Anthropometry set:** Sex, stature, body mass, and segment parameters, with the source of each. Record whether the values are population percentiles or measurements of an individual.
- **Posture record:** Joint angles in the documented convention, and how they were obtained: measured, estimated from a photo, predicted, or imported. Link the reference photo.
- **External load record:** The force vector and point of application for each hand and any other loaded body location, with the frame, sign convention, and instrument.
- **Support condition:** Standing or seated, with each support that carries load.
- **Motion trial:** The original capture file, unaltered and with a checksum, plus the capture system, sampling rate, marker or sensor set, and calibration record.
- **Model and solver record:** The model version, convention set, solver settings, and filter settings.
- **Biomechanical result:** Outputs by joint, axis, side, and time, with the quality metrics and assumptions. It is immutable, like every other result.
- **External tool result:** Output imported from licensed software, with the tool name, tool version, operator, and original export file.

### Storage rules

Apply these rules to every record type:

- **Relational integrity:** Use a relational database with foreign keys and constraints. Design default: PostgreSQL.
- **Append-only results:** A correction creates a new assessment that supersedes the earlier one. The earlier one stays visible with a status of superseded.
- **Lifecycle states:** Each assessment is draft, final, superseded, or archived. Only final assessments feed rankings.
- **Save and return:** Save drafts automatically, and let a user resume later. OHCOW's tool describes the same behavior.
- **Duplicate as a starting point:** Let a user copy an assessment, and record the origin on the copy.
- **Complete audit log:** Log every create, update, status change, export, and deletion request. The log is append-only.
- **No silent deletion:** Archive by default. A permanent deletion requires an administrator and leaves a tombstone record.
- **Time:** Store timestamps in UTC, and display them in the site's time zone.
- **Attachments:** Store each original file unaltered, with a checksum.
- **Migrations:** Version every schema change. A migration never rewrites a stored result.
- **Recovery:** Automate backups, and include a tested restore procedure in the deliverables.

### Privacy and access

Design default: assess jobs, not people. Keep worker names and health information out of assessment records, and store injury data as counts only. Photos and video can show identifiable workers, so record consent status for each attachment and restrict access by role.

Provide four roles as a design default: administrator, assessor, reviewer, and viewer. Encrypt data in transit and at rest. Don't state that the application complies with any privacy or security standard.

### Export and exchange

Every record must be able to leave the system intact:

- **Assessment report:** Export each assessment as a PDF and as a spreadsheet workbook. Include every input, output, version, citation, and limitation. Work(s) exports a comparable workbook, and OHCOW's tool exports a PDF.
- **Bulk export:** Export all records as CSV and JSON with a documented schema.
- **Round trip:** Importing an exported file recreates an identical record, which a test confirms.

### Controlled vocabulary

Use one controlled list each for body region, body side, and movement terms, and use standard anatomical terminology throughout. TeachMeAnatomy organizes the body into head, neck, thorax, back, upper limb, lower limb, abdomen, and pelvis. Map each method to body regions with the wording its source uses.

## Part 5: prioritization

Rank tasks and jobs with a rule that is explicit, versioned, and explainable. Don't invent a composite score with weights that no source supports.

### How the reference sources prioritize

The crawled pages show five approaches:

- **Share of cumulative damage:** The fatigue-failure tools report each task's percent of total damage. The Shoulder Tool instructions give intervention priority to the task with the majority of the damage.
- **Demand/capacity ratio:** Work(s) divides each demand by its capacity and treats a ratio greater than 1.0 as unacceptable. It takes the highest ratio as the overall value and displays the ratios from highest to lowest.
- **Population accommodated:** The BWC/OSU and Liberty Mutual tools express a result as a percentage of the population.
- **Organization-wide views:** Inseer and TuMeke describe dashboards that surface the highest-risk tasks, with before-and-after comparison.
- **Records and reports:** OSHA advises reviewing injury records and worker reports to identify problem jobs.

The Work(s) manual also cautions that software results shouldn't be the sole determinant of risk. It advises combining them with professional judgment, worker feedback, and injury statistics.

### Ranking rule

This rule is a design default. The product owner approves it, and any change creates a new rule version.

1. **Show native results first.** Present each method's output in its own units. Never replace it with a derived number.
2. **Take bands only from sources.** Assign a result to a band only where the method's source publishes the thresholds.
3. **Don't compare native values across methods.** A shoulder outcome probability and a push/pull population band are different quantities.
4. **Map bands to priority levels through approved configuration.** Define three priority levels: high, medium, and low. For each method, a reviewer approves a table that maps its published bands to those levels. Store the table with its citations and version.
5. **Leave unmapped methods out of the level.** A method without published thresholds, or without an approved map, appears as supporting information only.
6. **Use the highest level.** A task takes the highest priority level among its final assessments. A job takes the highest level among its tasks.
7. **Break ties in a fixed order.** Within a level, sort by open flags, then workers exposed, then injury and report counts for the selected period.
8. **Keep unassessed work visible.** List jobs without a final assessment as "not assessed." Never rank them as low.
9. **Explain every position.** Each ranked item states which result set its level and which tie-breakers applied.
10. **Snapshot each ranking.** Store the rule version and inputs so that the same ranking can be regenerated.

### Views

Provide these views, each with filters for site, area, body region, method, status, and date range:

- **Ranked list:** Jobs and tasks in ranked order, with the explanation for each position.
- **Task contribution:** Within a job, each task's share of cumulative damage, for methods that report it.
- **Body-region summary:** The highest priority level for each body region. Work(s) presents its ratios on a body map.
- **Before and after:** Baseline and follow-up results side by side for each control. When the method versions differ, say so and offer a recalculation as a new linked result.
- **Trend:** The count of tasks at each priority level over time.
- **Coverage:** The share of jobs with a final assessment.

### Guardrails

Apply these limits to every ranking view:

- **Decision support only:** State on each view that rankings support professional judgment and don't replace it.
- **No outcome predictions:** Don't forecast injury reductions, cost savings, or return on investment.
- **No color-only meaning:** Pair every color with a text label and an icon.

## Part 6: user experience and consistency

An assessor with basic ergonomics training completes a first assessment without separate instruction. Every method uses the same screens in the same order.

### Workflow

Support this sequence from setup to export:

1. **Set up the workplace.** Create sites, areas, and jobs, with bulk import from a spreadsheet.
2. **Describe the job.** Complete the job profile and the job demands sections. Let the user select which demand categories apply, as OHCOW's tool does.
3. **Add tasks and task elements.** Attach photos or video as evidence.
4. **Choose methods.** List the methods whose stated applicability matches the task. Show each method's scope and limitations before the user starts.
5. **Enter measurements.** Present one group of inputs at a time, with the unit, the allowed range, and the source's measurement instruction. Update derived values as the user types.
6. **Review and finalize.** Show every input on one summary screen before calculation. Finalizing locks the assessment.
7. **Read the result.** Show the native output, the band where the source publishes one, the task contributions, the limitations, the citation, and the method version.
8. **Plan a control and reassess.** Link the follow-up assessment to the baseline.
9. **Prioritize.** Open the ranked views.
10. **Export.** Produce the report and the workbook.

### Consistency rules

Apply these rules across the whole application:

- **One screen pattern:** Every method follows the same steps of task details, inputs, review, and result. Units, help, and validation messages appear in the same place on every screen.
- **One design system:** Use a single component library and one set of design tokens. No method has its own styling.
- **One glossary:** Each term has one meaning. Take the definitions of MSD and WMSD from NIOSH. Where a source uses a different name for an input, show the source's name alongside the glossary term.
- **Units on every number:** Set the unit system for each organization, with a per-user override. The reference tools offer English and metric units.
- **Consistent numbers:** Display each output with the rounding recorded in its method specification. Locale formatting affects display only.
- **Inline validation:** Show the message at the field, and state the allowed range.
- **Visible status:** Show the assessment status and the method status on every assessment screen.
- **Source wording for results:** Describe a result in the terms its source uses. Don't add words such as "safe" or "unsafe" where the source doesn't use them.

### Field use

Assessors often work where the job is performed, so design for phones and tablets first. Save every change automatically, and return the user to the same step after an interruption. Inseer describes recording video on any device, and TuMeke describes working from a phone.

### Accessibility

Design default: meet WCAG 2.2 at level AA. Make every function keyboard-operable, label every control for screen readers, and give each chart an equivalent data table. Don't rely on color or screen position to convey meaning.

### Usability checks

Include these checks in the deliverables:

- **End-to-end tests:** Automate each workflow step in a browser test.
- **Accessibility tests:** Run automated accessibility checks in continuous integration, and document a manual keyboard and screen-reader pass.
- **Moderated session script:** Write a task script that the product owner can run with assessors. You can't recruit users, so report this check as not run.

## Part 7: architecture, milestones, and definition of done

Deliver in seven milestones, and stop for product-owner review at the end of each one. No application code is written until the method specifications are approved.

### Architecture

Every item in this list is a design default. Confirm the stack with the product owner before the second milestone.

- **Language:** TypeScript for the engine, the API, and the web client.
- **Calculation engine:** A standalone package with no dependency on the interface, the database, or the network. Each function takes a validated input object and returns a result object.
- **API:** The only path that creates a stored result. It validates inputs against the method schema, calls the engine, and writes the result.
- **Web client:** One responsive application. It can import the engine for previews.
- **Data:** PostgreSQL for records, and object storage for attachments.
- **Authentication:** A standard protocol through a maintained library. Don't write custom cryptography.
- **Repository layout:** `engine/`, `methods/<method-id>/`, `api/`, `web/`, and `docs/`. Each method folder holds its specification, data files, code, and tests.
- **Continuous integration:** Linting, type checks, unit tests, published-example tests, the cross-platform determinism run, end-to-end tests, and accessibility checks.
- **Dependencies:** Pin every version, and commit the lockfile.

### Milestones

Complete the milestones in this order:

1. **Sources and specifications.** Retrieve every Tier 1 primary source. Write each method specification. List every source that couldn't be retrieved, with the reason. Propose a band map for each method that publishes thresholds. Exit: the product owner and the reviewer approve the specifications.
2. **Calculation engine.** Implement the approved methods and their data files. Pass every verification test, and write the validation reports. Exit: the reviewer signs each validation report.
3. **Data and storage.** Build the schema, migrations, API, audit log, versioning, reproduce command, and export and import round trip.
4. **Assessment workflow.** Build workflow steps 1 through 8 for every validated method, using the single screen pattern.
5. **Prioritization.** Build the ranking rule, the snapshots, and the views.
6. **Biomechanical analysis.** Write the model specification, and get it approved. Then build the static analysis, its records, and its screens. Pass the physical consistency tests and the benchmark comparison. Add inverse kinematics and inverse dynamics only if the product owner places them in scope. Exit: the reviewer signs the biomechanical validation report.
7. **Hardening.** Complete accessibility, performance, backup and restore, security review, and documentation.

### Working practices

Follow these practices in every milestone:

- **Plan first:** Start each milestone with a written plan.
- **Tests with every change:** Commit code and its tests together.
- **Fix the cause:** When a test fails, correct the code or the transcription. Change an expected value only when the source shows that the value was wrong, and record the evidence.
- **Keep the tests:** Don't weaken, skip, or delete a test to make a build pass.
- **Three running logs:** Maintain `docs/decisions.md`, `docs/open-questions.md`, and `docs/sources.md`. The sources log records each source's link, retrieval date, file checksum, and terms of use.
- **Licensing:** Flag every source whose terms might restrict reuse of its equations or tables. The product owner decides whether to seek permission.
- **Milestone report:** State what is complete, what was verified with evidence, what wasn't verified, and which questions remain open.

### Definition of done

A method is done when all of these statements are true:

- Its specification is approved.
- Its data files passed double transcription.
- Every verification test passes.
- Its validation report is signed.
- Its citation and limitations appear on every result.

The application is done when all of these statements are true:

- Every Tier 1 method is validated or deferred with a recorded reason.
- The reproduce command returns identical outputs for every stored result in the test dataset.
- The cross-platform determinism run passes.
- Every workflow step has a passing end-to-end test.
- The export and import round trip passes.
- Automated accessibility checks pass, and the manual pass is documented.
- A restore from backup has been tested.
- The user guide, administrator guide, method reference, and validation reports are complete.
- No open question that affects a calculation remains unanswered.

The biomechanical analysis is done when all of these statements are true:

- The model specification is approved.
- Every physical consistency test passes.
- Every output agrees with its approved reference within the approved tolerance.
- Each result shows its model, conventions, assumptions, and sensitivity range.
- The reviewer has signed the biomechanical validation report.

## Open decisions

Confirm each item with the product owner before the milestone it affects, and record the answer in `docs/decisions.md`. Don't resolve any of them by assumption.

### Scope

- [ ] Which Tier 1 methods belong in the first release, and in what order?
- [ ] Which Tier 2 methods are in scope, and which licenses does the product owner hold?
- [ ] Should any Tier 3 collection be reviewed for further methods? Methods that appear on no crawled page are absent from this prompt. REBA and the Strain Index are two examples, and both names come from general knowledge, not from the crawl.
- [ ] Is video-based pose estimation planned for a later release, and what accuracy and repeatability evidence would it need?
- [ ] Is employee self-assessment of office workstations in scope, as Vitrue Health describes?
- [ ] Which fields make up the job demands analysis? OHCOW's field list sits behind a login.
- [ ] Is anthropometric data needed, and from which licensed source?

### Accuracy and review

- [ ] Who is the qualified reviewer for method specifications and validation reports?
- [ ] Does the product owner have access to each primary source, and permission to implement its equations and tables?
- [ ] Who approves each band map, the priority level names, and the tie-breaker order?
- [ ] What interval or event triggers a reassessment?

### Biomechanical analysis

- [ ] Does "clinical accuracy" match the working definition in part 2, or does it refer to a specific clinical or regulatory standard?
- [ ] Does the product owner hold a 3DSSPP license, and which role applies: benchmark, import, or none?
- [ ] Should the static analysis be built natively from published sources, or should the application rely on external tools?
- [ ] Which strength dataset, if any, is licensed for population strength comparisons?
- [ ] Is inverse dynamics part of the first biomechanics release, and which motion capture systems and file formats must import?
- [ ] Which engine performs inverse kinematics and inverse dynamics: a native implementation or an open-source library?
- [ ] Which spinal level and low-back model does the reviewer approve, and which published limits apply to it?
- [ ] What tolerance does the reviewer approve for each output in the benchmark comparison?
- [ ] Who reviews the biomechanical model? That reviewer needs biomechanics expertise.
- [ ] Can the application store measured anthropometry for an individual worker, or population values only?

### Platform and data

- [ ] Is the default stack acceptable, or is there a house stack and hosting environment?
- [ ] Does the application serve one organization or many, and at what scale of sites, users, and assessments?
- [ ] Which identity provider handles sign-in?
- [ ] Which privacy laws, retention periods, and data-residency rules apply?
- [ ] Can attachments show identifiable workers, and how is consent recorded?
- [ ] Is offline data capture required?
- [ ] Which unit system is the default, and which languages are required?
- [ ] Should injury and report counts be imported from an existing safety system, and is an integration required?
