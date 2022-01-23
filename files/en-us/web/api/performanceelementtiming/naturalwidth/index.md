---
title: PerformanceElementTiming.naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
tags:
  - API
  - Property
  - Reference
  - naturalWidth
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.naturalWidth
---
{{DefaultAPISidebar("Element Timing")}}

The **`naturalWidth`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the intrinsic width of the image element.

## Syntax

```js
var width = PerformanceElementTiming.naturalWidth;
```

### Value

An unsigned 32-bit integer (unsigned long) which is the intrinsic width of the image if this is applied to an image, 0 for text.

## Examples

In this example the image file has a width of 1000px and a height of 750px. Calling `entry.naturalWidth` returns `1000`, that being the intrinsic width in pixels.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalWidth);
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
