---
title: "LargestContentfulPaint: renderTime property"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
page-type: web-api-instance-property
browser-compat: api.LargestContentfulPaint.renderTime
---

{{APIRef("Performance API")}}

The **`renderTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface represents the time that the element was rendered to the screen.

## Value

The `renderTime` property can have the following values:

- A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time in milliseconds that the element was rendered to the screen.
- `0` or a coarsened {{domxref("DOMHighResTimeStamp","timestamp")}} if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

### Cross-origin image render time

For security reasons, the value of the `renderTime` property was originally `0` if the resource is a cross-origin request.

Browsers [may now expose a slightly coarsened render time](https://github.com/w3c/paint-timing/issues/104) in these situations. Check for [browser support](#browser_compatibility).

To expose more accurate cross-origin render-time information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see an accurate `renderTime`, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

### Use `startTime` over `renderTime`

Regardless of the accuracy of the `renderTime`, developers should use {{domxref("PerformanceEntry.startTime", "startTime")}} over `renderTime` as the LCP time. This returns the value of the entry's `renderTime` if it is not `0`, and otherwise the value of this entry's {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} so removes the need to check for 0 values for non-supporting browsers.

## Examples

### Logging the renderTime of the largest contentful paint

This example uses a {{domxref("PerformanceObserver")}} notifying of new `largest-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
