---
title: "SVGFETileElement: width property"
short-title: width
slug: Web/API/SVGFETileElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFETileElement")}} interface describes the horizontal size of an SVG filter primitive as an {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feTitle")}} element, which fills a target rectangle with a repeated, tiled pattern of an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feTile = document.querySelector("feTile");
const horizontalSize = feTile.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFETileElement.height")}}
- {{domxref("SVGPatternElement")}}
