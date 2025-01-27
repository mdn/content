---
title: "SVGFEDropShadowElement: width property"
short-title: width
slug: Web/API/SVGFEDropShadowElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feDropShadow = document.querySelector("feDropShadow");
const horizontalSize = feDropShadow.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDropShadowElement.height")}}
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} function
- CSS {{cssxref("box-shadow")}} property
- CSS {{cssxref("text-shadow")}} property
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
