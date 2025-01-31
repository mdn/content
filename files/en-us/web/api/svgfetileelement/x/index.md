---
title: "SVGFETileElement: x property"
short-title: x
slug: Web/API/SVGFETileElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFETileElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as an {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("feTitle")}} element, which fills a target rectangle with a repeated, tiled pattern of an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. If the `x` attribute is a percent value, the property value is relative to the width of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feTile = document.querySelector("feTile");
const leftPosition = feTile.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFETileElement.y")}}
