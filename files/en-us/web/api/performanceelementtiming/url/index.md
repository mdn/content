---
title: "PerformanceElementTiming: url property"
short-title: url
slug: Web/API/PerformanceElementTiming/url
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.url
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the initial URL of the resource request when the element is an image.

## Value

A string which is the initial URL of the resources request for images or `0` for text.

## Examples

### Logging `url`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. Calling `entry.url` returns `https://example.com/image.jpg`.

```html
<img
  src="https://example.com/image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.url);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
