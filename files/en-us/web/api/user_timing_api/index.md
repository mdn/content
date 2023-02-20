---
title: User Timing API
slug: Web/API/User_Timing_API
page-type: web-api-overview
---

{{DefaultAPISidebar("Performance API")}}

The **User Timing API** allows you measure the performance of applications using [high-precision timestamps](/en-US/docs/Web/API/DOMHighResTimeStamp) that are part of the browser's performance timeline. There are two types of timing performance entries:

- {{domxref("PerformanceMark")}} entries are marks that you can name and add at any location in an application.
- {{domxref("PerformanceMeasure")}} entries are time measurements between two marks.

This document provides an overview how to work with the mark and measure performance entry types. For more details and example code, see [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Performance marks

Interface: {{domxref("PerformanceMark")}}

{{InheritanceDiagram("PerformanceMark")}}

The `PerformanceMark` interface has the following read-only properties (directly or inherited from {{domxref("PerformanceEntry")}}):

- {{domxref("PerformanceMark.detail","detail")}} provides additional information about the mark.
- {{domxref("PerformanceEntry.duration","duration")}} is always `0` (a mark has no duration).
- {{domxref("PerformanceEntry.entryType","entryType")}} is always `"mark"`.
- {{domxref("PerformanceEntry.name","name")}} is the name given when the mark was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} is the {{domxref("DOMHighResTimeStamp","timestamp")}} when `mark()` was called.

### Creating performance marks

- {{domxref("Performance.mark","performance.mark()")}} adds a performance mark to the browser's performance timeline.
- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}} constructs a `PerformanceMark` object that isn't added to the browser's performance timeline.

### Retrieving performance marks

- [`performance.getEntriesByType("mark")`](/en-US/docs/Web/API/Performance/getEntriesByType) gets all marks.
- [`performance.getEntriesByName("myMarker", "mark")`](/en-US/docs/Web/API/Performance/getEntriesByName) gets all marks with the name "myMarker".
- {{domxref("Performance.getEntries","performance.getEntries()")}} gets all entries (filter as needed).

### Removing performance marks

- [`performance.clearMarks("myMarker")`](/en-US/docs/Web/API/Performance/clearMarks) removes the performance marker with the name "myMarker".
- [`performance.clearMarks()`](/en-US/docs/Web/API/Performance/clearMarks) removes all performance markers.

## Performance measures

Interface: {{domxref("PerformanceMeasure")}}

{{InheritanceDiagram("PerformanceMeasure")}}

The `PerformanceMeasure` interface has the following read-only properties (directly or inherited from {{domxref("PerformanceEntry")}}):

- {{domxref("PerformanceMeasure.detail","detail")}} provides additional information about the measure.
- {{domxref("PerformanceEntry.duration","duration")}} is a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the end mark timestamp minus the start mark timestamp).
- {{domxref("PerformanceEntry.entryType","entryType")}} is always `"measure"`.
- {{domxref("PerformanceEntry.name","name")}} is the name given when the measure was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} is the {{domxref("DOMHighResTimeStamp","timestamp")}} when `measure()` was called.

### Creating performance measures

- [`performance.measure(measureName, startMarkName, endMarkName)`](/en-US/docs/Web/API/Performance/measure) creates a measure where `measureName` is the measure's name and `startMarkName` and `endMarkName` are the start and end names, respectively, of the marks the measure will be placed between (in the performance timeline).

### Retrieving performance measures

- [`performance.getEntriesByType("measure")`](/en-US/docs/Web/API/Performance/getEntriesByType) gets all measures.
- [`performance.getEntriesByName("myMeasure", "measure")`](/en-US/docs/Web/API/Performance/getEntriesByName) gets all measures with the name "myMeasure".
- {{domxref("Performance.getEntries","performance.getEntries()")}} gets all entries (filter as needed).

### Removing performance measures

- [`performance.clearMeasures("myMeasure")`](/en-US/docs/Web/API/Performance/clearMeasures) removes the performance measure with the name "myMeasure".
- [`performance.clearMeasures()`](/en-US/docs/Web/API/Performance/clearMeasures) removes all performance measures.

## Examples

### Measuring login duration

Typically, you identify the most critical paths of your application and measure how long it takes from start to finish. For example, you can measure how long it takes to login:

```js
// Place at a location in the code that starts login 
performance.mark("login-started");

// Place at a location in the code that finishes login 
performance.mark("login-finished");

// Measure login duration
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished"
);

// Send to analytics endpoint
// or log to the console
console.log(loginMeasure.duration);
```

## Specifications

- [User Timing specification](https://w3c.github.io/user-timing/)

## See also

- [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
