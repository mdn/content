---
title: "PerformanceElementTiming: naturalWidth property"
short-title: naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.naturalWidth
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`naturalWidth`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the intrinsic width of the image element.

## Value

An unsigned 32-bit integer (unsigned long) which is the intrinsic width of the image if this is applied to an image, `0` for text.

## Examples

### Logging `naturalWidth`

In this example an {{HTMLElement("image")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. The image file has a width of 1000px and a height of 750px. Calling `entry.naturalWidth` returns `1000`, that being the intrinsic width in pixels.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalWidth);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
