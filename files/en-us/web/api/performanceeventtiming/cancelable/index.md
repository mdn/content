---
title: "PerformanceEventTiming: cancelable property"
short-title: cancelable
slug: Web/API/PerformanceEventTiming/cancelable
page-type: web-api-instance-property
browser-compat: api.PerformanceEventTiming.cancelable
---

{{APIRef("Performance API")}}

The read-only **`cancelable`** property returns the associated event's [`cancelable`](/en-US/docs/Web/API/Event/cancelable) property, indicating whether the event can be canceled.

## Value

A boolean. `true` if the associated event is cancelable, `false` otherwise.

## Examples

### Observing non-cancelable events

The `cancelable` property can be used when observing event-timing entries ({{domxref("PerformanceEventTiming")}}). For example, to log and measure non-cancelable events only.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (!entry.cancelable) {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
