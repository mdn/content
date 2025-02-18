---
title: "SVGFEBlendElement: y property"
short-title: y
slug: Web/API/SVGFEBlendElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFEBlendElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feBlend")}} element's {{SVGAttr("y")}} filter primitive attribute value.
The `<feBlend>` SVG filter blends two input images together using commonly used imaging software {{cssxref("blend-mode", "blending modes")}}.

The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the y-axis. If the `y` attribute is a percent value, the property value is a relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feBlend = document.querySelector("feBlend");
const topPosition = feBlend.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEBlendElement.x")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
