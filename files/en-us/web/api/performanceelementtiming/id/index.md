---
title: "PerformanceElementTiming: id property"
short-title: id
slug: Web/API/PerformanceElementTiming/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.id
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of the associated element.

## Value

A string.

## Examples

### Using `id`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. It will log `myImage` to the console, this being the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of the image element.

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
      console.log(entry.id);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
