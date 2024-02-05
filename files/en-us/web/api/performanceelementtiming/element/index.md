---
title: "PerformanceElementTiming: element property"
short-title: element
slug: Web/API/PerformanceElementTiming/element
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.element
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`element`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns an {{domxref("Element")}} which is a pointer to the observed element.

## Value

An {{domxref("Element")}}, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the element is a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) element.

## Examples

### Logging the observed element

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. The DOM element that is observed is logged to the console.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
