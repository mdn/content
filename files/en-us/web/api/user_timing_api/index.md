---
title: User Timing API
slug: Web/API/User_Timing_API
page-type: web-api-overview
tags:
  - Guide
  - Overview
  - Web Performance
---

{{DefaultAPISidebar("User Timing API")}}

The **`User Timing`** API allows you to create your own {{domxref("DOMHighResTimeStamp","timestamps")}} that are part of the browser's performance timeline. There are two types of user defined timing event types:

- **`mark`** events: marks that you can name and add at any location in an application.
- **`measure`** events: marks that are placed between two marks and act as a midpoint between two marks.

This document provides an overview of the `mark` and `measure` performance event types, including how to work with the extensions the User Timing API provides to the {{domxref("Performance")}} interface. For more details and example code regarding these two performance event types and the methods, see [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Performance marks

Interface: {{domxref("PerformanceMark")}}

{{InheritanceDiagram("PerformanceMark")}}

The `PerformanceMark` object inherits the following property values from {{domxref("PerformanceEntry")}}:

- {{domxref("PerformanceEntry.entryType","entryType")}}: set to "`mark`".
- {{domxref("PerformanceEntry.name","name")}}: set to the name given when the mark was created.
- {{domxref("PerformanceEntry.startTime","startTime")}}: set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when `mark()` was called.
- {{domxref("PerformanceEntry.duration","duration")}}: set to "`0`" (a mark has no _duration_).

### Creating performance marks

- {{domxref("Performance.mark","performance.mark()")}} adds a performance mark to the browser's performance timeline.
- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}} constructs a `PerformanceMark` object that isn't added to the browser's performance timeline.

### Retrieving performance marks

- [`performance.getEntriesByType("mark")`](/en-US/docs/Web/API/Performance/getEntriesByType) gets all marks.
- [`performance.getEntriesByName("myMarker", "mark")`](/en-US/docs/Web/API/Performance/getEntriesByName) gets all marks with the name "myMarker".
- {{domxref("Performance.getEntries","performance.getEntries()")}} gets all entries (filter as you need).

### Removing performance marks

- [`performance.clearMarks("myMarker")`](/en-US/docs/Web/API/Performance/clearMarks) removes the performance marker with the name "myMarker".
- [`performance.clearMarks()`](/en-US/docs/Web/API/Performance/clearMarks) removes all performance markers.

## Performance measures

Interface: {{domxref("PerformanceMeasure")}}

{{InheritanceDiagram("PerformanceMeasure")}}

The `PerformanceMeasure` object inherits the following property values from {{domxref("PerformanceEntry")}}:

- {{domxref("PerformanceEntry.entryType","entryType")}}: set to "`measure`".
- {{domxref("PerformanceEntry.name","name")}}: set to the name given when the measure was created.
- {{domxref("PerformanceEntry.startTime","startTime")}}: set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when `measure()` was called.
- {{domxref("PerformanceEntry.duration","duration")}}: set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the end mark timestamp minus the start mark timestamp).

### Creating performance measures

- [`performance.measure(measureName, startMarkName, endMarkName)`](/en-US/docs/Web/API/Performance/measure) creates a measure where `measureName` is the measure's name and `startMarkName` and `endMarkName` are the start and end names, respectively, of the marks the measure will be placed between (in the performance timeline).

### Retrieving performance measures

- [`performance.getEntriesByType("measure")`](/en-US/docs/Web/API/Performance/getEntriesByType) gets all measures.
- [`performance.getEntriesByName("myMeasure", "measure")`](/en-US/docs/Web/API/Performance/getEntriesByName) gets all measure with the name "myMeasure".
- {{domxref("Performance.getEntries","performance.getEntries()")}} gets all entries (filter as you need).

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
