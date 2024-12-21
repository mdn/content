---
title: "SVGFEDropShadowElement: height property"
short-title: height
slug: Web/API/SVGFEDropShadowElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feDropShadow = document.querySelector("feDropShadow");
const verticalSize = feDropShadow.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDropShadowElement.width")}}
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} function
- CSS {{cssxref("box-shadow")}} property
- CSS {{cssxref("text-shadow")}} property
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
