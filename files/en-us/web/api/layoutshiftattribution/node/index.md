---
title: LayoutShiftAttribution.node
slug: Web/API/LayoutShiftAttribution/node
tags:
  - API
  - Property
  - Reference
  - node
  - LayoutShiftAttribution
browser-compat: api.LayoutShiftAttribution.node
---
{{APIRef("Layout Instability API")}}

The **`node`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("node")}} representing the object that has shifted.

## Syntax

```js
let node = LayoutShiftAttribution.node;
```

### Value

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
