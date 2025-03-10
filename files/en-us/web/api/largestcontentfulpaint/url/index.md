---
title: "LargestContentfulPaint: url property"
short-title: url
slug: Web/API/LargestContentfulPaint/url
page-type: web-api-instance-property
browser-compat: api.LargestContentfulPaint.url
---

{{APIRef("Performance API")}}

The **`url`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the request URL of the element, if the element is an image.

## Value

A string containing a URL.

## Examples

### Logging the url of the largest contentful paint

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.url);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
