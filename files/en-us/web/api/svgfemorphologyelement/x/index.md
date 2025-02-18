---
title: "SVGFEMorphologyElement: x property"
short-title: x
slug: Web/API/SVGFEMorphologyElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFEMorphologyElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFEMorphologyElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("feMorphology")}} element. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. If the `x` attribute is a percent value, the property value is relative to the width of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feMorphology = document.querySelector("feMorphology");
const leftPosition = feMorphology.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEMorphologyElement.y")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
