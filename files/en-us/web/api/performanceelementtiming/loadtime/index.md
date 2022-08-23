---
title: PerformanceElementTiming.loadTime
slug: Web/API/PerformanceElementTiming/loadTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - loadTime
  - PerformanceElementTimingnull
  - Experimental
browser-compat: api.PerformanceElementTiming.loadTime
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`loadTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface always returns 0 for text. For images it returns the time which is the latest between the time the image resource is loaded and the time it is attached to the element.

## Value

A {{domxref("DOMHighResTimeStamp")}} with the loadTime of the element.

## Examples

In this example calling `entry.loadTime` returns the loadTime of the image element.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.loadTime);
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
