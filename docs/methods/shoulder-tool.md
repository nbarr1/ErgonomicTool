# The Shoulder Tool (`shoulder-tool`): specification status

- **Status:** **Blocked.** The primary source hasn't been retrieved, so no specification exists. Operating rule 2 of the build prompt stops work on this method until it is.
- **Primary source:** Bani Hani D, Huangfu R, Sesek R, Schall MC, Davis GA, Gallagher S. Development and validation of a cumulative exposure shoulder risk assessment tool based on fatigue failure theory. Ergonomics. 2021;64(1):39-54. Published online August 19, 2020. [https://doi.org/10.1080/00140139.2020.1811399](https://doi.org/10.1080/00140139.2020.1811399)
- **Why it's blocked:** The article is subscription-only. OpenAlex, Semantic Scholar, and Europe PMC record no open copy (see the [source log](../sources.md)). Open question OQ-102 asks the product owner for a copy.

## What this document contains

This document records what the public Shoulder Tool pages state. **Nothing here is a specification.** No equation, coefficient, threshold, or damage-risk relationship is recorded. Every statement below must be checked against the paper.

## What the public pages state

Sources: the Shoulder Tool calculator page (version 0.1.2) and its instructions page ("Version 0.1.2 - Last updated September 2, 2019"; the version history calls it a "beta version"), retrieved October 6, 2026. Checksums are in the source log.

- **Purpose:** "to determine the cumulative shoulder load experienced by a worker during a typical workday. The tool's cumulative shoulder damage measure provides an estimate of the probability that the worker would experience shoulder musculoskeletal symptoms."
- **Outcome:** "For the shoulder tool the outcome is defined as symptoms severe enough that the worker seeks medical attention."
- **Inputs for each task:** "1) the weight held, or force exerted by the hands; 2) the greatest horizontal distance from the acromion (the flat bone on the top of the shoulder) to the center of the hand or load during the task (using a measuring tape); and 3) the total number of repetitions of the task performed during the workday." The calculator also asks for the type of task: "Handling Loads," "Horizontal Push or Pull," or "Push or Pull Downward."
- **Lever arm direction:** "the measuring tape should be held horizontally for manual handling tasks (Figure 1), but vertically when assessing tasks involving forward pushes or backward pulls (Figure 3)." For an upward push, "The same lever arm would be used for a task involving a pulling down action in the same posture" (Figure 4).
- **Load sharing:** "The weight of the item should be divided between the hands. In many cases, the weight may be evenly divided, but there will also be cases where the analyst should divide the weight unevenly if one shoulder is bearing more of the weight of the object. This may have to be estimated by the analyst."
- **Each shoulder:** "it is important to measure the maximum lever arm for each shoulder during the task. The maximum lever arm for the left shoulder may occur at a different time than the maximum lever arm for the right shoulder." The tool "does not differentiate 'handedness' dominant hand strength."
- **Push and pull forces:** "We recommend obtaining pushing/pulling forces using force gauges, using the peak force observed during the exertion, for example, the initial force required to get a cart moving."
- **Calculator columns:** Type of Task, Lever Arm (inch), Load (lb), Moment (ft.lb), Repetitions (per work day), Damage (cumulative), % Total (damage), with 10 task rows, Total Cumulative Damage, and Probability of Shoulder Outcome (%). Metric units are available.
- **Prioritization:** In the multi-task example, "task 2 was associated with the majority of the cumulative damage. Therefore, task 2 should be given priority for ergonomic intervention."
- **Binning:** Tasks are grouped into ranges of peak moment. The page notes that binning "might result in a somewhat inflated probability of shoulder outcomes" and recommends "the smallest bin size that can be reasonably used and completely cover the range of shoulder moments observed in the job."
- **Limitations:** "One example is the case where an arm is simply held directly above the shoulder. Such a posture will create a low moment, but requires substantial muscle contraction, will be physiologically fatiguing, and will undoubtedly incur some injury risk. Similarly, there may be tasks where the applied forces go directly through the shoulder joint, such as pushing forward at shoulder height with the arms straight in front of (and in line with) the shoulder. Such an activity creates no moment, but will create stress in the shoulder. These situations are not currently addressed in the tool."

## Worked examples on the instructions page

| Example                   | Inputs stated in the text                                                                              | Result stated in the text                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| Mono-task, one shoulder   | 2 lb load, right shoulder, 16-inch lever arm, 2,880 repetitions per workday                            | "this job's probability for a right shoulder outcome is 20.8%"        |
| Mono-task, both shoulders | 24 lb panel, both hands, even weight distribution, 480 repetitions per shift, peak lever arm 18 inches | Shown only in a screenshot. "the risk to each shoulder is identical." |
| Multi-task                | Shown only in a screenshot                                                                             | Task 2 has the majority of the damage                                 |
| Binning                   | Nine tasks in the page's Table 1, grouped into three bins                                              | Shown only in a screenshot                                            |

## Findings for the reviewer

- **The binning example has a gap between bins.** The page defines bins of "0-10 ft. lbs.," "11-20 ft.lbs.," and "21-30 ft.lbs.," and puts task 6 (moment 10.7 ft.lb) in the second bin. A moment of 10.7 is in neither range as written. The tool would need a rule for values between bins if binning becomes a feature (OQ-141).
- **The tool is labeled a beta version** in its version history. The reviewer decides whether parity tests against it are meaningful (OQ-140).
- **Ten task rows:** As for LiFFT, whether the limit is part of the method can only be answered from the paper.
