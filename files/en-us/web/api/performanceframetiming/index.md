---
title: PerformanceFrameTiming
slug: Web/API/PerformanceFrameTiming
tags:
  - API
  - Frame Timing API
  - Interface
  - Performance Timeline API
  - PerformanceFrameTiming
  - Reference
  - Web Performance
browser-compat: api.PerformanceFrameTiming
---
{{APIRef("Frame Timing API")}}{{SeeCompatTable}}

**`PerformanceFrameTiming`** is an _abstract_ interface that provides _frame_ timing data about the browser's event loop.

A _frame_ represents the amount of work a browser does in [one event loop](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8) such as processing DOM events, resizing, scrolling, rendering, CSS animations, etc.. A _frame rate_ of 60fps (frames per second) for a 60Hz refresh rate is the target for a good _responsive_ user experience. This means the browser should process a frame in about 16.7ms.

An application can register a {{domxref("PerformanceObserver")}} for "`frame`" {{domxref("PerformanceEntry","performance entry types")}} and the observer can retrieve data about the duration of each frame event. This information can be used to help identify areas that take too long to provide a good user experience.

{{InheritanceDiagram}}

## Properties

This interface has no properties but it extends the following {{domxref("PerformanceEntry")}} properties (for "`frame`" {{domxref ("PerformanceEntry.entryType","performance entry types")}}) by qualifying and constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`frame`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns the [document's address](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the frame was started.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} indicating the difference between the `startTime`s of two successive frames.

## Methods

This interface has no methods.

## Example

See the example in [Using the Frame Timing API](/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceObserver")}}
- [Frame Rate (Firefox Performance Tool)](/en-US/docs/Tools/Performance/Frame_rate)
- [Frame Timing (Overview)](/en-US/docs/Web/API/Frame_Timing)
- [Using the Frame Timing API](/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
