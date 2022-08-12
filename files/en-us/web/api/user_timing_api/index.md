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

The **`User Timing`** interface allows the developer to create application specific {{domxref("DOMHighResTimeStamp","timestamps")}} that are part of the browser's _performance timeline_. There are two types of _user_ defined timing event types: the "`mark`" {{domxref("PerformanceEntry.entryType","event type")}} and the "`measure`" {{domxref("PerformanceEntry.entryType","event type")}}.

**`mark`** events are _named_ by the application and can be set at any location in an application. **`measure`** events are also _named_ by the application but they are placed between two marks thus they are effectively a _midpoint_ between two marks.

This document provides an overview of the `mark` and `measure` {{domxref("PerformanceEntry.entryType","performance event types")}} including the four `User Timing` methods that extend the {{domxref("Performance")}} interface. For more details and example code regarding these two performance event types and the methods, see [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Performance `marks`

A performance **`mark`** is a _named_ {{domxref("PerformanceEntry","performance entry")}} that is created by the application. The mark is a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance timeline_.

### Creating a performance `mark`

The {{domxref("Performance.mark","performance.mark()")}} method is used to create a performance mark. The method takes one argument, the _name_ of the mark (for example `performance.mark("mark-1")`).

The `mark's` {{domxref("PerformanceEntry","performance entry")}} will have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to "`mark`".
- {{domxref("PerformanceEntry.name","name")}} - set to the "`name`" given when the mark was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when `mark()` was called.
- {{domxref("PerformanceEntry.duration","duration")}} - set to "`0`" (a mark has no _duration_).

### Retrieving performance `marks`

The {{domxref("Performance")}} interface has three methods that can be used to retrieve a mark:

- {{domxref("Performance.getEntries","performance.getEntries()")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline. Finding only `mark` entries requires checking each entry's {{domxref("PerformanceEntry.entryType","entryType")}} for "`mark`".
- {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified `name` and `entryType`, thus set `entryType` to "`mark`" to get all marks (and set `name` accordingly to retrieve more specific entries).
- {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified `entryType`, thus set `entryType` to "`mark`" to get all marks.

### Removing performance `marks`

To remove a specific mark from the performance timeline, call `performance.clearMarks(name)` where `name` is the name of the mark(s) you want removed. If this method is called with no arguments, all mark type entries will be removed from the performance timeline.

## Performance `measures`

**`measure`** events are also _named_ by the application but they are placed between two marks thus they are effectively a _midpoint_ between two marks.

### Creating a performance `measure`

A `measure` is created by calling `performance.measure(measureName, startMarkName, endMarkName)` where `measureName` is the measure's name and `startMarkName` and `endMarkName` are the start and end names, respectively, of the marks the measure will be placed between (in the performance timeline).

The `measure's` {{domxref("PerformanceEntry","performance entry")}} will have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to "`measure`".
- {{domxref("PerformanceEntry.name","name")}} - set to the "`name`" given when the measure was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when `measure()` was called.
- {{domxref("PerformanceEntry.duration","duration")}} - set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the end mark timestamp minus the start mark timestamp).

### Retrieving performance `measures`

The {{domxref("Performance")}} interface has three methods that can be used to retrieve a measure:

- {{domxref("Performance.getEntries","performance.getEntries()")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline. Finding the `measure` entries requires checking each entry's {{domxref("PerformanceEntry.entryType","entryType")}} for "`measure`".
- {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified `name` and `entryType`, thus set `entryType` to "`measure`" to get all measures (and set `name` accordingly to retrieve more specific entries).
- {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}
  - : Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified `entryType`, thus set `entryType` to "`measure`" to get all measures.

### Removing performance `measures`

To remove a specific measure from the performance timeline, call `performance.clearMeasures(name)` where `name` is the name of the measure(s) you want removed. If this method is called with no arguments, all measure type entries will be removed from the performance timeline.

## Interoperability

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/en-US/docs/Web/API/Performance#browser_compatibility) table, the `User Timing` methods are broadly implemented by desktop and mobile browsers (the only exceptions are Desktop Safari and Mobile Safari, however [the Safari Technology Preview 24 has support](https://developer.apple.com/safari/technology-preview/release-notes/#r24)).

To test your browser's support for this API, run the [`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html) application.

## See also

- [User Timing Standard](https://w3c.github.io/user-timing/); W3C Editor's Draft
- [CanIUse data](https://caniuse.com/#search=user-timing)
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/); Xiaoqian Wu; W3C Editor's Draft
