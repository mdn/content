---
title: "InteractionContentfulPaint: presentationTime property"
short-title: presentationTime
slug: Web/API/InteractionContentfulPaint/presentationTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InteractionContentfulPaint.presentationTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`presentationTime`** read-only property of the {{domxref("InteractionContentfulPaint")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the painted pixels were actually drawn on the screen.

The `presentationTime` is optional — some browsers may always return `0` or not expose the value at all. The value is also implementation-dependent — it may differ across browsers that choose to expose it.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("Operators/null", "null")}} if the value is not exposed.

## Examples

This example uses a {{domxref("PerformanceObserver")}} to log new `interaction-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.paintTime,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.presentationTime")}}
