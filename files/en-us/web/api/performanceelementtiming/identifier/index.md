---
title: PerformanceElementTiming.identifier
slug: Web/API/PerformanceElementTiming/identifier
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - identifier
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming.identifier
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`identifier`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute on the element.

## Value

A string.

## Examples

In this example the value of [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) is `big-image`. Calling `entry.identifier` therefore returns the string `big-image`.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
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
