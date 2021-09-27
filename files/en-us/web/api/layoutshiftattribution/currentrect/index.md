---
title: LayoutShiftAttribution.currentRect
slug: Web/API/LayoutShiftAttribution/currentRect
tags:
  - API
  - Property
  - Reference
  - currentRect
  - LayoutShiftAttribution
browser-compat: api.LayoutShiftAttribution.currentRect
---
{{APIRef("Layout Instability API")}}

The **`currentRect`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element before the shift.

## Syntax

```js
let currentRect = LayoutShiftAttribution.currentRect;
```

### Value

A {{domxref("DOMRectReadOnly")}} object.

## Examples

The following example prints the `currentRect` of the first item in {{domxref("LayoutShift.sources")}} to the console.

```js
new PerformanceObserver((list) => {
  for (const {sources} of list.getEntries()) {
    if (sources) {
      console.log(sources[0].currentRect);
    }
  }
}).observe({type: 'layout-shift', buffered: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
