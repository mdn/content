---
title: "PerformanceElementTiming: identifier property"
short-title: identifier
slug: Web/API/PerformanceElementTiming/identifier
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.identifier
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`identifier`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute on the element.

## Value

A string.

## Examples

### Using `identifier`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. The value of [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) is `big-image`. Calling `entry.identifier` therefore returns the string `big-image`.

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
