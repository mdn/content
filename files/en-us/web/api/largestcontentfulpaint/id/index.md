---
title: "LargestContentfulPaint: id property"
short-title: id
slug: Web/API/LargestContentfulPaint/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LargestContentfulPaint.id
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the ID of the element that is the largest contentful paint.

## Value

A string containing the ID of the element, or the empty string if there is no such ID.

## Examples

### Logging the largest contentful paint element ID

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.id);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
