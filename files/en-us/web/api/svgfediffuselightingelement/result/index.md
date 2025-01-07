---
title: "SVGFEDiffuseLightingElement: result property"
short-title: result
slug: Web/API/SVGFEDiffuseLightingElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGElement("feDiffuseLighting")}} element's {{SVGAttr("result")}} attribute. The filter lights an image using the alpha channel as a bump map. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feDiffuseLighting>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feDiffuseLightingElement = document.querySelector("feDiffuseLighting");
const filterName = feDiffuseLightingElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDiffuseLightingElement.in1")}}
- {{cssxref("custom-ident")}} data type
- {{domxref("SVGFESpecularLightingElement")}}
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
