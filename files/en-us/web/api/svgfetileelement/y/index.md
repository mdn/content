---
title: "SVGFETileElement: y property"
short-title: y
slug: Web/API/SVGFETileElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFETileElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as an {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("feTitle")}} element, which fills a target rectangle with a repeated, tiled pattern of an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the filter along the y-axis. If the `y` attribute is a percent value, the property value is a relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feTile = document.querySelector("feTile");
const topPosition = feTile.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFETileElement.x")}}
- {{domxref("SVGPatternElement")}}
