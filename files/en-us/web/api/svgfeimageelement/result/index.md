---
title: "SVGFEImageElement: result property"
short-title: result
slug: Web/API/SVGFEImageElement/result
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.result
---

{{APIRef("SVG")}}

The **`result`** read-only property of the {{domxref("SVGFEImageElement")}} interface describes the assigned name of an SVG filter primitive as a {{domxref("SVGAnimatedString")}}.

It reflects the {{SVGAttr("result")}} attribute of the {{SVGElement("feImage")}} element, which fetches image data from an external source and provides the pixel data as output. The attribute value is a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element.

If no `result` attribute is defined, the filter's `result.baseVal` and `result.animVal` are empty strings, and the output of the `<feImage>` filter will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

## Value

An {{domxref("SVGAnimatedString")}}.

## Example

```js
const feImageElement = document.querySelector("feImage");
const filterName = feImageElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEImageElement.in1")}}
- {{cssxref("custom-ident")}} data type
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
