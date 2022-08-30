---
title: PerformanceElementTiming.url
slug: Web/API/PerformanceElementTiming/url
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - url
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming.url
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the initial URL of the resource request when the element is an image.

## Value

A string which is the initial URL of the resources request for images or 0 for text.

## Examples

In this example calling `entry.url` returns `https://example.com/image.jpg`.

```html
<img src="https://example.com/image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
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
