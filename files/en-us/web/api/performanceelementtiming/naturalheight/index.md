---
title: PerformanceElementTiming.naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
tags:
  - API
  - Property
  - Reference
  - naturalHeight
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.naturalHeight
---
{{DefaultAPISidebar("Element Timing")}}

The **`naturalHeight`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the intrinsic height of the image element.

## Syntax

```js
var height = PerformanceElementTiming.naturalHeight;
```

### Value

An unsigned 32-bit integer (unsigned long) which is the intrinsic height of the image if this is applied to an image, 0 for text.

## Examples

In this example the image file has a width of 1000px and a height of 750px. Calling `entry.naturalHeight` returns `750`, that being the intrinsic height in pixels.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalHeight);
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
