---
title: Performance
slug: Web/API/Performance
page-type: web-api-interface
tags:
  - API
  - Interface
  - Navigation Timing
  - Performance
  - Reference
  - Web Performance
browser-compat: api.Performance
---

{{APIRef("Performance API")}}

The **`Performance`** interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the [Performance Timeline API](/en-US/docs/Web/API/Performance_Timeline), the [Navigation Timing API](/en-US/docs/Web/API/Navigation_timing_API), the [User Timing API](/en-US/docs/Web/API/User_Timing_API), and the [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API).

An object of this type can be obtained by calling the {{domxref("window.performance")}} read-only attribute.

> **Note:** This interface and its members are available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) via [`WorkerGlobalScope.performance`](/en-US/docs/Web/API/performance_property), except where indicated below. Also, note that performance markers and measures are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.

{{InheritanceDiagram}}

## Instance properties

_The `Performance` interface doesn't inherit any properties._

- {{domxref("Performance.eventCounts")}} {{ReadOnlyInline}}

  - : An {{domxref("EventCounts")}} map containing the number of events which have been dispatched per event type.

- {{domxref("Performance.navigation")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : A legacy {{domxref("PerformanceNavigation")}} object that provides useful context about the operations included in the times listed in `timing`, including whether the page was a load or a refresh, how many redirections occurred, and so forth.

    > **Note:** Not available in workers.

- {{domxref("Performance.timing")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : A legacy {{domxref("PerformanceTiming")}} object containing latency-related performance information.

    > **Note:** Not available in workers.

- {{domxref("Performance.memory")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : A _non-standard_ extension added in Chrome, this property provides an object with basic memory usage information. _You **should not use** this non-standard API._
- {{domxref("Performance.timeOrigin")}} {{ReadOnlyInline}}
  - : Returns the high resolution timestamp of the start time of the performance measurement.

## Instance methods

_The `Performance` interface doesn't inherit any methods._

- {{domxref("Performance.clearMarks()")}}
  - : Removes the given _mark_ from the browser's performance entry buffer.
- {{domxref("Performance.clearMeasures()")}}
  - : Removes the given _measure_ from the browser's performance entry buffer.
- {{domxref("Performance.clearResourceTimings()")}}
  - : Removes all {{domxref("PerformanceEntry","performance entries")}} with a {{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" from the browser's performance data buffer.
- {{domxref("Performance.getEntries()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects based on the given _filter_.
- {{domxref("Performance.getEntriesByName()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects based on the given _name_ and _entry type_.
- {{domxref("Performance.getEntriesByType()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects of the given _entry type_.
- {{domxref("Performance.mark()")}}
  - : Creates a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance entry buffer_ with the given name.
- {{domxref("Performance.measure()")}}
  - : Creates a named {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's performance entry buffer between two specified marks (known as the _start mark_ and _end mark_, respectively).
- {{domxref("Performance.measureUserAgentSpecificMemory()")}}
  - : Estimates the memory usage of a web application including all its iframes and workers.
- {{domxref("Performance.now()")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the number of milliseconds elapsed since a reference instant.
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Sets the browser's resource timing buffer size to the specified number of "`resource`" {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry","performance entry")}} objects.
- {{domxref("Performance.toJSON()")}}
  - : Returns a JSON representation of the `Performance` object.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : Fired when the browser's [resource timing buffer](/en-US/docs/Web/API/Performance/setResourceTimingBufferSize) is full.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
