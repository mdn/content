---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceLongTaskTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`PerformanceLongTaskTiming`** interface provides information about tasks that occupy the UI thread for 50 milliseconds or more.

## Description

Long tasks that block the main thread for 50ms or more cause, among other issues:

- Delayed {{glossary("Time to interactive")}} (TTI).
- High/variable input latency.
- High/variable event handling latency.
- Janky animations and scrolling.

A long task is any uninterrupted period where the main UI thread is busy for 50ms or longer. Common examples include:

- Long-running event handlers.
- Expensive reflows and other re-renders.
- Work the browser does between different turns of the event loop that exceeds 50 ms.

Long tasks refer to "culprit browsing context container", or "the container" for short, which is the top-level page, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} or {{HTMLElement("object")}} that the task occurred within.

For tasks that don't occur within the top-level page and for figuring out which container is responsible for the long task, the {{domxref("TaskAttributionTiming")}} interface provides the `containerId`, `containerName` and `containerSrc` properties, which may provide more information about the source of the task.

## Inheritance

`PerformanceLongTaskTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for long task timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the elapsed time between the start and end of the task, with a 1ms granularity.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"longtask"`
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns one of the following strings referring to the browsing context or frame that can be attributed to the long task:
    - `"cross-origin-ancestor"`
    - `"cross-origin-descendant"`
    - `"cross-origin-unreachable"`
    - `"multiple-contexts"`
    - `"same-origin-ancestor"`
    - `"same-origin-descendant"`
    - `"same-origin"`
    - `"self"`
    - `"unknown"`
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the task started.

This interface also supports the following properties:

- {{domxref("PerformanceLongTaskTiming.attribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a sequence of {{domxref('TaskAttributionTiming')}} instances.

## Instance methods

- {{domxref("PerformanceLongTaskTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceLongTaskTiming` object.

## Examples

### Getting long tasks

To get long task timing information, create a {{domxref("PerformanceObserver")}} instance and then call its [`observe()`](/en-US/docs/Web/API/PerformanceObserver/observe) method, passing in `"longtask"` as the value of the [`type`](/en-US/docs/Web/API/PerformanceEntry/entryType) option. You also need to set `buffered` to `true` to get access to long tasks the user agent buffered while constructing the document. The `PerformanceObserver` object's callback will then be called with a list of `PerformanceLongTaskTiming` objects which you can analyze.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TaskAttributionTiming")}}
