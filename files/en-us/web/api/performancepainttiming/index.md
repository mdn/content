---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
page-type: web-api-interface
tags:
  - API
  - Interface
  - Paint Timing
  - Performance Timeline API
  - PerformancePaintTiming
  - Reference
  - Web Performance
browser-compat: api.PerformancePaintTiming
---
{{APIRef("Performance Timeline API")}}

The **`PerformancePaintTiming`** interface of the [Paint Timing API](/en-US/docs/Web/API/Paint_Timing_API) provides timing information about "paint" (also called "render") operations during web page construction. "Paint" refers to conversion of the render tree to on-screen pixels.

An application can register a {{domxref("PerformanceObserver")}} for "`paint`" {{domxref("PerformanceEntry","performance entry types")}} and the observer can retrieve the times that paint events occur. Use this information to help identify areas that take too long to provide a good user experience.

{{InheritanceDiagram}}

## Properties

This interface has no properties but it extends the following {{domxref("PerformanceEntry")}} properties (for "`paint`" {{domxref ("PerformanceEntry.entryType","performance entry types")}}) by qualifying and constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`paint`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns either `"first-paint"` or `"first-contentful-paint"`.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the paint occurred.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns 0.

## Methods

This interface has no methods.

## Example

```js
function showPaintTimings() {
  if (window.performance) {
    let performance = window.performance;
    let performanceEntries = performance.getEntriesByType('paint');
    performanceEntries.forEach((performanceEntry) => {
      console.log(`The time to ${performanceEntry.name} was ${performanceEntry.startTime} milliseconds.`);
    });
  } else {
    console.log('Performance timing isn\'t supported.');
  }
}
```

The code above produces console output something like the following:

```bash
The time to first-paint was 2785.915 milliseconds.
The time to first-contentful-paint was 2787.460 milliseconds.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
