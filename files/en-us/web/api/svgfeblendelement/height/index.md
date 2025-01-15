---
title: "SVGFEBlendElement: height property"
short-title: height
slug: Web/API/SVGFEBlendElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEBlendElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feBlend")}} element's {{SVGAttr("height")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

The `<feBlend>` SVG filter blends two input images together using commonly used imaging software {{cssxref("blend-mode", "blending modes")}}.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feBlend = document.querySelector("feBlend");
const verticalSize = feBlend.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEBlendElement.width")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
