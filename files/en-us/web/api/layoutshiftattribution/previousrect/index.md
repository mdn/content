---
title: "LayoutShiftAttribution: previousRect property"
short-title: previousRect
slug: Web/API/LayoutShiftAttribution/previousRect
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShiftAttribution.previousRect
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`previousRect`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element before the shift.

## Value

A {{domxref("DOMRectReadOnly")}} object.

## Examples

The following example prints the `previousRect` of the first item in {{domxref("LayoutShift.sources")}} to the console.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].previousRect);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
