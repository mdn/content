---
title: "InteractionContentfulPaint: paintTime property"
short-title: paintTime
slug: Web/API/InteractionContentfulPaint/paintTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InteractionContentfulPaint.paintTime
---

{{APIRef("Performance API")}}

The **`paintTime`** read-only property of the {{domxref("InteractionContentfulPaint")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the rendering phase ended and the paint phase started.

The `paintTime` is broadly interoperable: The value should be the same across different implementations.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

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
