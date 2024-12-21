---
title: "SVGFEFloodElement: x property"
short-title: x
slug: Web/API/SVGFEFloodElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFEFloodElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFEFloodElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("feFlood")}} element, which fills an SVG filter subregion with the color and opacity defined by {{SVGAttr("flood-color")}} and {{SVGAttr("flood-opacity")}}. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. If the `x` attribute is a percent value, the property value is relative to the width of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feFlood = document.querySelector("feFlood");
const leftPosition = feFlood.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEFloodElement.y")}}- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
