---
title: "LargestContentfulPaint: size property"
short-title: size
slug: Web/API/LargestContentfulPaint/size
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LargestContentfulPaint.size
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`size`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the intrinsic size of the element that is the largest contentful paint.

The `size` of the element is the `width` times `height` of the {{domxref("DOMRectReadOnly","rectangle")}} that this element creates on the screen.

## Value

An integer representing the width times height of the element.

## Examples

### Logging the size of the largest contentful paint element

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.size);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
