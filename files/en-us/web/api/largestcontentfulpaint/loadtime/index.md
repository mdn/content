---
title: "LargestContentfulPaint: loadTime property"
short-title: loadTime
slug: Web/API/LargestContentfulPaint/loadTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LargestContentfulPaint.loadTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`loadTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the time that the element was loaded.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time in milliseconds that the element was loaded.

## Examples

### Logging the loadTime of the largest contentful paint

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.loadTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
