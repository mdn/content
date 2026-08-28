---
title: "PerformanceSoftNavigation: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceSoftNavigation/presentationTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceSoftNavigation.presentationTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the painted pixels were actually drawn on the screen.

The `presentationTime` is optional — some browsers may always return `0` or not expose the value at all. The value is also implementation-dependent — it may differ across browsers that choose to expose it.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("operators/null", "null")}} if the value is not exposed.

## Examples

This example uses a {{domxref("PerformanceObserver")}} to log new `soft-navigation` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.paintTime);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.presentationTime")}}
