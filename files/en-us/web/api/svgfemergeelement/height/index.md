---
title: "SVGFEMergeElement: height property"
short-title: height
slug: Web/API/SVGFEMergeElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEMergeElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEMergeElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feMerge")}} element. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feMerge = document.querySelector("feMerge");
const verticalSize = feMerge.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEMergeElement.width")}}
