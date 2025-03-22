---
title: "SVGFESpecularLightingElement: result property"
short-title: result
slug: Web/API/SVGFESpecularLightingElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("feSpecularLighting")}} element, which lights a source graphic using the alpha channel as a bump map. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feSpecularLighting>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feSpecularLightingElement = document.querySelector("feSpecularLighting");
const filterName = feSpecularLightingElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpecularLightingElement.in1")}}
- {{cssxref("custom-ident")}} data type
- {{domxref("SVGFEDiffuseLightingElement")}}
- CSS {{cssxref("lighting-color")}} property
