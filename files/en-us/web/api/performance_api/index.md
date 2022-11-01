---
title: Performance API
slug: Web/API/Performance_API
page-type: web-api-overview
tags:
  - Overview
  - Performance
  - Web Performance
spec-urls:
  - https://w3c.github.io/hr-time/
  - https://w3c.github.io/event-timing/
  - https://w3c.github.io/largest-contentful-paint/
  - https://w3c.github.io/longtasks/
  - https://w3c.github.io/navigation-timing/
  - https://w3c.github.io/paint-timing/
  - https://w3c.github.io/performance-timeline/
  - https://w3c.github.io/resource-timing/
  - https://w3c.github.io/server-timing/
  - https://w3c.github.io/user-timing/
  - https://wicg.github.io/element-timing/
---

{{DefaultAPISidebar("Performance API")}}

The Performance API is a group of standards used to measure the performance of web applications.
It provides high resolution points in time ({{domxref("DOMHighResTimeStamp")}}) and a performance timeline for benchmarking.

The various timing APIs (see below) identify the bottlenecks of the web applications. They all appear as an entry ({{domxref("PerformanceEntry")}}) on the performance timeline. Performance observers ({{domxref("PerformanceObserver")}}) can notify about new performance entries.

![UML diagram of Performance APIs](diagram.svg)

## Performance API reference docs

<div class="index">

### High resolution time

- {{domxref("performance_property", "self.performance")}}
- {{domxref("Performance")}}
- {{domxref("DOMHighResTimeStamp")}}

### Performance timeline

- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver")}}
- {{domxref("PerformanceObserverEntryList")}}
- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("Performance.getEntriesByType()")}}

### Resource Timing

- {{domxref("PerformanceResourceTiming")}}
- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}

### User Timing

- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("Performance.mark()")}}
- {{domxref("Performance.measure()")}}
- {{domxref("Performance.clearMarks()")}}
- {{domxref("Performance.clearMeasures()")}}

### Long Task Timing

- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("TaskAttributionTiming")}}

### Navigation Timing

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceTiming")}} {{deprecated_inline}}
- {{domxref("PerformanceNavigation")}} {{deprecated_inline}}

### Server Timing

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}

### Event Timing

- {{domxref("PerformanceEventTiming")}}
- {{domxref("Performance.eventCounts")}}

### Element Timing

- {{domxref("PerformanceElementTiming")}}

### Paint Timing

- {{domxref("PerformancePaintTiming")}}
- {{domxref("LargestContentfulPaint")}}

</div>

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
