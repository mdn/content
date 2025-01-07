---
title: "SVGFEDiffuseLightingElement: width property"
short-title: width
slug: Web/API/SVGFEDiffuseLightingElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feDiffuseLighting")}} element's {{SVGAttr("width")}} filter primitive attribute. The filter lights an image using the alpha channel as a bump map. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const horizontalSize = feDiffuseLighting.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDiffuseLightingElement.height")}}
- {{domxref("SVGFESpecularLightingElement")}}
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
