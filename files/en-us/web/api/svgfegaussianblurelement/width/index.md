---
title: "SVGFEGaussianBlurElement: width property"
short-title: width
slug: Web/API/SVGFEGaussianBlurElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feGaussianBlur")}} element, which blurs an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const horizontalSize = feGaussianBlur.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEGaussianBlurElement.height")}}
- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("filter-function/blur", "blur()")}} function
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module- CSS {{cssxref("mix-blend-mode")}} property
