---
title: "SVGFEBlendElement: width property"
short-title: width
slug: Web/API/SVGFEBlendElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEBlendElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feBlend")}} element's {{SVGAttr("width")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

The `<feBlend>` SVG filter blends two input images together using commonly used imaging software {{cssxref("blend-mode", "blending modes")}}.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feBlend = document.querySelector("feBlend");
const horizontalSize = feBlend.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEBlendElement.height")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
