---
title: "SVGFEBlendElement: result property"
short-title: result
slug: Web/API/SVGFEBlendElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEBlendElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGElement("feBlend")}} element's {{SVGAttr("result")}} attribute.
The `<feBlend>` SVG filter blends two input images together using commonly used imaging software {{cssxref("blend-mode", "blending modes")}}.

The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feBlend>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feBlendElement = document.querySelector("feBlend");
const filterName = feBlendElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEBlendElement.in1")}}
- {{cssxref("custom-ident")}} data type
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
