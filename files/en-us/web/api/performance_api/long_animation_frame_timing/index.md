---
title: Long animation frame timing
slug: Web/API/Performance_API/Long_animation_frame_timing
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

**Long animation frames** (LoAFs) can impact the user experience of a website. They can cause slow user interface (UI) updates, resulting in seemingly unresponsive controls and [janky](/en-US/docs/Glossary/Jank) (or non-smooth) animated effects and scrolling, leading to user frustration. The [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) allows developers to get information about the long animation frames and better understand their root causes. This article shows how to use the Long Animation Frames API.

## What is a long animation frame?

A long animation frame — or LoAF — is a rendering update that is delayed beyond 50ms.

Good responsiveness means that a page responds quickly to interactions. This involves painting any updates needed by the user in a timely manner and avoiding anything that could block these updates. Google's [Interaction to Next Paint (INP)](https://web.dev/articles/inp) metric, for example, recommends that a website should respond to page interactions (such as clicks or key presses) within 200ms.

For smooth animations, updates need to be fast — for an animation to run at a smooth 60 frames per second, each animation frame should render within around 16ms (1000/60).

## Observing long animation frames

To obtain information on LoAFs and pinpoint troublemakers, you can observe performance timeline entries with an {{domxref("PerformanceEntry.entryType", "entryType")}} of `"long-animation-frame"` using a standard {{domxref("PerformanceObserver")}}:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Previous long animation frames can also be queried, using a method such as {{domxref("Performance.getEntriesByType()")}}:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Be aware, however, that the maximum buffer size for `"long-animation-frame"` entry types is 200, after which new entries are dropped, so using the `PerformanceObserver` approach is recommended.

## Examining `"long-animation-frame"` entries

Performance timeline entries returned with a type of `"long-animation-frame"` are represented by {{domxref("PerformanceLongAnimationFrameTiming")}} objects. This object has a {{domxref("PerformanceLongAnimationFrameTiming.scripts", "scripts")}} property containing an array of {{domxref("PerformanceScriptTiming")}} objects, each one of which contains information about a script that contributed to the long animation frame.

The following is a JSON representation of a complete `"long-animation-frame"` performance entry example, containing a single script:

```json
{
  "blockingDuration": 0,
  "duration": 60,
  "entryType": "long-animation-frame",
  "firstUIEventTimestamp": 11801.099999999627,
  "name": "long-animation-frame",
  "renderStart": 11858.800000000745,
  "scripts": [
    {
      "duration": 45,
      "entryType": "script",
      "executionStart": 11803.199999999255,
      "forcedStyleAndLayoutDuration": 0,
      "invoker": "DOMWindow.onclick",
      "invokerType": "event-listener",
      "name": "script",
      "pauseDuration": 0,
      "sourceURL": "https://web.dev/js/index-ffde4443.js",
      "sourceFunctionName": "myClickHandler",
      "sourceCharPosition": 17796,
      "startTime": 11803.199999999255,
      "window": [Window object],
      "windowAttribution": "self"
    }
  ],
  "startTime": 11802.400000000373,
  "styleAndLayoutStart": 11858.800000000745
}
```

Beyond the standard data returned by a {{domxref("PerformanceEntry")}} entry, this contains the following noteworthy items:

- {{domxref("PerformanceLongAnimationFrameTiming.blockingDuration", "blockingDuration")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the total time in milliseconds for which the main thread was blocked from responding to high priority tasks, such as user input. This is calculated by taking all the [long tasks](/en-US/docs/Web/API/PerformanceLongTaskTiming#description) within the LoAF that have a `duration` of more than `50ms`, subtracting `50ms` from each, adding the rendering time to the longest task time, and summing the results.
- {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp", "firstUIEventTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time of the first UI event — such as a mouse or keyboard event — to be queued during the current animation frame.
- {{domxref("PerformanceLongAnimationFrameTiming.renderStart", "renderStart")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the start time of the rendering cycle, which includes {{domxref("Window.requestAnimationFrame()")}} callbacks, style and layout calculation, {{domxref("ResizeObserver")}} callbacks, and {{domxref("IntersectionObserver")}} callbacks.
- {{domxref("PerformanceLongAnimationFrameTiming.styleAndLayoutStart", "styleAndLayoutStart")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the beginning of the time period spent in style and layout calculations for the current animation frame.
- {{domxref("PerformanceScriptTiming")}} properties:

  - : Properties providing information on the script(s) that contributed to the LoAF:

    - {{domxref("PerformanceScriptTiming.executionStart", "script.executionStart")}}
      - : A {{domxref("DOMHighResTimeStamp")}} indicating the time when the script compilation finished and execution started.
    - {{domxref("PerformanceScriptTiming.forcedStyleAndLayoutDuration", "script.forcedStyleAndLayoutDuration")}}
      - : A {{domxref("DOMHighResTimeStamp")}} indicating the total time spent, in milliseconds, by the script processing forced layout/style. See [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) to understand what causes this.
    - {{domxref("PerformanceScriptTiming.invoker", "script.invoker")}} and {{domxref("PerformanceScriptTiming.invokerType", "script.invokerType")}}
      - : String values indicating how the script was called (for example, `"IMG#id.onload"` or `"Window.requestAnimationFrame"`) and the script entry point type (for example, `"event-listener"` or `"resolve-promise"`).
    - {{domxref("PerformanceScriptTiming.pauseDuration", "script.pauseDuration")}}
      - : A {{domxref("DOMHighResTimeStamp")}} indicating the total time, in milliseconds, spent by the script on "pausing" synchronous operations (for example, {{domxref("Window.alert()")}} calls or synchronous {{domxref("XMLHttpRequest")}}s).
    - {{domxref("PerformanceScriptTiming.sourceCharPosition", "script.sourceCharPosition")}}, {{domxref("PerformanceScriptTiming.sourceFunctionName", "script.sourceFunctionName")}}, and {{domxref("PerformanceScriptTiming.sourceURL", "script.sourceURL")}}

      - : Values representing the script character position, function name, and script URL, respectively. It is important to note that the reported function name will be the "entry point" of the script (i.e. the top level of the stack), and not any specific slow sub-function.

        For example, if an event handler calls a top-level function, which in turn calls a slow sub-function, the `source*` fields will report the top-level function's name and location, not the slow sub-function. This is because of performance reasons — a full stack trace is costly.

    - {{domxref("PerformanceScriptTiming.windowAttribution", "script.windowAttribution")}} an {{domxref("PerformanceScriptTiming.window", "script.window")}}
      - : An enumerated value describing the relationship of the container (i.e. either the top-level document or and {{htmlelement("iframe")}}) this script was executed in to the top-level document, and a reference to its {{domxref("Window")}} object.

    > **Note:** Script attribution is provided only for scripts running in the main thread of a page, including same-origin `<iframe>`s. However, cross-origin `<iframe>`s, [web workers](/en-US/docs/Web/API/Web_Workers_API), [service workers](/en-US/docs/Web/API/Service_Worker_API), and [extension](/en-US/docs/Mozilla/Add-ons/WebExtensions) code will not have script attribution in long animation frames, even if they impact the duration of one.

## Calculating timestamps

The timestamps provided in the {{domxref("PerformanceLongAnimationFrameTiming")}} class allow several further useful timings to be calculated for the long animation frame:

| Timing                            | Calculation                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| Start time                        | `startTime`                                                              |
| End time                          | `startTime + duration`                                                   |
| Work duration                     | `renderStart ? renderStart - startTime : duration`                       |
| Render duration                   | `renderStart ? (startTime + duration) - renderStart: 0`                  |
| Render: Pre-layout duration       | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Style and Layout duration | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Examples

### Long Animation Frames API feature detection

You can test whether the Long Animation Frames API is supported using {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Reporting LoAFs above a certain threshold

While LoAF thresholds are fixed at 50ms, this may lead to a large volume of reports when you first start performance optimization work. Initially, you may want to report LoAFs at a higher threshold value and gradually decrease the threshold as you improve the site and remove the worst LoAFs. The following code could be used to capture LoAFs above a specific threshold for further analysis (for example, by sending them back to an analytics endpoint):

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > REPORTING_THRESHOLD_MS) {
      // Example here logs to console; real code could send to analytics endpoint
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Long animation frame entries can be quite large; therefore, think carefully about what data from each entry should be sent to analytics. For example, the summary times of the entries and the script URLs might be enough for what you need.

### Observing the longest animation frames

You may wish to only collect data on the longest animation frames (say the top 5 or 10), to reduce the volume of data that needs to be collected. This could be handled as follows:

```js
MAX_LOAFS_TO_CONSIDER = 10;
let longestBlockingLoAFs = [];

const observer = new PerformanceObserver((list) => {
  longestBlockingLoAFs = longestBlockingLoAFs
    .concat(list.getEntries())
    .sort((a, b) => b.blockingDuration - a.blockingDuration)
    .slice(0, MAX_LOAFS_TO_CONSIDER);
});
observer.observe({ type: "long-animation-frame", buffered: true });

// Report data on visibilitychange event
document.addEventListener("visibilitychange", () => {
  // Example here logs to console; real code could send to analytics endpoint
  console.log(longestBlockingLoAFs);
});
```

### Reporting long animation frames with interactions

Another useful technique is to send the largest LoAF entries where an interaction occurred during the frame, which can be detected by the presence of a {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp", "firstUIEventTimestamp")}} value.

The following code logs all LoAF entries greater than 150ms where an interaction occurred during the frame. You could choose a higher or lower value depending on your needs.

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (
      entry.duration > REPORTING_THRESHOLD_MS &&
      entry.firstUIEventTimestamp > 0
    ) {
      // Example here logs to console; real code could send to analytics endpoint
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### Identifying common script patterns in long animation frames

An alternative strategy is to look at which scripts appear most often in LoAF entries. Data could be reported at the level of a script and/or character position to identify the most problematic scripts. This is useful in cases where themes or plugins causing performance issues are used across multiple sites.

The execution times of common scripts (or third-party origins) in LoAFs could be summed up and reported back to identify common contributors to LoAFs across a site or a collection of sites.

For example, to group scripts by URL and show total duration:

```js
const observer = new PerformanceObserver((list) => {
  const allScripts = list.getEntries().flatMap((entry) => entry.scripts);
  const scriptSource = [
    ...new Set(allScripts.map((script) => script.sourceURL)),
  ];
  const scriptsBySource = scriptSource.map((sourceURL) => [
    sourceURL,
    allScripts.filter((script) => script.sourceURL === sourceURL),
  ]);
  const processedScripts = scriptsBySource.map(([sourceURL, scripts]) => ({
    sourceURL,
    count: scripts.length,
    totalDuration: scripts.reduce(
      (subtotal, script) => subtotal + script.duration,
      0,
    ),
  }));
  processedScripts.sort((a, b) => b.totalDuration - a.totalDuration);
  // Example here logs to console; real code could send to analytics endpoint
  console.table(processedScripts);
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

## Comparing with the Long Tasks API

The Long Animation Frames API was preceded by the [Long Tasks API](https://w3c.github.io/longtasks/) (see {{domxref("PerformanceLongTaskTiming")}}). Both the APIs have a similar purpose and usage — exposing information about [long tasks](/en-US/docs/Glossary/Long_task) that block the main thread for 50ms or more.

Cutting down the number of long tasks that occur on your website is useful because long tasks can cause responsiveness issues. For example, if a user clicks a button while the main thread is dealing with a long task, the UI response to the click will be delayed until the long task is completed. Conventional wisdom is to break up long tasks into multiple smaller tasks so that important interactions can be handled in between.

However, the Long Tasks API has its limitations:

- An animation frame could be composed of several tasks that fall below the 50ms threshold, yet still collectively block the main thread. The Long Animation Frames API solves this by considering the animation frame as a whole.
- The {{domxref("PerformanceLongTaskTiming")}} entry type exposes more limited information than the {{domxref("PerformanceLongAnimationFrameTiming")}} type — it can tell you the container where a long task happened, but not the script or function that caused it, for example.
- The Long Tasks API provides an incomplete view, as it may exclude some important tasks. Some updates (rendering, for example) happen in separate tasks that ideally should be included together with the preceding execution that caused that update to accurately measure the "total work" for that interaction.

## See also

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) on web.dev (2024)
- [Where long tasks fall short](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API explainer (2024)
