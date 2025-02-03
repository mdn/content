---
title: "SVGFEComponentTransferElement: height property"
short-title: height
slug: Web/API/SVGFEComponentTransferElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEComponentTransferElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEComponentTransferElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feComponentTransfer")}} element's {{SVGAttr("height")}} filter primitive attribute. The `<feComponentTransfer>` filter performs component-wise color and alpha transparency remapping, allowing for brightness, contrast, color balance and threshold adjustments.

The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const verticalSize = feComponentTransfer.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEComponentTransferElement.width")}}
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}
