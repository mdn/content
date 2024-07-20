---
title: PerformanceMark
slug: Web/API/PerformanceMark
page-type: web-api-interface
browser-compat: api.PerformanceMark
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMark`** is an interface for {{domxref("PerformanceEntry")}} objects with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`mark`".

Entries of this type are typically created by calling {{domxref("Performance.mark","performance.mark()")}} to add a _named_ {{domxref("DOMHighResTimeStamp")}} (the _mark_) to the browser's performance timeline. To create a performance mark that isn't added to the browser's performance timeline, use the constructor.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}
  - : Creates a new `PerformanceMark` object that isn't added to the browser's performance timeline.

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties by qualifying/constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns "`mark`".
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the name given to the mark when it was created via a call to {{domxref("Performance.mark()","performance.mark()")}}.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("DOMHighResTimeStamp")}} when {{domxref("Performance.mark()","performance.mark()")}} was called.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns "`0`". (A mark has no _duration_.)

This interface also supports the following properties:

- {{domxref("PerformanceMark.detail")}} {{ReadOnlyInline}}
  - : Returns arbitrary metadata that has been included in the mark upon construction.

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
