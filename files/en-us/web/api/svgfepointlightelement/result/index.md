---
title: "SVGFEPointLightElement: result property"
short-title: result
slug: Web/API/SVGFEPointLightElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEPointLightElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEPointLightElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("fePointLight")}} element., which can be used to define the light source in a point light effect. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<fePointLight>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const fePointLightElement = document.querySelector("fePointLight");
const filterName = fePointLightElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEPointLightElement.in1")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFESpotLightElement")}}
- {{cssxref("custom-ident")}} data type
