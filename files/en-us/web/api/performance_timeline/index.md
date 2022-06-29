---
title: Performance Timeline
slug: Web/API/Performance_Timeline
page-type: web-api-overview
tags:
  - Guide
  - Overview
  - Web Performance
spec-urls: https://w3c.github.io/performance-timeline/
---
{{DefaultAPISidebar("Performance Timeline API")}}

The **Performance Timeline** API defines extensions to the {{domxref("Performance")}} interface to support client-side latency measurements within applications. The extensions provide interfaces to retrieve {{domxref("PerformanceEntry","performance entry metrics", '', 'true')}} based on specific filter criteria. The standard also includes interfaces that allow an application to define _[performance observer](#performance_observers)_ callbacks that are notified when specific performance events are added to the browser's _performance timeline_.

This document provides an overview of the standard's interfaces. For more details about the interfaces, see the reference pages and [Using Performance Timeline](/en-US/docs/Web/API/Performance_Timeline/Using_Performance_Timeline).

{{AvailableInWorkers}}

## Performance extensions

The Performance Timeline API extends the {{domxref("Performance")}} interface with three methods that provide different mechanisms to get a set of {{domxref("PerformanceEntry","performance records (metrics)")}}, depending on the specified filter criteria. The methods are:

- {{domxref("Performance.getEntries","getEntries()")}}
  - : Returns all recorded {{domxref("PerformanceEntry","performance entries")}} or, optionally, the entries based on the specified {{domxref("PerformanceEntry.name","name")}}, {{domxref("PerformanceEntry.entryType","performance type")}} and/or the {{domxref("PerformanceResourceTiming/initiatorType","initiatorType")}} (such as an HTML element).
- {{domxref("Performance.getEntriesByName","getEntriesByName()")}}
  - : Returns the recorded {{domxref("PerformanceEntry","performance entries")}} based on the specified {{domxref("PerformanceEntry.name","name")}} and optionally the {{domxref("PerformanceEntry.entryType","performance type")}}.
- {{domxref("Performance.getEntriesByType","getEntriesByType()")}}
  - : Returns the recorded {{domxref("PerformanceEntry","performance entries")}} based on the specified {{domxref("PerformanceEntry.entryType","performance type")}}.

## PerformanceEntry interface

The {{domxref("PerformanceEntry")}} interface encapsulates a single _performance entry_ — that is, a single data point or metric in the _performance timeline_. This interface has the following four properties, and these properties are extended (with additional constraints) by other interfaces (such as {{domxref("PerformanceMark")}}):

- {{domxref("PerformanceEntry.name","name")}}
  - : The name of the performance entry when the metric was created.
- {{domxref("PerformanceEntry.entryType","entryType")}}
  - : The type of performance metric (for example, "`mark`").
- {{domxref("PerformanceEntry.startTime","startTime")}}
  - : A {{domxref("DOMHighResTimeStamp","high resolution timestamp")}} representing the starting time for the performance entry.
- {{domxref("PerformanceEntry.duration","duration")}}
  - : A {{domxref("DOMHighResTimeStamp","high resolution timestamp", '', 'true')}} representing the time value of the duration of the performance event. (Some performance {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} have no concept of _duration_ and this value is set to `'0'` for such types.)

This interface includes a {{domxref("PerformanceEntry.toJSON","toJSON()")}} method that returns the serialization of the {{domxref("PerformanceEntry")}} object. The serialization is specific to the performance entry's {{domxref("PerformanceEntry.entryType","type")}}.

## Performance observers

{{SeeCompatTable}}

The _performance observer_ interfaces allow an application to register an _observer_ for specific performance event types, and when one of those event types is recorded, the application is _notified_ of the event via the observer's callback function that was specified when the observer was created.

When the observer (callback) is invoked, the callback's parameters include a _{{domxref("PerformanceObserverEntryList","performance observer entry list")}}_ that contains only _observed_ {{domxref("PerformanceEntry","performance entries")}}. That is, the list contains entries only for the event types that were specified when the observer's {{domxref("PerformanceObserver.observe","observe()")}} method was invoked. The {{domxref("PerformanceObserverEntryList","performance observer entry list")}} interface has the same three `getEntries*()` methods as the {{domxref("Performance")}} interface. However, note there is one key difference with these methods; the {{domxref("PerformanceObserverEntryList","performance observer entry list")}} versions are used to retrieve _observed_ performance entries within the observer callback.

Besides the {{domxref("PerformanceObserver","PerformanceObserver's")}} interface's {{domxref("PerformanceObserver.observe","observe()")}} method (which is used to register the {{domxref("PerformanceEntry.entryType","entry types")}} to _observe_), the {{domxref("PerformanceObserver")}} interface also has a {{domxref("PerformanceObserver.disconnect","disconnect()")}} method that stops an observer from receiving further events.

Performance observers were added to the `Level 2` version of the standard and were not widely implemented.

## Specifications

{{Specifications}}

## Implementation status

A summary of the interfaces' implementation status is provided below, including a link to more detailed information.

- Performance interface extensions: As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/en-US/docs/Web/API/Performance#browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers and have less support on mobile devices.
- PerformanceEntry: As shown in the {{domxref("PerformanceEntry")}} interface's [Browser Compatibility](/en-US/docs/Web/API/PerformanceEntry#browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers and have less support on mobile devices.
- Performance Observers {{experimental_inline}}: As shown in the {{domxref("PerformanceObserver")}} interface's [Browser Compatibility](/en-US/docs/Web/API/PerformanceObserver#browser_compatibility) table, this interface has no shipping implementations.

To test your browser's support for these interfaces, run the [`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html) application.

## See also

- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
