---
title: PerformanceElementTiming.renderTime
slug: Web/API/PerformanceElementTiming/renderTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - renderTime
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming.renderTime
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`renderTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the render time of the associated element.

## Value

A {{domxref("DOMHighResTimeStamp")}} with the render time of the element.

For images this will be the **image rendering timestamp**. This is defined as the next paint that occurs after the image becomes fully loaded. If the timing allow check fails (as defined by the [Timing-allow-origin](/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin) header) this will return 0.

For text nodes this will be the **text rendering timestamp**. This is defined as when the element becomes text painted.

## Examples

In this example calling `entry.renderTime` returns the render time of the image element.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.renderTime);
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
