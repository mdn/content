---
title: "InteractionContentfulPaint: interactionId property"
short-title: interactionId
slug: Web/API/InteractionContentfulPaint/interactionId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InteractionContentfulPaint.interactionId
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`interactionId`** read-only property of the {{domxref("InteractionContentfulPaint")}} interface returns the {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} of the {{domxref("PerformanceEventTiming")}} entry representing the interaction that resulted in the paint.

## Value

An integer matching the {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} of the interaction that resulted in the paint.

## Examples

### Logging the `interactionId` of `InteractionContentfulPaint`

This example uses a {{domxref("PerformanceObserver")}} to log new `interaction-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.interactionId,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
