---
title: "Element: elementTiming property"
short-title: elementTiming
slug: Web/API/Element/elementTiming
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Element.elementTiming
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`elementTiming`** property of the {{domxref("Element")}} interface identifies elements for observation in the {{domxref("PerformanceElementTiming")}} API. The `elementTiming` property reflects the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute.

## Value

A string.

## Examples

### Logging the value of `elementTiming`

In this example, adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute to the {{HTMLElement("img")}} element sets the image to be observed.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

You can get the string value of the `elementtiming` HTML attribute by calling `el.elementTiming`.

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
