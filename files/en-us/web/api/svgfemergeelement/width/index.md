---
title: "SVGFEMergeElement: width property"
short-title: width
slug: Web/API/SVGFEMergeElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEMergeElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEMergeElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feMerge")}} element. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feMerge = document.querySelector("feMerge");
const horizontalSize = feMerge.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEMergeElement.height")}}
