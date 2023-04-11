---
title: "PerformanceEventTiming: processingEnd property"
short-title: processingEnd
slug: Web/API/PerformanceEventTiming/processingEnd
page-type: web-api-instance-property
browser-compat: api.PerformanceEventTiming.processingEnd
---

{{APIRef("Performance API")}}

The read-only **`processingEnd`** property returns the time the last event handler finished executing.

It's equal to {{domxref("PerformanceEventTiming.processingStart")}} when there are no such event handlers.

## Value

A {{domxref("DOMHighResTimeStamp")}} timestamp.

## Examples

### Using the processingEnd property

The `processingEnd` property can be used when observing event-timing entries ({{domxref("PerformanceEventTiming")}}). For example, to calculate input delay or event processing times.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;
    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;
    // Synchronous event processing time
    // (between start and end dispatch)
    const time = entry.processingEnd - entry.processingStart;
  });
});
// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceEventTiming.processingStart")}}
