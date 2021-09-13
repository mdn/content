---
title: Frame Timing API
slug: Web/API/Frame_Timing_API
tags:
  - Guide
  - Overview
  - Web Performance
---
{{DefaultAPISidebar("Frame Timing API")}}{{SeeCompatTable}}

The **`PerformanceFrameTiming`** interface provides _frame_ timing data about the browser's event loop. A _frame_ represents the amount of work a browser does in [one event loop iteration](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8) such as processing DOM events, resizing, scrolling, rendering, CSS animations, etc. A _frame rate_ of 60 fps (frames per second) for a 60 Hz refresh rate is a common target for a good _responsive_ user experience. This means the browser should process a frame in about 16.7 ms.

An application can register a {{domxref("PerformanceObserver")}} for "`frame`" {{domxref("PerformanceEntry","performance entry types")}}. The _observer_ (callback) will be notified when new "`frame`" events are added to the browser's _performance timeline_ and the frame's {{domxref("PerformanceEntry.duration","duration")}} (length of time) will be available. This data can be used to help identify areas that take too long to provide a good user experience.

Example code of the interfaces described in this document is included in _[Using the Frame Timing API](/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)_.

## Performance `frames`

The {{domxref("PerformanceFrameTiming")}} interface extends the following {{domxref("PerformanceEntry")}} properties (for "`frame`" {{domxref("PerformanceEntry.entryType","performance entry types")}}) by qualifying and constrainting the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Set to "`frame`".
- {{domxref("PerformanceEntry.name")}}
  - : Set to the [document's address](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}}
  - : Set to the {{domxref("DOMHighResTimeStamp")}} when the frame was started.
- {{domxref("PerformanceEntry.duration")}}
  - : Set to a {{domxref("DOMHighResTimeStamp","timestamp")}} indicating the difference between the `startTime`s of two successive frames.

This data, particularly the `duration` timestamp, can be used to help identify performance problems.

## Frame observers

{{experimental_inline}}The _performance observer_ interfaces allow an application to register an _observer_ for specific {{domxref("PerformanceEntry","performance event types")}}. When one of those event types is recorded in the browser's _performance timeline_, the application is notified of the event via the observer's callback function that was specified when the observer was created.

To observe "`frame`" performance entry types, the application first creates a {{domxref("PerformanceObserver")}} object with a specific frame observer callback (function). Next, {{domxref("PerformanceObserver.observe()")}} is used to specify the set of performance events to observe - in this case, just the "`frame`" event type. When the browser adds a new frame to the performance timeline, the specified observer callback will be invoked.

## Accessing frame data

When a frame {{domxref("PerformanceObserver","observer")}} is invoked, frame {{domxref("PerformanceEntry","performance entries")}} can be retrieved by calling {{domxref("PerformanceObserverEntryList.getEntriesByType()")}} with an argument of "`frame`". This method returns a list of "`frame`" {{domxref("PerformanceEntry")}} objects. Each frame object's {{domxref("PerformanceEntry.duration","duration")}} property returns the timestamp of two consecutive frames. If this value is greater than the time needed to provide a good user experience, further analysis might be warranted.

## Browser compatibility

{{experimental_inline}}As shown in the {{domxref("PerformanceFrameTiming")}} interface's [Browser Compatibility](/en-US/docs/Web/API/PerformanceFrameTiming#browser_compatibility) table, this interface has no implementations.

## See also

- [Frame Rate (Firefox Performance Tool)](/en-US/docs/Tools/Performance/Frame_rate)
- [Using the Frame Timing API](/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
