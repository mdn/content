---
title: PerformanceMark
slug: Web/API/PerformanceMark
page-type: web-api-interface
tags:
  - API
  - Interface
  - Performance Timing API
  - Reference
  - Web Performance
browser-compat: api.PerformanceMark
---

{{APIRef("User Timing API")}}

**`PerformanceMark`** is an interface for {{domxref("PerformanceEntry")}} objects with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`mark`".

Entries of this type are typically created by calling {{domxref("Performance.mark","performance.mark()")}} to add a _named_ {{domxref("DOMHighResTimeStamp")}} (the _mark_) to the browser's performance timeline. To create a performance mark that isn't added to the browser's performance timeline, use the constructor.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Constructor

- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}
  - : Creates a new `PerformanceMark` object that isn't added to the browser's performance timeline.

## Instance properties

This interface has no properties but it extends the following {{domxref("PerformanceEntry")}} properties by qualifying/constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`mark`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns the name given to the mark when it was created via a call to {{domxref("Performance.mark()","performance.mark()")}}.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp")}} when {{domxref("Performance.mark()","performance.mark()")}} was called.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns "`0`". (A mark has no _duration_.)

## Instance methods

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
