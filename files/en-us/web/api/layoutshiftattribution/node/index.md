---
title: "LayoutShiftAttribution: node property"
short-title: node
slug: Web/API/LayoutShiftAttribution/node
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShiftAttribution.node
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`node`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("Node")}} representing the object that has shifted.

## Value

A {{domxref("Node")}}.

## Examples

The following example prints the `node` of the first item in {{domxref("LayoutShift.sources")}} to the console.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].node);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
