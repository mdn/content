---
title: Performance
slug: Web/API/Performance
page-type: web-api-interface
browser-compat: api.Performance
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`Performance`** interface provides access to performance-related information for the current page.

Performance entries are specific to each execution context. You can access performance information for code running in a window via {{domxref("Window.performance")}}, and for code running in a worker via {{domxref("WorkerGlobalScope.performance")}}.

{{InheritanceDiagram}}

## Instance properties

_The `Performance` interface doesn't inherit any properties._

- {{domxref("Performance.eventCounts")}} {{ReadOnlyInline}}

  - : An {{domxref("EventCounts")}} map containing the number of events which have been dispatched per event type.

- {{domxref("Performance.navigation")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : A legacy {{domxref("PerformanceNavigation")}} object that provides useful context about the operations included in the times listed in `timing`, including whether the page was a load or a refresh, how many redirections occurred, and so forth.

- {{domxref("Performance.timing")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : A legacy {{domxref("PerformanceTiming")}} object containing latency-related performance information.

- {{domxref("Performance.memory")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
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
  - : Removes all [performance entries](/en-US/docs/Web/API/PerformanceEntry) with a {{domxref("PerformanceEntry.entryType","entryType")}} of `"resource"` from the browser's performance data buffer.
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
- {{domxref("Performance.measureUserAgentSpecificMemory()")}} {{Experimental_Inline}}
  - : Estimates the memory usage of a web application including all its iframes and workers.
- {{domxref("Performance.now()")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the number of milliseconds elapsed since a reference instant.
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Sets the browser's resource timing buffer size to the specified number of `"resource"` {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry")}} objects.
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
