---
title: "SVGFEGaussianBlurElement: y property"
short-title: y
slug: Web/API/SVGFEGaussianBlurElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("feGaussianBlur")}} element, which blurs an input image. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the filter along the y-axis. If the `y` attribute is a percent value, the property value is relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const topPosition = feGaussianBlur.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEGaussianBlurElement.x")}}
- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("filter-function/blur", "blur()")}} function
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module- CSS {{cssxref("mix-blend-mode")}} property
