---
title: "SVGFEOffsetElement: width property"
short-title: width
slug: Web/API/SVGFEOffsetElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feOffset")}} element, which offsets the input image relative to its current position. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feOffset = document.querySelector("feOffset");
const horizontalSize = feOffset.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEOffsetElement.height")}}
