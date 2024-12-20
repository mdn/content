---
title: "SVGFEComponentTransferElement: width property"
short-title: width
slug: Web/API/SVGFEComponentTransferElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEComponentTransferElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEComponentTransferElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feComponentTransfer")}} element's {{SVGAttr("width")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const horizontalSize = feComponentTransfer.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEComponentTransferElement.height")}}
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}} elements
