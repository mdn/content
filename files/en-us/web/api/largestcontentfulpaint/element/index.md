---
title: "LargestContentfulPaint: element property"
short-title: element
slug: Web/API/LargestContentfulPaint/element
page-type: web-api-instance-property
browser-compat: api.LargestContentfulPaint.element
---

{{APIRef("Performance API")}}

The **`element`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns an object representing the {{domxref("Element")}} that is the largest contentful paint.

## Value

An {{domxref("Element")}}.

## Examples

### Logging the largest contentful paint element

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.element);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
