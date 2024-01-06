---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
page-type: web-api-interface
browser-compat: api.PerformanceMeasure
---

{{APIRef("Performance API")}}

**`PerformanceMeasure`** is an _abstract_ interface for {{domxref("PerformanceEntry")}} objects with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`measure`". Entries of this type are created by calling {{domxref("Performance.measure","performance.measure()")}} to add a _named_ {{domxref("DOMHighResTimeStamp")}} (the _measure_) between two _marks_ to the browser's _performance timeline_.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Instance properties

This interface defines:

- {{domxref("PerformanceMeasure.detail")}}
  - : Contains arbitrary metadata about the measure.

In addition, it extends the following {{domxref("PerformanceEntry")}} properties by qualifying/constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`measure`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns the name given to the measure when it was created via a call to {{domxref("Performance.measure()","performance.measure()")}}.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} given to the measure when {{domxref("Performance.measure()","performance.measure()")}} was called.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the measure's end mark timestamp minus its start mark timestamp).

## Instance methods

This interface has no methods.

## Example

See the example in [Using the User Timing API](/en-US/docs/Web/API/Performance_API/User_timing).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [User Timing (Overview)](/en-US/docs/Web/API/Performance_API/User_timing)
- [Using the User Timing API](/en-US/docs/Web/API/Performance_API/User_timing)
