---
title: "SVGFEImageElement: x property"
short-title: x
slug: Web/API/SVGFEImageElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFEImageElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("feImage")}} element, which fetches image data from an external source and provides the pixel data as output. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. If the `x` attribute is a percent value, the property value is relative to the width of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feImage = document.querySelector("feImage");
const leftPosition = feImage.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEImageElement.y")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
