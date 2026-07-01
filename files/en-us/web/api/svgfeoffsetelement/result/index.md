---
title: "SVGFEOffsetElement: result property"
short-title: result
slug: Web/API/SVGFEOffsetElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface describes the assigned name of an SVG filter primitive as an {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("feOffset")}} element, which offsets the input image relative to its current position. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feOffset>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feOffsetElement = document.querySelector("feOffset");
const filterName = feOffsetElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEOffsetElement.in1")}}
- {{cssxref("custom-ident")}} data type
