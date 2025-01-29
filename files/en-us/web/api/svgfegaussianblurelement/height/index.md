---
title: "SVGFEGaussianBlurElement: height property"
short-title: height
slug: Web/API/SVGFEGaussianBlurElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feGaussianBlur")}} element, which blurs an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const verticalSize = feGaussianBlur.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEGaussianBlurElement.width")}}
- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("filter-function/blur", "blur()")}} function
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module- CSS {{cssxref("mix-blend-mode")}} property
