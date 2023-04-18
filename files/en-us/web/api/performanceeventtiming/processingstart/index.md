---
title: "PerformanceEventTiming: processingStart property"
short-title: processingStart
slug: Web/API/PerformanceEventTiming/processingStart
page-type: web-api-instance-property
browser-compat: api.PerformanceEventTiming.processingStart
---

{{APIRef("Performance API")}}

The read-only **`processingStart`** property returns the time at which event dispatch started. This is when event handlers are about to be executed.

## Value

A {{domxref("DOMHighResTimeStamp")}} timestamp.

## Examples

### Using the processingStart property

The `processingStart` property can be used when observing event timing entries ({{domxref("PerformanceEventTiming")}}). For example, to calculate input delay or event processing times.

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

- {{domxref("PerformanceEventTiming.processingEnd")}}
