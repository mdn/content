---
title: LayoutShiftAttribution.currentRect
slug: Web/API/LayoutShiftAttribution/currentRect
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - currentRect
  - LayoutShiftAttribution
  - Experimental
browser-compat: api.LayoutShiftAttribution.currentRect
---
{{APIRef("Layout Instability API")}}{{SeeCompatTable}}

The **`currentRect`** read-only property of the {{domxref("LayoutShiftAttribution")}} interface returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element after the shift.

## Value

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
