---
title: "SVGFESpecularLightingElement: width property"
short-title: width
slug: Web/API/SVGFESpecularLightingElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feSpecularLighting")}} element, which lights a source graphic using the alpha channel as a bump map. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const horizontalSize = feSpecularLighting.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpecularLightingElement.height")}}
- {{domxref("SVGFEDiffuseLightingElement")}}
- CSS {{cssxref("lighting-color")}} property
