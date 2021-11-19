---
title: PerformanceElementTiming.url
slug: Web/API/PerformanceElementTiming/url
tags:
  - API
  - Property
  - Reference
  - url
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.url
---
{{DefaultAPISidebar("Element Timing")}}

The **`url`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the initial URL of the resource request when the element is an image.

## Syntax

```js
var url = PerformanceElementTiming.url;
```

### Value

A {{domxref("DOMString")}} which is the initial URL of the resources request for images or 0 for text.

## Examples

In this example calling `entry.url` returns `https://example.com/image.jpg`.

```html
<img src="https://example.com/image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.url);
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
