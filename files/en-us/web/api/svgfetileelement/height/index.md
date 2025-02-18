---
title: "SVGFETileElement: height property"
short-title: height
slug: Web/API/SVGFETileElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFETileElement")}} interface describes the vertical size of an SVG filter primitive as an {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feTitle")}} element, which fills a target rectangle with a repeated, tiled pattern of an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feTile = document.querySelector("feTile");
const verticalSize = feTile.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFETileElement.width")}}
- {{domxref("SVGPatternElement")}}
