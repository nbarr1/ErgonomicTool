# Revised NIOSH Lifting Equation (`rnle`): method specification

- **Status:** Draft. Not approved. Results computed under this specification must be labeled as draft and excluded from rankings.
- **Specification revision:** Draft 1, October 6, 2026. A method version number is assigned when the reviewer approves the specification.
- **Reviewer:** Not named (OQ-008).

## Source

- **Citation:** Waters TR, Putz-Anderson V, Garg A. Applications manual for the revised NIOSH lifting equation. Cincinnati, OH: U.S. Department of Health and Human Services, Centers for Disease Control and Prevention, National Institute for Occupational Safety and Health. DHHS (NIOSH) Publication No. 94-110 (Revised 9/2021). [https://doi.org/10.26616/NIOSHPUB94110revised092021](https://doi.org/10.26616/NIOSHPUB94110revised092021)
- **File:** SHA-256 `b25de48aeea47c5941c8eb2013be03c9c9fcf4c26a2ccd39486fae530a59c378`. See the [source log](../sources.md).
- **Terms of use:** Public domain (title page verso).
- **Locators:** "p. N" is the page number printed in the manual. The PDF page number is N + 16 for pages 1 to 80. Roman-numbered front matter is cited by its printed numeral.
- **Edition note:** The foreword (p. iii) and the change list (p. xi) state that the 2021 revision corrects typographical errors, replaces a recovery time factor of 1.2 with 1.0, and leaves "the formulas, multipliers and limitations" otherwise "identical to those in the 1994 manual." This specification follows the 2021 revision.
- **Related source not retrieved:** The manual refers readers to Waters, Putz-Anderson, Garg, and Fine (1993), "Revised NIOSH Equation for the Design and Evaluation of Manual Lifting Tasks," for the rationale and derivation (p. xiv, p. 19). This build didn't retrieve that article. Nothing in this specification depends on it.

## What the method assesses

The method assesses the physical stress of two-handed manual lifting and lowering tasks for the risk of lifting-related low back pain (LBP).

- **Recommended Weight Limit (RWL):** "the weight of the load that nearly all healthy workers could perform over a substantial period of time (e.g., up to 8 hours) without an increased risk of developing lifting-related LBP" (p. 1, section 1.1.1).
- **Lifting Index (LI):** "a relative estimate of the level of physical stress associated with a particular manual lifting task" (p. 1, section 1.1.2).
- **Body region:** Back (low back). The source's term is "low back pain" and "low back disorders" (p. xiii, p. 19). The controlled vocabulary maps this to the region "back."
- **Body side:** Not applicable. The method assesses two-handed lifting.

## Applicability and scope checks

The engine must refuse to calculate, and must say why, when the assessor records any condition from the source's "does not apply" list (p. 6, section 1.2):

| Condition recorded by the assessor                                                     | Source wording (p. 6)                                                                                                                                        |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| One-handed lifting or lowering                                                         | "Lifting/lowering with one hand"                                                                                                                             |
| Lifting or lowering for more than 8 hours                                              | "Lifting/lowering for over 8 hours"                                                                                                                          |
| Seated or kneeling                                                                     | "Lifting/lowering while seated or kneeling"                                                                                                                  |
| Restricted work space                                                                  | "Lifting/lowering in a restricted work space"                                                                                                                |
| Unstable object                                                                        | "Lifting/lowering unstable objects"                                                                                                                          |
| Lifting or lowering while carrying, pushing, or pulling                                | "Lifting/lowering while carrying, pushing or pulling"                                                                                                        |
| Wheelbarrows or shovels                                                                | "Lifting/lowering with wheelbarrows or shovels"                                                                                                              |
| High-speed motion                                                                      | "Lifting/lowering with high speed motion (faster than about 30 inches/second)"                                                                               |
| Foot-floor coefficient of friction below 0.4                                           | "Lifting/lowering with unreasonable foot/floor coupling (<0.4 coefficient of friction between the sole and the floor"                                        |
| Temperature outside 19 to 26 °C (66 to 79 °F), or relative humidity outside 35% to 50% | "Lifting/lowering in an unfavorable environment (i.e., temperature significantly outside 66–79° F (19–26° C) range; relative humidity outside 35–50% range)" |

Supporting detail from section 1.2 (pp. 5-6):

- Non-lifting activities (holding, pushing, pulling, carrying, walking, climbing) are assumed minimal. "If such non-lifting activities account for more than about 10% of the total worker activity, then measures of workers' energy expenditures and/or heart rate may be required." Carrying "should be limited to one or two steps and holding should not exceed a few seconds" (p. 5, item 1).
- An unstable load is "an object in which the location of the center of mass varies significantly during the lifting activity, such as some containers of liquid or incompletely filled bag" (p. 5, item 3).
- High speed: "a high speed lift would be equivalent to a speed of about 30 inches/second. For comparison purposes, a lift from the floor to a tabletop that is completed in less than about 1 second would be considered high speed" (p. 5, footnote 4).
- Lifting and lowering are assumed to carry the same risk (p. 6, item 5).
- "No weight limits are provided for more than eight hours of work" (p. 14).
- The lifting task is defined as "the act of manually grasping an object of definable size and mass with two hands, and vertically moving the object without mechanical assistance" (p. 2).

The source qualifies several of these conditions with words such as "significantly" and "about." The application records the assessor's answer to each condition. It doesn't decide the threshold for "significantly." See OQ-110.

## Inputs

Every input is measured at the origin of the lift. H, V, and A are also measured at the destination when the task requires significant control at the destination (pp. 8, 12, 26). The source gives both U.S. customary and metric units for every length and weight.

| Input                                  | Symbol | Definition and measurement instruction (source)                                                                                                                                                                                                                                                                                                                                                  | Units     | Locator                                |
| -------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------- |
| Load weight                            | L      | "Weight of the object to be lifted, in pounds or kilograms, including the container." If the weight varies from lift to lift, record the average and the maximum.                                                                                                                                                                                                                                | lb or kg  | p. 2; p. 23, item 1                    |
| Horizontal location                    | H      | "measured from the mid-point of the line joining the inner ankle bones to a point projected on the floor directly below the mid-point of the hand grasps (i.e., load center), as defined by the large middle knuckle of the hand." If the feet are rotated, "the mid-sagittal plane is defined by the worker's neutral body posture."                                                            | in or cm  | p. 7, section 1.3.1.1; Figure 1, p. 3  |
| Vertical location                      | V      | "measured vertically from the floor to the mid-point between the hand grasps as defined by the large middle knuckle."                                                                                                                                                                                                                                                                            | in or cm  | p. 9, section 1.3.2.1                  |
| Vertical travel distance               | D      | For lifting, V at the destination minus V at the origin. For lowering, V at the origin minus V at the destination. Defined as an absolute value in the terminology list.                                                                                                                                                                                                                         | in or cm  | p. 10, section 1.3.3.1; p. 2           |
| Asymmetry angle                        | A      | "the angle between the asymmetry line and the mid-sagittal line." The asymmetry line joins the mid-point between the inner ankle bones and the point on the floor below the mid-point of the hand grasps. The angle "is not defined by foot position or the angle of torso twist, but by the location of the load relative to the worker's mid-sagittal plane." Assumes no pivoting or stepping. | degrees   | p. 12, section 1.3.4.1; Figure 2, p. 4 |
| Lifting frequency                      | F      | "the average number of lifts made per minute, as measured over a 15-minute period." Use work sampling when frequency varies over the day. If frequency varies between sessions by more than two lifts per minute, analyze each session as a separate task.                                                                                                                                       | lifts/min | p. 13, section 1.3.5.1; pp. 23, 26     |
| Lifting duration category              | —      | Short, moderate, or long, from the work pattern of continuous work time and recovery time. See "Lifting duration."                                                                                                                                                                                                                                                                               | category  | pp. 13-14, section 1.3.5.2             |
| Coupling classification                | C      | Good, fair, or poor, from Table 6 and its notes. "If there is any doubt about classifying a particular coupling design, the more stressful classification should be selected."                                                                                                                                                                                                                   | category  | p. 16, section 1.3.6.1; Table 6, p. 17 |
| Significant control at the destination | —      | Yes when "(1) the worker has to re-grasp the load near the destination of the lift, or (2) the worker has to momentarily hold the object at the destination, or (3) the worker has to carefully position or guide the load at the destination."                                                                                                                                                  | yes or no | p. 2; p. 21, section 2.1.1             |
| Container width (estimation only)      | W      | "the width of the container in the sagittal plane." Used only to estimate H when H can't be measured.                                                                                                                                                                                                                                                                                            | in or cm  | p. 8                                   |

### Estimating H

"Horizontal Location (H) should be measured. In those situations where the H value cannot be measure, then H may be approximated from the following equations" (p. 8). The reconciled table is `methods/rnle/transcription/table-h-estimation.reconciled.csv`:

| Metric (all distances in cm) | U.S. customary (all distances in inches) |
| ---------------------------- | ---------------------------------------- |
| H = 20 + W/2 for V ≥ 25 cm   | H = 8 + W/2 for V ≥ 10 inches            |
| H = 25 + W/2 for V < 25 cm   | H = 10 + W/2 for V < 10 inches           |

An estimated H must be stored with the provenance "derived" and the inputs W and V, as part 2 of the build prompt requires.

### Lifting duration

Duration is classified from the pattern of continuous work time (WT) and recovery time (RT), where recovery time is "the duration of light work activity following a period of continuous lifting" (p. 13).

| Category | Source definition                                                                                                                                                                                  | Locator |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Short    | "a work duration of one hour or less, followed by a recovery time equal to 1.0 times the work time [i.e., at least a 1.0 recovery-time to work-time ratio (RT/WT)]"                                | p. 13   |
| Moderate | "a duration of more than one hour, but not more than two hours, followed by a recovery period of at least 0.3 times the work time [i.e., at least a 0.3 recovery-time to work-time ratio (RT/WT)]" | p. 14   |
| Long     | "a duration of between two and eight hours, with standard industrial rest allowances (e.g., morning, lunch, and afternoon rest breaks)"                                                            | p. 14   |

Rules (p. 14):

- If the required recovery time isn't met and another lifting session follows, the work times are added together, and the recovery period "is disregarded for purposes of determining the appropriate duration category."
- Worked illustrations: 30 minutes of lifting, 10 minutes of light work, then 45 minutes of lifting is moderate duration (75 minutes total). With a 30-minute recovery period instead, the short-duration category applies. Two hours of continuous lifting needs at least 36 minutes of recovery to stay moderate.
- For infrequent lifting (F < 0.1 lift/minute), "the recovery period will usually be sufficient to use the 1-hour duration category" (p. 15).

The application asks the assessor for the work pattern and shows the category it derives, with the rule that produced it. See OQ-111 for the boundary at exactly one and two hours.

## Equations

### Recommended Weight Limit and Lifting Index

```text
RWL = LC × HM × VM × DM × AM × FM × CM          (p. 1, section 1.1.1; p. 7, section 1.3)
LI  = Load Weight / Recommended Weight Limit = L / RWL     (p. 1, section 1.1.2; p. 19)
```

### Load constant and multipliers

The table under section 1.3 (p. 7) defines the constants and multiplier formulas. The reconciled transcription is `methods/rnle/transcription/table-0-multiplier-formulas.reconciled.csv`.

| Term                  | Symbol | Metric             | U.S. customary      |
| --------------------- | ------ | ------------------ | ------------------- |
| Load Constant         | LC     | 23 kg              | 51 lb               |
| Horizontal Multiplier | HM     | (25/H)             | (10/H)              |
| Vertical Multiplier   | VM     | 1 − (.003\|V−75\|) | 1 − (.0075\|V−30\|) |
| Distance Multiplier   | DM     | .82 + (4.5/D)      | .82 + (1.8/D)       |
| Asymmetric Multiplier | AM     | 1 − (.0032A)       | 1 − (.0032A)        |
| Frequency Multiplier  | FM     | From Table 5       | From Table 5        |
| Coupling Multiplier   | CM     | From Table 7       | From Table 7        |

The section text gives the VM formula with square brackets instead of absolute-value bars: "(1−(.0075 [V−30])" and "(1−(.003 [V−75])" (p. 9). The same paragraph describes VM as using "the absolute value or deviation of V from an optimum height," and Table 2 is symmetric about 30 inches, so the absolute-value form is used.

### Formula or table

"Each multiplier should be computed from the appropriate formula" (p. 7). Sections 1.3.1.3, 1.3.2.3, 1.3.3.3, and 1.3.4.3 each add that the value "can be computed directly or determined from" Tables 1 to 4. FM and CM have no formula and come from Tables 5 and 7.

This specification computes HM, VM, DM, and AM from the formulas and uses Tables 1 to 4 only as verification references. The build compared every numeric row of Tables 1 to 4 with its formula, evaluated in exact decimal arithmetic and rounded to two decimals. Every row agrees, with these exceptions:

| Table                   | Row        | Table value | Formula value           | Formula rounded |
| ----------------------- | ---------- | ----------- | ----------------------- | --------------- |
| Table 1, U.S. customary | H = 22 in  | .46         | 10/22 = 0.4545…         | .45             |
| Table 1, U.S. customary | H = 23 in  | .44         | 10/23 = 0.4347…         | .43             |
| Table 3, metric         | D = 130 cm | .86         | .82 + 4.5/130 = 0.8546… | .85             |

In addition, 15 rows have a formula value that ends exactly in 5 in the third decimal (for example, VM at 20 inches is 0.925). The tables round all of them up, which matches rounding half away from zero. The three exceptions don't depend on the rounding rule. The reviewer confirms that the formulas govern (OQ-112).

### Restrictions on each variable

These substitutions are rules of the method, stated by the source. They aren't input corrections. The engine applies them, shows the substituted value next to the measured value, and stores both.

| Variable | Rule                                                                                                                                                                                                                                                                                    | Locator                                      |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| H        | If H is less than 10 in (25 cm), H is set to 10 in (25 cm), so HM = 1.0. If H is greater than 25 in, HM = 0. The metric maximum is stated as 63 cm in the text and Table 1.                                                                                                             | p. 8, sections 1.3.1.2-1.3.1.3; Table 1      |
| V        | V is limited by the floor and "the upper limit of vertical reach for lifting (i.e., 70 inches or 175 cm)." If V is greater than 70 in, VM = 0. Table 2 also gives VM = .00 for V > 175 cm.                                                                                              | p. 9, sections 1.3.2.2-1.3.2.3; Table 2      |
| D        | D "is assumed to be at least 10 inches (25cm), and no greater than 70 inches [175cm]." If D is less than 10 in (25 cm), D is set to 10 in (25 cm). Table 3 gives DM = .00 for D > 70 in and D > 175 cm.                                                                                 | pp. 10-11, sections 1.3.3.2-1.3.3.3; Table 3 |
| A        | "The angle A is limited to the range from 0° to 135°. If A > 135°, then AM is set equal to zero, which results in a RWL of zero, or no load."                                                                                                                                           | p. 12, section 1.3.4.2                       |
| F        | "For lifting tasks with a frequency less than .2 lifts per minute, set the frequency equal to .2 lifts/minute." The Table 5 footnote says: "For lifting less frequently than once per 5 minutes, set F=.2 lifts/minute." "Lifting above the maximum frequency results in a RWL of 0.0." | pp. 14-15, sections 1.3.5.3-1.3.5.4; Table 5 |

Negative values of H, V, D, A, F, and L, and V above the stated limits where the method has no rule, are rejected as invalid input with a message that states the allowed range.

### Frequency Multiplier

FM comes from Table 5, using F, the duration category, and V. Table 5's columns are V < 30 and V ≥ 30, and its footnote says "Values of V are in inches." Table 7 gives the metric equivalent of the 30-inch boundary as 75 cm.

- **Which V:** "The FM value depends upon the average number of lifts/min (F), the vertical location (V) of the hands at the origin, and the duration of continuous lifting" (p. 15). The glossary repeats "Vertical Location (V) at the origin" (p. 74). FM therefore uses V at the origin, also when the RWL is evaluated at the destination.
- **Interpolation:** "in some cases it will be necessary to use linear interpolation to determine the value of a multiplier, especially when the value of a variable is not directly available from a table. For example, when the measured frequency is not a whole number, the appropriate multiplier must be interpolated between the frequency values in the table for the two values that are closest to the actual frequency" (p. 7). Example 7 interpolates "between the FM values for 2 and 3 lifts/minute" for F = 2.4 (pp. 56-57). FM is linear in F between the two nearest rows of the column.
- **Open points:** Interpolation between a nonzero row and a row of .00 (for example, F = 12.5 in the ≤ 1 hour, V < 30 column), and the meaning of "maximum frequency," are open (OQ-113).

The reconciled Table 5 is `methods/rnle/transcription/table-5-frequency-multiplier.reconciled.csv` (p. 15).

### Special frequency adjustment procedure

For repetitive lifting in which the worker doesn't lift continuously during the 15-minute sample, "As long as the actual lifting frequency does not exceed 15 lifts per minute" (p. 16):

1. Compute the total number of lifts performed for the 15-minute period (lift rate times work time).
2. Divide the total number of lifts by 15.
3. Use the result as F to determine FM from Table 5.

The worked illustration gives (10 × 8)/15 = 5.33 lifts/minute (p. 16). If the worker lifts continuously for more than 15 minutes, the actual lifting frequency is used. When the procedure applies, the duration category is based on recovery periods between work sessions, not within them (p. 16). A second illustration on p. 16 states "F = (10 lifts/minute × 5 minutes/15 minutes = 50/15 = 3.4 lifts/minute." Exact division gives 3.33…, so the printed 3.4 is either a rounding or an arithmetic error (OQ-114).

### Coupling Multiplier

CM comes from Table 7, using the coupling classification and V. Table 7's columns are V < 30 inches (75 cm) and V ≥ 30 inches (75 cm). The reconciled tables are `table-6-coupling-classification.reconciled.csv` and `table-7-coupling-multiplier.reconciled.csv` (pp. 17-18).

- **Which V:** The source says CM is "Based on the coupling classification and vertical location of the lift" (p. 17) and doesn't name origin or destination. In the Example 4 worksheet (Figure 14, p. 46), CM is .95 at the origin (V = 22 in, fair) and 1.0 at the destination (V = 59 in, fair), so CM uses V at the point being evaluated. This reading comes from a worked example, not from a stated rule (OQ-115).
- **Notes to Table 6** (p. 17), transcribed here as text:
  1. "An optimal handle design has .75 – 1.5 inches (1.9 to 3.8 cm) diameter, ≥4.5 inches (11.5 cm) length, 2 inches (5 cm) clearance, cylindrical shape, and a smooth non-slip surface."
  2. "An optimal hand-hold cut-out has the following approximate characteristics: ≥ 1.5 inches (3.8 cm ) height, 4.5 inches (11.5 cm) length, semi-oval shape, ≥ 2 inches (5 cm) clearance, smooth non-slip surface, and ≥ 0.25 inches (0.60 cm) container thickness (e.g., double thickness cardboard)."
  3. "An optimal container design has ≤16 inches (40 cm) frontal length, ≤12 inches (30 cm) height and a smooth, non-slip surface."
  4. "A worker should be capable of clamping the fingers at nearly 90° under the container, such as required when lifting a cardboard box from the floor."
  5. "A container is considered less than optimal if it has a frontal length >16 inches (40 cm), height >12 inches (30 cm), rough or slippery surfaces, sharp edges, asymmetric center of mass, unstable contents, or requires the use of gloves. A loose object is considered bulky if the load cannot easily be balanced between the hand-grasps."
  6. "A worker should be able to comfortably wrap the hand around the object without causing excessive wrist deviations or awkward postures, and the grip should not require excessive force."
- **Decision tree:** The "Decision Tree for Coupling Quality" (p. 18) is a figure. Read from the page image, it gives these paths:

  | Object       | First branch          | Second branch       | Third branch                  | Classification |
  | ------------ | --------------------- | ------------------- | ----------------------------- | -------------- |
  | Container    | Optimal container     | Optimal handles     | —                             | Good           |
  | Container    | Optimal container     | Not optimal handles | Fingers flexed 90 degrees     | Fair           |
  | Container    | Optimal container     | Not optimal handles | Fingers not flexed 90 degrees | Poor           |
  | Container    | Not optimal container | —                   | —                             | Poor           |
  | Loose object | Bulky object          | —                   | —                             | Poor           |
  | Loose object | Not bulky object      | Optimal grip        | —                             | Good           |
  | Loose object | Not bulky object      | Not optimal grip    | Fingers flexed 90 degrees     | Fair           |
  | Loose object | Not bulky object      | Not optimal grip    | Fingers not flexed 90 degrees | Poor           |

  The tree has no text-layer structure, so it got one visual reading only. It must get a second, independent reading before approval (OQ-104). The source says the tree "may be helpful," so Table 6 and its notes govern.

### Significant control at the destination

When significant control is required at the destination, "the RWL is calculated at both the origin and the destination of the lift and the lower of the two values is used to assess the overall lift" (p. 21). "Therefore, the lower of the RWL values at the origin or destination should be used to compute the Lifting Index for the task" (p. 26). Otherwise the RWL is computed at the origin only (p. 26).

### Single-task procedure

1. Compute the RWL at the origin, and at the destination when significant control is required (p. 26, section 2.3).
2. LI = L / RWL, using the lower RWL (p. 26).

The source doesn't say whether L is the average or the maximum weight for a single-task LI. The worksheets record both "L (avg.)" and "L (max.)" (Figure 3, p. 24; Figure 14, p. 46). See OQ-116.

### Multi-task procedure

A multi-task job is one "in which there are significant differences in task variables between tasks" (p. 21). The choice between the single-task and multi-task procedure is the analyst's, based on the three considerations on p. 23.

1. **FIRWL** for each task: the RWL with FM set to 1.0. If significant control is required at the destination, compute it at both the origin and the destination (p. 26, section 2.4.1).
2. **STRWL** for each task: FIRWL × FM, with FM from the task's own frequency (p. 27, section 2.4.2).
3. **FILI** for each task: maximum load weight ÷ FIRWL (p. 27, section 2.4.3; glossary p. 74).
4. **STLI** for each task: average load weight ÷ STRWL (p. 27, section 2.4.4; glossary p. 76).
5. **Renumber** the tasks "in order of decreasing physical stress, beginning with the task with the greatest STLI down to the task with the smallest STLI" (p. 27). "If more than one task has the same STLI value, assign the lower task number to the task with the highest frequency" (p. 57).
6. **CLI** for the job (p. 28):

   ```text
   CLI = STLI_1 + ΣΔLI
   ΣΔLI = FILI_2 × (1/FM_1,2 − 1/FM_1)
        + FILI_3 × (1/FM_1,2,3 − 1/FM_1,2)
        + FILI_4 × (1/FM_1,2,3,4 − 1/FM_1,2,3)
        + …
        + FILI_n × (1/FM_1,2,3,4,…,n − 1/FM_1,2,3,…,(n−1))
   ```

   "(1) the numbers in the subscripts refer to the new task numbers and (2) the FM values are determined from Table 5, based on the sum of the frequencies for the tasks listed in the subscripts" (p. 28). "Note that the FM values were based on the sum of the frequencies for the subscripts, the vertical height and the duration of the lifting" (p. 28).

Open points on the multi-task procedure:

- Which task's V selects the Table 5 column for FM₁,₂,… when the tasks differ in V (OQ-117).
- How ties are broken when tasks have the same STLI and the same frequency, and whether "same STLI value" means equal at full precision or after rounding to one decimal (OQ-118).
- How significant control interacts with FILI and STLI when a task's FIRWL is computed at both ends. The source says to compute both but doesn't say which value feeds FILI and STLI. By analogy with p. 26 the lower one would be used, but the source doesn't state it (OQ-119).

## Lookup tables

Every table was transcribed twice and reconciled (decision D-105). The files are in [`methods/rnle/transcription/`](../../methods/rnle/transcription/manifest.json).

| Table                                              | Locator                 | Reconciled file                                                                                          | Differences between the passes                                                             |
| -------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Load constant and multiplier formulas              | p. 7, under section 1.3 | `table-0-multiplier-formulas.reconciled.csv`                                                             | 4, all the subtraction sign (U+2212 MINUS SIGN in the text layer; pass B typed an en dash) |
| Equations for estimating H                         | p. 8, section 1.3.1.1   | `table-h-estimation.reconciled.csv`                                                                      | None                                                                                       |
| Table 1: Horizontal Multiplier                     | pp. 8-9                 | `table-1-horizontal-multiplier-us.reconciled.csv`, `table-1-horizontal-multiplier-metric.reconciled.csv` | None                                                                                       |
| Table 2: Vertical Multiplier                       | p. 10                   | `table-2-vertical-multiplier-us.reconciled.csv`, `table-2-vertical-multiplier-metric.reconciled.csv`     | None                                                                                       |
| Table 3: Distance Multiplier                       | p. 11                   | `table-3-distance-multiplier-us.reconciled.csv`, `table-3-distance-multiplier-metric.reconciled.csv`     | None                                                                                       |
| Table 4: Asymmetric Multiplier                     | p. 13                   | `table-4-asymmetric-multiplier.reconciled.csv`                                                           | None                                                                                       |
| Table 5: Frequency Multiplier Table (FM)           | p. 15                   | `table-5-frequency-multiplier.reconciled.csv`                                                            | 2, both headings where pass B left out a footnote marker                                   |
| Table 6: Hand-to-Container Coupling Classification | p. 17                   | `table-6-coupling-classification.reconciled.csv`                                                         | None                                                                                       |
| Table 7: Coupling Multiplier                       | p. 18                   | `table-7-coupling-multiplier.reconciled.csv`                                                             | None                                                                                       |

**Chapter 3 reprints.** Chapter 3 reprints Tables 1 to 5 and 7 "to provide a useful reference" (pp. 30-32). The chapter 1 tables govern. The build compared the text layer of every reprinted data row with the reconciled chapter 1 tables. Every numeric multiplier agrees. The reprints differ only in labels and number formatting:

- Table 5 reprint, first row: "≤2" where chapter 1 has "≤0.2" (p. 31). The reprint also has a separate row for 2, so "≤2" is a typographical error in the reprint.
- Table 5 reprint, second row: ".5" where chapter 1 has "0.5."
- Table 5 reprint headings: "<1 hour," "1-2 hours," and "2-8 hours," where chapter 1 has "≤1 Hour," ">1 but ≤2 Hours," and ">2 but ≤8 Hours."
- Table 7 reprint: ".95" and ".90" where chapter 1 has "0.95" and "0.90."
- Table 1 reprint: "≤10" and "≤25" without the space that chapter 1 has.

## Outputs

| Output                              | Symbol                 | Unit             | Locator   |
| ----------------------------------- | ---------------------- | ---------------- | --------- |
| Each multiplier                     | HM, VM, DM, AM, FM, CM | dimensionless    | pp. 7-18  |
| Recommended Weight Limit            | RWL                    | lb or kg (as LC) | pp. 1, 7  |
| Lifting Index                       | LI                     | dimensionless    | pp. 1, 19 |
| Frequency-Independent RWL           | FIRWL                  | lb or kg         | p. 26     |
| Single-Task RWL                     | STRWL                  | lb or kg         | p. 27     |
| Frequency-Independent Lifting Index | FILI                   | dimensionless    | p. 27     |
| Single-Task Lifting Index           | STLI                   | dimensionless    | p. 27     |
| Composite Lifting Index             | CLI                    | dimensionless    | pp. 27-28 |

When the RWL is zero (for example, A > 135° or H > 25 in), LI = L/0 is undefined. The source says the RWL is "zero, or no load" (p. 12) and doesn't say how to report the LI (OQ-120).

The glossary gives the load weight unit as "pounds or Newtons" (p. 75), while the terminology list says "pounds or kilograms" (p. 2). This specification uses pounds or kilograms, consistent with the load constant (OQ-121).

## Units

The source gives two parallel sets of constants, and they aren't exact conversions of each other. For example, LC is 51 lb or 23 kg (51 lb is about 23.13 kg), the H limit is 10 in or 25 cm (10 in is 25.4 cm), and the VM optimum is 30 in or 75 cm (30 in is 76.2 cm). The same physical task can therefore give a slightly different RWL in each unit system.

Part 2 of the build prompt requires that "Equivalent metric and English inputs produce the same stored result." That is only possible if the engine computes in one designated unit system and converts inputs to it. The reviewer chooses the computation system (OQ-122). The canonical stored units are SI, as part 2 requires.

## Rounding

The source states a rounding rule for its worked examples only: "for these examples, multipliers are rounded to two places to the right of the decimal and weight limit (RWL, FIRWL, and STRWL) and lifting index values (LI, FILI, STLI, and CLI) are rounded to one place to the right of the decimal" (p. 29). It also warns that "you might obtain slightly different values from those displayed in the worksheet examples due to differences in rounding, especially when these values are compared to those determined from computerized versions of the equation. These differences should not be significant" (p. 29).

- **Calculation:** Full precision, as part 2 of the build prompt requires. No intermediate rounding.
- **Proposed display rule:** Multipliers to two decimal places, RWL, FIRWL, and STRWL to one decimal place, and LI, FILI, STLI, and CLI to one decimal place, matching p. 29. The source states no rule for rounding a value that ends exactly in 5, so the rounding mode is open (OQ-123).
- **Consequence for worked examples:** The worksheets multiply rounded multipliers. In Example 4 (Figure 14, p. 46), the origin RWL is 51 × 1.0 × .94 × .87 × 1.0 × .88 × .95 = 34.9 lb. At full precision, DM = .82 + 1.8/37 = 0.8686…, and the RWL is 34.8 lb. The destination RWL is 15.2 lb in the worksheet and 15.3 lb at full precision. A full-precision engine therefore doesn't reproduce every printed worked-example value to the last digit. OQ-124 proposes how the worked-example tests handle this.

## Interpretation thresholds published by the source

| Statement                                                                                                                                                                                                                                                                                                                                                       | Locator                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| "From the NIOSH perspective it is likely that lifting tasks with an LI >1.0 pose an Increased risk for lifting-related low back pain for some fraction of the workforce (Waters et al. 1993). Hence the goals should be to design all lifting jobs to achieve an LI of 1.0 or less."                                                                            | p. 20, section 1.4.3         |
| "Nonetheless, these experts agree that nearly all workers will be at an increased risk of a work-related injury when performing highly stressful lifting tasks (i.e., lifting tasks that would exceed a LI of 3.0)." The "experts" are those who believe worker selection criteria may be used, citing Chaffin and Andersson (1984) and Ayoub and Mital (1989). | p. 20, section 1.4.3         |
| Glossary: "A value of 1.0 or more denotes that the task is hazardous for some fraction of the population."                                                                                                                                                                                                                                                      | p. 74                        |
| "jobs with lifting indices above 1.0 or higher would benefit the most from redesign"                                                                                                                                                                                                                                                                            | p. 19, section 1.4.1, item 4 |
| FILI: "If any of the FILI values exceed a value of 1.0, then ergonomic changes may be needed to decrease the strength demands."                                                                                                                                                                                                                                 | p. 27                        |
| STLI: "if any of the STLI values exceed a value of 1.0, then ergonomic changes may be needed to decrease the overall physical demands of the task."                                                                                                                                                                                                             | p. 27                        |
| "In cases where the FILI exceeds the STLI for any task the maximum weights may represent a significant problem and careful evaluation is necessary."                                                                                                                                                                                                            | p. 27                        |
| "The shape of the risk function, however, is not known. Without additional data showing the relationship between low back pain and the LI, it is impossible to predict the magnitude of the risk for a given individual or the exact percent of the work population who would be at an elevated risk for low back pain."                                        | p. 19, section 1.4.2         |

The source is inconsistent at LI = 1.0: section 1.4.3 treats "1.0 or less" as the design goal, and the glossary treats "1.0 or more" as hazardous (OQ-125).

## Proposed band map

This proposal needs the reviewer's approval (OQ-010) before any ranking uses it. It maps published thresholds only, in the source's own words, to the three priority levels in part 5 of the build prompt. The same map applies to LI, STLI (for a single task), and CLI (for a job).

| Band | Condition      | Source wording for the band                                                                                                                                                           | Proposed priority level |
| ---- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1    | LI ≤ 1.0       | Design goal: "design all lifting jobs to achieve an LI of 1.0 or less" (p. 20)                                                                                                        | Low                     |
| 2    | 1.0 < LI ≤ 3.0 | "lifting tasks with an LI >1.0 pose an Increased risk for lifting-related low back pain for some fraction of the workforce" (p. 20)                                                   | Medium                  |
| 3    | LI > 3.0       | "nearly all workers will be at an increased risk of a work-related injury when performing highly stressful lifting tasks (i.e., lifting tasks that would exceed a LI of 3.0)" (p. 20) | High                    |

Points for the reviewer:

- The boundary at exactly 1.0 follows section 1.4.3 (> 1.0), not the glossary (≥ 1.0). See OQ-125.
- The source attributes the 3.0 threshold to "some experts" in a paragraph about worker selection, not to NIOSH. The reviewer decides whether it's a published threshold under rule 2 of the ranking rule. If not, the map has two bands: LI ≤ 1.0 and LI > 1.0.
- FILI > 1.0 is a separate published flag for strength demands (p. 27). The proposal shows it as supporting information, not as a band.
- Result text uses the source's wording. It never adds "safe" or "unsafe."

## Limitations to show on every result

These statements come from the source and appear with every RNLE result:

1. "the NIOSH lifting equation is only one tool in a comprehensive effort to prevent work-related low back pain and disability" (p. xiv).
2. "Although the revised lifting equation has not been fully validated, the recommended weight limits derived from the revised equation are consistent with, or lower than, those generally reported in the literature" (p. xiv).
3. "The shape of the risk function, however, is not known. Without additional data showing the relationship between low back pain and the LI, it is impossible to predict the magnitude of the risk for a given individual or the exact percent of the work population who would be at an elevated risk for low back pain" (p. 19).
4. For multi-task results: "While the new method has not been validated at the workplace, this multi-task version will minimize errors due to averaging" (p. 23).
5. The conditions in which the equation doesn't apply (p. 6), as listed under "Applicability and scope checks."
6. "lifting is only one of the causes of work-related low back pain and disability" (p. xiv).

## Worked examples for the published-example tests

Milestone 2 reproduces every worked example below. Each example's worksheet values are transcribed twice before they become test fixtures, under the same procedure as the method tables.

| Example                                       | Type                               | Pages     | Worksheet                      |
| --------------------------------------------- | ---------------------------------- | --------- | ------------------------------ |
| Three-task CLI example, section 2.4.5         | Multi-task                         | p. 28     | Table on p. 28                 |
| Special frequency adjustment, section 1.3.5.5 | Frequency                          | p. 16     | Text                           |
| Duration classification, section 1.3.5.2      | Duration                           | p. 14     | Text                           |
| Example 1: Loading Punch Press Stock          | Single task, a few times per shift | pp. 33-37 | Figures 6 and 7 (pp. 35-36)    |
| Example 2: Loading Supply Rolls               | Single task, a few times per shift | pp. 37-41 | Figures 9 and 10 (pp. 39-40)   |
| Example 3: Loading Bags into a Hopper         | Single task, a few times per shift | pp. 41-43 | Figure 12 (p. 43)              |
| Example 4: Package Inspection                 | Single task, repetitive            | pp. 44-46 | Figure 14 (p. 46)              |
| Example 5: Dish-Washing Machine Unloading     | Single task, repetitive            | pp. 47-50 | Figures 16 and 17 (pp. 49-50)  |
| Example 6: Product Packaging I                | Single task, repetitive            | pp. 51-54 | Figures 19 and 20 (pp. 52, 54) |
| Example 7: Depalletizing Operation            | Multi-task, short duration         | pp. 55-59 | Figure 22 (p. 58)              |
| Example 8: Handling Cans of Liquid            | Multi-task, short duration         | pp. 59-64 | Figure 24 (p. 63)              |
| Example 9: Product Packaging II               | Multi-task, long duration          | pp. 64-68 | Figure 26 (p. 67)              |
| Example 10: Warehouse Order Filling           | Multi-task, long duration          | pp. 68-72 | Figure 28 (p. 70)              |

No public RNLE calculator is named in the build prompt, so no reference-tool parity test is planned. NIOSH describes a mobile app on the landing page. The build didn't evaluate it.

## Open questions for this method

OQ-110 to OQ-125 in the [open-question log](../open-questions.md) record every point where this source is silent, ambiguous, or inconsistent. None of them is resolved by assumption in this specification.
