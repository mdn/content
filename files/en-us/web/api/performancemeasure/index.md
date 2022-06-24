---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
page-type: web-api-interface
tags:
  - API
  - Interface
  - Performance Timeline API
  - Reference
  - Web Performance
browser-compat: api.PerformanceMeasure
---
{{APIRef("User Timing API")}}

**`PerformanceMeasure`** is an _abstract_ interface for {{domxref("PerformanceEntry")}} objects with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`measure`". Entries of this type are created by calling {{domxref("Performance.measure","performance.measure()")}} to add a _named_ {{domxref("DOMHighResTimeStamp")}} (the _measure_) between two _marks_ to the browser's _performance timeline_.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Properties

This interface defines:

- `PerformanceMeasure.detail`
  - : Contains arbitrary metadata about the measure.
    This may be passed in as a property of the {{domxref("Performance.measure()","performance.measure()")}} argument `MeasureOptions`.

In addition, it extends the following {{domxref("PerformanceEntry")}} properties by qualifying/constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`measure`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns the name given to the measure when it was created via a call to {{domxref("Performance.measure()","performance.measure()")}}.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} given to the measure when {{domxref("Performance.measure()","performance.measure()")}} was called.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the measure's end mark timestamp minus its start mark timestamp).

## Methods

This interface has no methods.

## Example

See the example in [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [User Timing (Overview)](/en-US/docs/Web/API/User_Timing_API)
- [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
