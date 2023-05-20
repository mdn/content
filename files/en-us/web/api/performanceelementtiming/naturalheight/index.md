---
title: "PerformanceElementTiming: naturalHeight property"
short-title: naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.naturalHeight
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`naturalHeight`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the intrinsic height of the image element.

## Value

An unsigned 32-bit integer (unsigned long) which is the intrinsic height of the image if this is applied to an image, `0` for text.

## Examples

### Logging `naturalHeight`

In this example an {{HTMLElement("image")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. The image file has a width of 1000px and a height of 750px. Calling `entry.naturalHeight` returns `750`, that being the intrinsic height in pixels.

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
      console.log(entry.naturalHeight);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
