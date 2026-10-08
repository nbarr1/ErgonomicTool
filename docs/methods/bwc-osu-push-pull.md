# BWC/OSU push/pull guidelines (`bwc-osu-push-pull`): method specification

- **Status:** Draft. Not approved. Results computed under this specification must be labeled as draft and excluded from rankings.
- **Specification revision:** Draft 1, October 6, 2026. A method version number is assigned when the reviewer approves the specification.
- **Reviewer:** Not named (OQ-008).

## Source

- **Citation:** Weston EB, Aurand A, Dufour JS, Knapik GG, Allread WG, Marras WS. An objective set of guidelines for pushing and pulling. Spine Research Institute, The Ohio State University, Columbus, OH. Hosted by the Ohio Bureau of Workers' Compensation (BWC).
- **File:** `https://dam.assets.ohio.gov/image/upload/info.bwc.ohio.gov/forms/PushPullGuidelines.pdf`, SHA-256 `4b113c40e672d7b5d025251f8e04860445f6444516a8f53d4ace67eb13981a93`. See the [source log](../sources.md).
- **Locators:** The PDF has five pages and no printed page numbers. "p. N" is the PDF page. Page 1 holds the summary, background, recommendations, and the start of the guidelines. Page 2 is "Using the Guidelines." Pages 3 and 4 hold the three tables. Page 5 holds the acknowledgements and references.
- **Companion web page:** The [BWC/OSU push/pull guidelines page](https://www.bwc.ohio.gov/employer/programs/safety/PushPullGuide/PushPullGuide.aspx) links the PDF and runs an online calculator. The build prompt names the PDF as the primary source, so the PDF governs. The web page is cited only where it adds a measurement instruction or where it disagrees with the PDF.
- **Terms of use:** The PDF states no copyright notice or terms of use. **Licensing flag:** Permission to reuse the tables is unconfirmed (OQ-009).
- **Funding statement:** "This study was funded through a grant from the Ohio Bureau of Workers' Compensation within the Ohio Occupational Safety and Health Research Program" (p. 5).

## What the method assesses

The guidelines assess pushing and pulling exertions against limits derived from biomechanical loads on the low back and shoulders. "These limits and are expected to be protective of both the low back and shoulders" (p. 1; the duplicated "and" is in the source). The result is one of three population bands.

- **Body regions:** Back (low back) and upper limb (shoulder). The source's wording is "lower back and shoulders" (p. 1).
- **Body side:** Not stated by the source.
- **Sex:** "Note that the pushing and pulling guidelines proposed within this investigation did not differ based on gender" (p. 1).
- **Development basis:** Biomechanical information "from 62 human subjects in a laboratory." Subjects "performed exertions at three different handle heights (32 in, 40 in, 48 in) and performed both straight and turning push/pull exertions" (p. 1). The tables give limits for every whole inch from 32 to 48 inches. The PDF doesn't say how the limits between the three tested heights were derived.

## Applicability and scope checks

The engine calculates only for the combinations that a table covers. It refuses to calculate, and says why, for anything else.

| Action                      | Exertion type | Covered | Table                                                                                                        | Locator           |
| --------------------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------------ | ----------------- |
| Pull with two hands         | Straight      | Yes     | Straight Pushing and Pulling With Two Hands (lbs.)                                                           | p. 3              |
| Push with two hands         | Straight      | Yes     | Straight Pushing and Pulling With Two Hands (lbs.)                                                           | p. 3              |
| Push or pull with two hands | Turning       | Yes     | Turning Pushing and Pulling With Two Hands (ft-lbs.)                                                         | p. 4, upper table |
| Pull with one hand          | Straight      | Yes     | Straight and Turning Pulling With 1 Hand (lbs.)                                                              | p. 4, lower table |
| Pull with one hand          | Turning       | Yes     | Same table: "The same limits can be applied for both straight 1 Handed Pulling and turning 1 Handed Pulling" | p. 2; p. 4        |
| Push with one hand          | Either        | **No**  | No table                                                                                                     | —                 |

Range limits stated by the source:

- **Hand height:** "The guidelines accommodate hand heights of 32" to 48."" (p. 2). The tables have rows for each whole inch from 32 to 48.
- **Hand distance, two-handed turning only:** "The guidelines accommodate hand distances of 12" to 36" and are not applicable for significantly wider or narrower hand distances" (p. 2). The guidelines "assumes that the hands are centered on the object being turned" and "were also developed assuming the hands are placed approximately shoulder width apart when turning" (p. 2).

## Inputs

| Input                   | Definition and measurement instruction (source)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Unit     | Locator                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------ |
| Action performed        | "1 Handed Pull, 2 Handed Pull, 2 Handed Push." The web page adds: "1 hand = Person uses only 1 hand when pulling. 2 hands = Person uses 2 hands when pushing/pulling."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | category | p. 2; web page                             |
| Exertion type           | "a straight push or pull or a turn." The web page adds: "Straight = Push or pull along a straight path. Turning = Push or pull along a curved path (Example: going around a corner). If path has both straight and curved sections, select Turning for the type of exertion."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | category | p. 2; web page                             |
| Maximum push/pull force | Measured with a dynamometer (force gauge). "For pushing, the practitioner should be able to push directly on the handle(s) of the object being pushed. For pulling, the practitioner may choose to attach a rope to the handles and use the dynamometer's 'hook' attachment." "The practitioner should place the hand dynamometer (or rope) where a workers' hand would usually make contact with the object that is to be moved." Record "the _maximum_ forces required to move (push, pull, turn) an object (in pounds)." "Most of the time, this will be the hand force or turning torque required to initiate movement of the object from a standstill. However, it is important to note that some occupational exposures such as pushing or pulling a cart up a ramp might require higher pushing and pulling forces than initiating motion." "practitioners should record forces applied _horizontally relative to the ground_." | lb       | p. 2, "Measuring Maximum Push/Pull Forces" |
| Hand height             | "Practitioners should measure the _vertical_ height of the hands from the floor. The measure should be taken where the worker's hands would normally be on the handle." The web page adds: "Measured from the floor to height of worker's hand (knuckles) on the handle."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | in       | p. 2, "Measuring Hand Height"; web page    |
| Hand distance           | Two-handed turning only. The distance between the hands, shown in Figure 2 ("Calculation hand distance in two-handed push/pull turns, such as with a four-wheeled cart"). "In one handed turning exertions, measurement of hand distance (or an equivalent moment arm) is not necessary."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | in       | p. 2, "Measuring Hand Distance"; Figure 2  |

The instrument for the force measurement (a dynamometer or force gauge) is recorded with the measured value, as part 2 of the build prompt requires.

## Calculation

### Straight exertions and one-handed pulling

The quantity compared with the table is the measured maximum force in pounds (pp. 2-4).

### Two-handed turning

The turning table's limits are torques in foot-pounds. The footnote to that table says: "If using the online web interface, this torque calculation is performed for the user. However, to calculate turning torque, multiply **maximum hand force (in lbs.)** by respective **moment arm (in feet)**. The moment arm will be the distance between the center of the object being turned and the hand dynamometer that is exerting the torque" (p. 4).

```text
turning torque (ft-lbs.) = maximum hand force (lbs.) × moment arm (ft)        (p. 4, footnote *)
```

The moment arm is open (OQ-130). The PDF defines it as the distance from the center of the object to the hand dynamometer, and it says the hands are assumed to be centered on the object (p. 2). That reading gives a moment arm of half the hand distance. The online calculator on the web page, read on October 6, 2026, divides the full handle distance by 12 and multiplies by the measured force, which uses the whole hand distance as the moment arm. The two readings differ by a factor of two.

### Band assignment

Each table row, selected by action and hand height, gives three bands:

| Band column in the source | Band label in the source      | Source description of the band (Figure 3, p. 2)                                                                                                                     |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Protective (Green)   | "80+% population protected"   | "The exertion is safe for at least 80% of the working population. This exertion may be viewed as acceptable."                                                       |
| Moderate (Yellow)         | "50-80% population protected" | "The exertion is safe for 50-80% of the working population. It is _recommended_ that changes to the task be made to make it safer for more people."                 |
| Least Protective (Red)    | "<50% population protected"   | "The exertion is safe for less than 50% of the working population. It is _strongly recommended_ that changes to the task be made to make it safer for more people." |

The source uses the word "safe" in its own band descriptions. The application shows those descriptions as quotations attributed to the source, as the "Source wording for results" rule in part 6 of the build prompt allows, and adds no wording of its own.

Every limit in the tables is a whole number: "N lbs. or less" for green, "A-B lbs." for yellow, and "M lbs. or more" for red. The source doesn't say how to classify a value between two whole numbers, such as 41.5 lb at a row whose green band is "41 lbs. or less" and whose yellow band is "42-57 lbs." (OQ-131). Measured forces and computed torques are often not whole numbers, and turning torques almost never are.

## Lookup tables

Every table was transcribed twice and reconciled (decision D-105). The files are in [`methods/bwc-osu-push-pull/transcription/`](../../methods/bwc-osu-push-pull/transcription/manifest.json). The passes agree on every cell of all three tables.

| Table                                                                         | Locator     | Reconciled file                    |
| ----------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| Guidelines for Straight Pushing and Pulling With Two Hands (Limits in lbs.)   | p. 3        | `two-hand-straight.reconciled.csv` |
| Guidelines for Turning Pushing and Pulling With Two Hands (Limits in ft-lbs.) | p. 4, upper | `two-hand-turning.reconciled.csv`  |
| Guidelines for Straight and Turning Pulling With 1 Hand (Limits in lbs.)      | p. 4, lower | `one-hand-pull.reconciled.csv`     |

### Findings in the tables

The build checked every row for gaps and overlaps between bands, and compared every row with the online calculator's thresholds, read from the web page's script on October 6, 2026 (HTML SHA-256 `d1650e39e1d44d79e3a0acd6b914b85e4fe4ce957228729715590b144d36628f`). The calculator's thresholds are a cross-check only. They aren't a source for the method.

| Finding                                  | Detail                                                                                                                                                                                                                                                                                                                                                                                                                                       | Open question |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Overlapping bands in the PDF             | 2 Hand Pull at 33 inches: green is "44 lbs. or less" and yellow is "43-60 lbs." Forces of 43 and 44 lb fall in both bands. Every other row's yellow band starts one pound above its green band and ends one pound below its red band. The neighboring rows (green 41 at 32 inches, 47 at 34 inches) don't show which value is the typographical error. The online calculator classifies 43 and 44 lb as green, because it tests green first. | OQ-132        |
| PDF and online calculator disagree       | 2 Hand Push at 38 inches: the PDF gives yellow "54-64 lbs." and red "65 lbs. or more." The calculator treats 64 lb or more as red. The other 84 rows agree.                                                                                                                                                                                                                                                                                  | OQ-133        |
| Red threshold falls as hand height rises | 2 Hand Push: red starts at 65 lb at 38 inches and at 64 lb at 39 inches. 2 Hand Pull at 47 and 48 inches both have red at 84 lb, and 1 Hand Pull has several such plateaus and decreases. These patterns may be correct. They're recorded so that the reviewer can confirm them.                                                                                                                                                             | OQ-133        |

## Outputs

| Output                  | Type                                                           | Locator                 |
| ----------------------- | -------------------------------------------------------------- | ----------------------- |
| Band                    | Green, yellow, or red, with the source's label and description | p. 2, Figure 3; pp. 3-4 |
| Compared quantity       | Measured force (lb) or computed turning torque (ft-lb)         | pp. 2, 4                |
| Band limits for the row | The row's green, yellow, and red limits, as printed            | pp. 3-4                 |

The application never shows a band by color alone. Each band appears with its source label ("80+% population protected"), the source description, and an icon, as part 5 of the build prompt requires.

## Units

The source works in pounds of force, inches, feet, and foot-pounds of torque. The engine computes in those units and converts from the canonical SI units (newtons, meters, and newton-meters) with the shared conversion factors. A hand height entered in centimeters is converted to inches before the row is selected. The source has rows for whole inches only, and it doesn't say how a value between two rows selects a row (OQ-134).

## Rounding

The source states no rounding rule. The online calculator reads whole numbers only: it converts the force and the handle distance with `parseInt` and offers hand heights as a list of whole inches. Whether the application should round, truncate, or reject non-integer inputs is open (OQ-131, OQ-134). Until it's answered, the specification adds no rounding rule.

## Proposed band map

This proposal needs the reviewer's approval (OQ-010) before any ranking uses it.

| Source band             | Source label                  | Proposed priority level |
| ----------------------- | ----------------------------- | ----------------------- |
| Most Protective (Green) | "80+% population protected"   | Low                     |
| Moderate (Yellow)       | "50-80% population protected" | Medium                  |
| Least Protective (Red)  | "<50% population protected"   | High                    |

## Limitations to show on every result

1. "These limits and are expected to be protective of both the low back and shoulders" (p. 1). The application quotes this statement as the source's expectation. It isn't a guarantee.
2. The guidelines accommodate hand heights from 32 to 48 inches and, for two-handed turning, hand distances from 12 to 36 inches, and "are not applicable for significantly wider or narrower hand distances" (p. 2).
3. The guidelines were developed from laboratory exertions by 62 subjects at handle heights of 32, 40, and 48 inches (p. 1).
4. The measured force must be the maximum force, applied horizontally relative to the ground. It is usually, but not always, the force to start movement (p. 2).
5. One-handed pushing isn't covered.

## Recommendations the source makes

The source lists these design recommendations (p. 1). The application can show them as supporting information. They don't change the band.

- "Higher handle heights (up to 48 in.) are generally preferable for all pushing and pulling exertions."
- "Turning push/pull exertions should be avoided where possible because these exertions generally subjected participants to higher biomechanical loads than straight exertions."
- "Two handed turning exertions (such as moving a cart) are recommended over one handed turning exertions (such as moving a pallet jack)."

## Verification plan for milestone 2

The PDF has no worked examples. Verification therefore uses these tests:

- **Row coverage:** For every row of every table, a force at the green limit, at each end of the yellow band, and at the red limit returns the printed band. The overlapping row (OQ-132) and the disputed row (OQ-133) wait for the reviewer's decision.
- **Boundaries:** Hand height 32 and 48 inches are accepted, and 31 and 49 inches are rejected. For two-handed turning, hand distance 12 and 36 inches are accepted, and 11 and 37 inches are rejected, unless OQ-135 decides otherwise.
- **Reference-tool parity:** A person records input and output pairs from the online calculator by hand, with the date. The build doesn't send automated requests to the calculator.
- **Unit round trips:** Forces entered in newtons and pounds, and heights entered in centimeters and inches, produce the same stored band.

## Open questions for this method

OQ-130 to OQ-135 in the [open-question log](../open-questions.md) record every point where this source is silent, ambiguous, or inconsistent. None of them is resolved by assumption in this specification.
