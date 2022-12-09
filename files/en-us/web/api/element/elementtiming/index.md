---
title: Element.elementTiming
slug: Web/API/Element/elementTiming
page-type: web-api-instance-property
browser-compat: api.Element.elementTiming
---

{{DefaultAPISidebar("DOM")}}

The **`elementTiming`** property of the {{domxref("Element")}} interface reflects the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute which marks an element for observation in the {{domxref("PerformanceElementTiming")}} API.

## Value

A string.

## Examples

### Logging the value of `elementTiming`

In this example an {{HTMLElement("image")}} element is set to being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

You can get the string provided to the `elementtiming` HTML attribute by calling `el.elementTiming`.

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

For a more complete example on how to use the Element Timing API, see {{domxref("PerformanceElementTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceElementTiming")}}
- [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) HTML attribute
