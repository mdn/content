---
title: "PerformanceElementTiming: intersectionRect property"
short-title: intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.intersectionRect
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`intersectionRect`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the rectangle of the element within the viewport.

## Value

A {{domxref("DOMRectReadOnly")}} which is the rectangle of the element within the viewport.

For display images this is the display rectangle of the image within the viewport. For text this is the display rectangle of the node in the viewport. This being the smallest rectangle that contains the union of all text nodes that belong to the element.

## Examples

### Logging `intersectionRect`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. Calling `entry.intersectionRect` returns a {{domxref("DOMRectReadOnly")}} object with the display rectangle of the image.

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
      console.log(entry.intersectionRect);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
