---
title: "SVGAnimatedLengthList: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLengthList.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedLengthList")}} interface represents the animated value of an attribute that accepts a list of [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values.

Some SVG attributes, like the [`viewBox](/en-US/docs/Web/SVG/Attribute/viewBox) attribute of the [`<svg>`](/en-US/docs/Web/SVG/Element/svg) element and the [`values`](/en-US/docs/Web/SVG/Attribute/values#fecolormatrix) attribute of the [`feColorMatrix`](/en-US/docs/Web/SVG/Element/feColorMatrix) element, accept a list of length, percentages, or numbers as a value. 
This property provides access to the current animated state of the attribute as a live {{domxref("SVGLengthList")}} object.

## Value

An {{domxref("SVGLengthList")}} object representing the animated value of the attribute. The list contains one or more items corresponding to the individual lengths, percentages, or numbers specified in the attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<length>`](/en-US/docs/Web/SVG/Content_type#length)
- [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage)
- [`<number>`](/en-US/docs/Web/SVG/Content_type#number)
- {{domxref("SVGLengthList")}}
