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

**`PerformanceMark`** is an _abstract_ interface for {{domxref("PerformanceEntry")}} objects with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`mark`". Entries of this type are created by calling {{domxref("Performance.mark","performance.mark()")}} to add a _named_ {{domxref("DOMHighResTimeStamp")}} (the _mark_) to the browser's _performance timeline_.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Properties

This interface has no properties but it extends the following {{domxref("PerformanceEntry")}} properties by qualifying/constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`mark`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns the name given to the mark when it was created via a call to {{domxref("Performance.mark()","performance.mark()")}}.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp")}} when {{domxref("Performance.mark()","performance.mark()")}} was called.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns "`0`". (A mark has no _duration_.)

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
