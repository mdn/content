---
title: "PerformanceEventTiming: interactionId property"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceEventTiming.interactionId
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The read-only **`interactionId`** property returns an ID that uniquely identifies a user interaction which triggered a series of associated events.

## Description

When a user interacts with a web page, a user interaction (for example a click) usually triggers a sequence of events, such as `pointerdown`, `pointerup`, and `click` events. To measure the latency of this series of events, the events share the same `interactionId`.

An `interactionId` is only computed for the following event types belonging to a user interaction. It is `0` otherwise.

| Event types                                                                                                                                               | User interaction   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointerup_event", "pointerup")}}, {{domxref("Element/click_event", "click")}} | click / tap / drag |
| {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}                                                              | key press          |

## Value

A number.

## Examples

### Using interactionId

The following example collects event duration for all events corresponding to an interaction. The `eventLatencies` map can then be used to find events with maximum duration for a user interaction, for example.

```js
// The key is the interaction ID.
let eventLatencies = {};

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.interactionId > 0) {
      const interactionId = entry.interactionId;
      if (!eventLatencies.has(interactionId)) {
        eventLatencies[interactionId] = [];
      }
      eventLatencies[interactionId].push(entry.duration);
    }
  });
});

observer.observe({ type: "event", buffered: true });

// Log events with maximum event duration for a user interaction
Object.entries(eventLatencies).forEach(([k, v]) => {
  console.log(Math.max(...v));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
