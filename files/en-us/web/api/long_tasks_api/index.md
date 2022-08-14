---
title: Long Tasks API
slug: Web/API/Long_Tasks_API
page-type: web-api-overview
tags:
  - API
  - Experimental
  - Landing
  - Long Tasks API
  - NeedsContent
  - Overview
  - Performance
  - PerformanceLongTaskTiming
  - Reference
  - TaskAttributionTiming
  - Web Performance
browser-compat:
  - api.PerformanceLongTaskTiming
  - api.TaskAttributionTiming
---
{{DefaultAPISidebar("Long Tasks")}}

## Motivation

The experimental Long Tasks API gives us visibility into tasks that take 50 milliseconds or more.
The 50 ms threshold comes from the [RAIL Model](https://web.dev/rail/), in particular the ["Response: process events in under 50 ms"](https://web.dev/rail/#response:-process-events-in-under-50ms) section.

Tasks that block the main thread for 50 ms or more cause, among other issues:

- Delayed "{{glossary("Time to interactive")}}".
- High/variable input latency.
- High/variable event handling latency.
- Janky animations and scrolling.

## Concepts

Some key terms or ideas that are utilized by the Long Tasks API.

### Long task

Any uninterrupted period where the main UI thread is busy for 50 ms or longer. Common examples include:

- Long running event handlers.
- Expensive reflows and other re-renders.
- Work the browser does between different turns of the event loop that exceeds 50 ms.

### Culprit browsing context container

The "culprit browsing context container", or "the container" for short, is the top level page, iframe, embed or object that the task occurred within.

### Attributions

A list of containers that the task occurred within. For tasks that don't occur within the top level page, the `containerId`, `containerName` and `containerSrc` fields may provide information as to the source of the task.

## Usage

```js
const observer = new PerformanceObserver((list) => {
    const perfEntries = list.getEntries();
    perfEntries.forEach((entry) => {
      // Process long task notifications:
      // report back for analytics and monitoring
    });
});

// Register observer for long task notifications
observer.observe({entryTypes: ["longtask"]});
// Long script execution after this will result in queueing
// and receiving "longtask" entries in the observer.
```

## Interfaces

- {{domxref('PerformanceLongTaskTiming')}}
  - : Reports instances of long tasks.
- {{domxref("TaskAttributionTiming")}}
  - : Returns information about the work involved in a long task and its associate frame context.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [GitHub repository](https://github.com/w3c/longtasks) contains documentation and some code samples.
- [PerfPlanet article](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/) on Long Tasks API from 20th December 2017.
