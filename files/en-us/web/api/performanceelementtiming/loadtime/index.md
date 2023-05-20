---
title: "PerformanceElementTiming: loadTime property"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.loadTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`loadTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface always returns `0` for text. For images it returns the time which is the latest between the time the image resource is loaded and the time it is attached to the element.

## Value

A {{domxref("DOMHighResTimeStamp")}} with the `loadTime` of the element. Always `0` for text.

## Examples

### Logging `loadTime`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"`. The `buffered` flag is used to access data from before the observer was created. Calling `entry.loadTime` returns the loadTime of the image element.

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
      console.log(entry.loadTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
