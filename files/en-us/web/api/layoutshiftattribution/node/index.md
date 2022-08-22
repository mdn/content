---
title: LayoutShiftAttribution.node
slug: Web/API/LayoutShiftAttribution/node
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - node
  - LayoutShiftAttribution
  - Experimental
browser-compat: api.LayoutShiftAttribution.node
---
{{APIRef("Layout Instability API")}}{{SeeCompatTable}}

The **`node`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("node")}} representing the object that has shifted.

## Value

A {{domxref("node")}}.

## Examples

The following example prints the `node` of the first item in {{domxref("LayoutShift.sources")}} to the console.

```js
new PerformanceObserver((list) => {
  for (const {sources} of list.getEntries()) {
    if (sources) {
      console.log(sources[0].node);
    }
  }
}).observe({type: 'layout-shift', buffered: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
