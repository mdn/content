---
title: "SVGFESpecularLightingElement: y property"
short-title: y
slug: Web/API/SVGFESpecularLightingElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("feSpecularLighting")}} element, which lights a source graphic using the alpha channel as a bump map. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the filter along the y-axis. If the `y` attribute is a percent value, the property value is a relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const topPosition = feSpecularLighting.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpecularLightingElement.x")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
