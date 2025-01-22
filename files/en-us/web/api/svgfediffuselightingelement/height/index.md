---
title: "SVGFEDiffuseLightingElement: height property"
short-title: height
slug: Web/API/SVGFEDiffuseLightingElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feDiffuseLighting")}} element's {{SVGAttr("height")}} filter primitive attribute. The filter lights an image using the alpha channel as a bump map. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const verticalSize = feDiffuseLighting.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDiffuseLightingElement.width")}}
- {{domxref("SVGFESpecularLightingElement")}}
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
