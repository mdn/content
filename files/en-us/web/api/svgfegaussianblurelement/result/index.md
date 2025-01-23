---
title: "SVGFEGaussianBlurElement: result property"
short-title: result
slug: Web/API/SVGFEGaussianBlurElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("feGaussianBlur")}} element, which blurs an input image. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feGaussianBlur>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feGaussianBlurElement = document.querySelector("feGaussianBlur");
const filterName = feGaussianBlurElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEGaussianBlurElement.in1")}}
- {{cssxref("custom-ident")}} data type
- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("filter-function/blur", "blur()")}} function
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module- CSS {{cssxref("mix-blend-mode")}} property
