---
title: Performance API
slug: Web/API/Performance_API
page-type: web-api-overview
spec-urls:
  - https://wicg.github.io/element-timing/
  - https://w3c.github.io/event-timing/
  - https://w3c.github.io/hr-time/
  - https://w3c.github.io/largest-contentful-paint/
  - https://w3c.github.io/longtasks/
  - https://w3c.github.io/navigation-timing/
  - https://w3c.github.io/paint-timing/
  - https://w3c.github.io/performance-timeline/
  - https://w3c.github.io/resource-timing/
  - https://w3c.github.io/server-timing/
  - https://w3c.github.io/user-timing/
---

{{DefaultAPISidebar("Performance API")}}

The Performance API is a group of standards used to measure the performance of web applications.

## Concepts and usage

To ensure web applications are fast, it's important to measure and analyze various performance metrics. The Performance API provides important built-in metrics and the ability to add your own measurements to the browser's performance timeline. The performance timeline contains high precision timestamps and can be displayed in developer tools. You can also send its data to analytics end points to record performance metrics over time.

Each performance metric is represented by a single {{domxref("PerformanceEntry")}}. A performance entry has a `name`, a `duration`, a `startTime`, and a `type`. All performance metrics extend the `PerformanceEntry` interface and qualify it further.

Most of the performance entries are recorded for you without you having to do anything, and are then accessible either through {{domxref("Performance.getEntries()")}} or (preferably) through {{domxref("PerformanceObserver")}}. For example, {{domxref("PerformanceEventTiming")}} entries are recorded for events that take longer than a set threshold. But the Performance API also enables you to define and record your own custom events, using the {{domxref("PerformanceMark")}} and {{domxref("PerformanceMeasure")}} interfaces.

The main {{domxref("Performance")}} interface is available for each global using {{domxref("performance_property", "self.performance")}} and enables you to add custom performance entries, to clear performance entries, and to retrieve performance entries.

The {{domxref("PerformanceObserver")}} interface enables you to listen for various types of performance entry as they are recorded.

![UML diagram of Performance APIs](diagram.svg)

## Interfaces

- {{domxref("EventCounts")}}
  - : A read-only map returned by {{domxref("performance.eventCounts")}} containing the number of events which have been dispatched per event type.
- {{domxref("LargestContentfulPaint")}}
  - : Measures the render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load.
- {{domxref("Performance")}}
  - : Main interface to access performance measurements. Available to window and worker contexts using {{domxref("performance_property", "self.performance")}}.
- {{domxref("PerformanceElementTiming")}}
  - : Measures rendering timestamps of specific elements.
- {{domxref("PerformanceEntry")}}
  - : An entry on the performance timeline encapsulating a single performance metric. All performance metrics inherit from this interface.
- {{domxref("PerformanceEventTiming")}}
  - : Measures latency of events and first input delay (FID).
- {{domxref("PerformanceLongTaskTiming")}}
  - : Detects long tasks that occupy rendering and block other tasks from being executed.
- {{domxref("PerformanceMark")}}
  - : Custom marker for your own entry on the performance timeline.
- {{domxref("PerformanceMeasure")}}
  - : Custom time measurement between two performance entries.
- {{domxref("PerformanceNavigationTiming")}}
  - : Measures document navigation events, like how much time it takes to load a document.
- {{domxref("PerformanceObserver")}}
  - : Listens for new performance entries as they are recorded in the performance timeline.
- {{domxref("PerformanceObserverEntryList")}}
  - : List of entries that were observed in a performance observer.
- {{domxref("PerformancePaintTiming")}}
  - : Measures render operations during web page construction.
- {{domxref("PerformanceResourceTiming")}}
  - : Measures network loading metrics such as redirect start and end times, fetch start, DNS lookup start and end times, response start and end times for resources such as images, scripts, fetch calls, etc.
- {{domxref("PerformanceServerTiming")}}
  - : Surfaces server metrics that are sent with the response in the {{HTTPHeader("Server-Timing")}} HTTP header.
- {{domxref("TaskAttributionTiming")}}
  - : Identifies the type of task and the container that is responsible for the long task.

## Guides and tutorials

- [Using the Performance API](/en-US/docs/Web/API/Performance_API/Using_the_Performance_API)
- [Using Performance Timeline](/en-US/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
- [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
- [Using Navigation Timing](/en-US/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing)
- [Using the Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)

## Specifications

{{Specifications}}

## See also

- [Web performance](/en-US/docs/Web/Performance)
- [Learn: Web performance](/en-US/docs/Learn/Performance)
