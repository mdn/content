---
title: "PerformanceSoftNavigation: interactionId property"
short-title: interactionId
slug: Web/API/PerformanceSoftNavigation/interactionId
page-type: web-api-instance-property
browser-compat: api.PerformanceSoftNavigation.interactionId
---

{{APIRef("Performance API")}}

The **`interactionId`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns the {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} of the {{domxref("PerformanceEventTiming")}} entry representing the interaction that resulted in the soft navigation.

## Value

An integer matching the {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} of the interaction that resulted in the soft navigation.

## Examples

### Logging the `interactionId` of the soft navigation

This example uses a {{domxref("PerformanceObserver")}} to log new `soft-navigation` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.interactionId);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
