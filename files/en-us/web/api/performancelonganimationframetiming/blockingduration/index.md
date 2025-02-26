---
title: "PerformanceLongAnimationFrameTiming: blockingDuration property"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming.blockingDuration
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`blockingDuration`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time in milliseconds for which the main thread was blocked from responding to high priority tasks, such as user input.

## Description

`blockingDuration` is calculated by taking all the [long tasks](/en-US/docs/Web/API/PerformanceLongTaskTiming#description) within the LoAF that have a `duration` of more than `50ms`, subtracting `50ms` from each, adding the rendering time to the longest task time, and summing the results. Let's look at an example to clarify what this means.

Consider a JavaScript file that takes a total of 145ms to process. After the first major chunk of the script is processed in 65ms, we could consider breaking the execution of the remaining script into a second task, with this second one taking 80ms to execute. Splitting the processing in this way is preferable to the complete script execution as one task because it gives the browser a chance to handle user interactions between tasks. This approach is known as **yielding**. As an example, you can yield by inserting a {{domxref("Window.setTimeout", "setTimeout()")}} after the first major chunk of the script is executed.

There are three options to consider here in how the script might end up being processed:

1. If we yield after the first 65ms, the browser can decide to render a frame before running the rest of the script.
2. Alternatively, the browser could run the rest of the script first, and then render the frame.
3. We could also decide **not** to yield and let the browser process the entire script as a single task.

> [!NOTE]
> The browser generally tries to prioritize important tasks, such as user interactions and rendering new frames, over less important tasks it might have queued. The browser _tries_ to render a new frame every 16ms.

We mentioned earlier that the total processing time for the script is 145ms. Assuming the time for rendering the UI update is 10ms, the timings for the LoAFs in each of the three options are as follows:

| Option | `duration` (LoAF 1) | `blockingDuration` (LoAF1)        | `duration` (LoAF2) | `blockingDuration` (LoAF2) |
| ------ | ------------------- | --------------------------------- | ------------------ | -------------------------- |
| 1      | 65ms                | 15ms (65 - 50)                    | 80ms               | 40ms (80 + 10 - 50)        |
| 2      | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*              | n/a\*                      |
| 3      | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*              | n/a\*                      |

`*` In options 2 and 3, there is only a single LoAF.

Note that the total `blockingDuration` in the first two options is the same (55ms) — in each case the browser has decided to split the work in different ways.

Option 3, however, has a much longer `blockingDuration` because the browser is completely blocked and unable to interrupt the long task at all. This highlights the importance of optimizing long tasks by yielding — regardless of how the browser decides to handle the tasks, the blocking duration will still be less than if you don't yield at all.

The difference between `duration` and `blockingDuration` of LoAFs can be summarized as follows:

- `duration` is a measure of the LoAF's total response time, which is useful for understanding whether the frame's layout, painting, etc. took a long time.
- `blockingDuration` is a measure of the total time the LoAF blocked the main thread from responding to high priority tasks, such as user interactions, which can cause the UI to feel [janky](/en-US/docs/Glossary/Jank). To put it another way, it is a measure of the effect the LoAF will have on responsiveness.

The reason why the `blockingDuration` of each task is calculated as `duration - 50ms` is that response delays of above 50ms start to be perceptible by users. This threshold is when users start noticing sluggishness; therefore, the time above the 50ms mark is important to measure for determining the severity of jank. See [Total Blocking Time (TBT)](https://web.dev/articles/tbt) for more details.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) on web.dev (2024)
