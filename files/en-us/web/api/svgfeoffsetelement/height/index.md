---
title: "SVGFEOffsetElement: height property"
short-title: height
slug: Web/API/SVGFEOffsetElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface describes the vertical size of an SVG filter primitive as an {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feOffset")}} element, which offsets the input image relative to its current position. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feOffset = document.querySelector("feOffset");
const verticalSize = feOffset.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEOffsetElement.width")}}
