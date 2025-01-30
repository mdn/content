---
title: "SVGFEColorMatrixElement: result property"
short-title: result
slug: Web/API/SVGFEColorMatrixElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGElement("feColorMatrix")}} element's {{SVGAttr("result")}} attribute. The `<feColorMatrix>` filter applies a matrix transformation on the {{glossary("RGB")}} color and {{glossary("alpha")}} values. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feColorMatrix>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feColorMatrixElement = document.querySelector("feColorMatrix");
const filterName = feColorMatrixElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEColorMatrixElement.in1")}}
- {{cssxref("custom-ident")}} data type
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
