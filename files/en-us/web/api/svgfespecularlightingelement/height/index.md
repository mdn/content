---
title: "SVGFESpecularLightingElement: height property"
short-title: height
slug: Web/API/SVGFESpecularLightingElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feSpecularLighting")}} element, which lights a source graphic using the alpha channel as a bump map. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const verticalSize = feSpecularLighting.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpecularLightingElement.width")}}
- {{domxref("SVGFEDiffuseLightingElement")}}
- CSS {{cssxref("lighting-color")}} property
