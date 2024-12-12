---
title: "SVGAnimatedLengthList: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLengthList.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedLengthList")}} interface represents the animated value of an attribute that accepts a list of [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values.

Some SVG attributes, like the `x`, `y`, `dx`, and `dy` attributes of the [`<tspan>`](/en-US/docs/Web/SVG/Element/tspan) and [`<text>`](/en-US/docs/Web/SVG/Element/text) elements, accept a list of length, percentages, or numbers as a value. This property provides access to the current animated state of the attribute as a live {{domxref("SVGLengthList")}} object.

## Value

An {{domxref("SVGLengthList")}} object representing the animated value of the attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<length>`](/en-US/docs/Web/SVG/Content_type#length)
- [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage)
- [`<number>`](/en-US/docs/Web/SVG/Content_type#number)
- {{domxref("SVGLengthList")}}
