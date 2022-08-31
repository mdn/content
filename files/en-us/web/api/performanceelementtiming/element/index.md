---
title: PerformanceElementTiming.element
slug: Web/API/PerformanceElementTiming/element
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - element
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming.element
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`element`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns an {{domxref("Element")}} which is a literal representation of the associated element.

## Value

An {{domxref("Element")}}.

## Examples

In this example calling `entry.element` will log to the console
`<img src="image.jpg" alt="a nice image" elementtiming="big-image">`.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
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
