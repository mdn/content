---
title: "PerformanceEventTiming: target property"
short-title: target
slug: Web/API/PerformanceEventTiming/target
page-type: web-api-instance-property
browser-compat: api.PerformanceEventTiming.target
---

{{APIRef("Performance API")}}

The read-only **`target`** property returns the associated event's last [`target`](/en-US/docs/Web/API/Event/target) which is the node onto which the event was last dispatched.

## Value

A {{domxref("Node")}} onto which the event was last dispatched.

Or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the `Node` is disconnected from the document's DOM or is in the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

## Examples

### Observing events with a specific last target

The `target` property can be used when observing event-timing entries ({{domxref("PerformanceEventTiming")}}). For example, to log and measure events for a given last target only.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.target && entry.target.id === "myNode") {
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
