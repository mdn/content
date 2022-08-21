---
title: PerformanceElementTiming.intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - intersectionRect
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming.intersectionRect
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`intersectionRect`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the rectangle of the element within the viewport.

## Value

A {{domxref("DOMRectReadOnly")}} which is the rectangle of the element within the viewport.

For display images this is the display rectangle of the image within the viewport. For text this is the display rectangle of the node in the viewport. This being the smallest rectangle that contains the union of all text nodes that belong to the element.

## Examples

In this example calling `entry.intersectionRect` returns a {{domxref("DOMRectReadOnly")}} object with the display rectangle of the image.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.intersectionRect);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note:** This example uses the {{domxref("PerformanceObserver")}} interface to create a list of performance measurement events. In our case we observe the {{domxref("PerformanceEntry.entrytype")}} `element` in order to use the `PerformanceElementTiming` interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
