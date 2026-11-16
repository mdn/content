---
title: "SVGFEDisplacementMapElement: result property"
short-title: result
slug: Web/API/SVGFEDisplacementMapElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGElement("feDisplacementMap")}} element's {{SVGAttr("result")}} attribute. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feDisplacementMap>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feDisplacementMapElement = document.querySelector("feDisplacementMap");
const filterName = feDisplacementMapElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDisplacementMapElement.in1")}}
- {{cssxref("custom-ident")}} data type
- {{domxref("SVGFEImageElement")}} API and {{SVGElement("feImage")}} element
- {{domxref("SVGFETurbulenceElement")}} API and {{SVGElement("feTurbulence")}} element
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
