---
title: "SVGFETileElement: result property"
short-title: result
slug: Web/API/SVGFETileElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFETileElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFETileElement")}} interface describes the assigned name of an SVG filter primitive as an {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("feTitle")}} element, which fills a target rectangle with a repeated, tiled pattern of an input image. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feTile>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feTileElement = document.querySelector("feTile");
const filterName = feTileElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFETileElement.in1")}}
- {{domxref("SVGPatternElement")}}
- {{cssxref("custom-ident")}} data type
