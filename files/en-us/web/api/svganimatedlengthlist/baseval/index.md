---
title: "SVGAnimatedLengthList: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedLengthList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLengthList.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedLengthList")}} interface represents the base (non-animated) value of an animatable attribute that accepts a list of [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values.

Some SVG attributes, like the `x`, `y`, `dx`, and `dy` attribute of the [`<tspan>`](/en-US/docs/Web/SVG/Element/tspan) and [`<text>`](/en-US/docs/Web/SVG/Element/text) element, accept a list of length, percentages, or numbers as a value. This property provides access to the current animated state of the attribute as a live {{domxref("SVGLengthList")}} object.

## Value

An {{domxref("SVGLengthList")}} object representing the base value of the attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<length>`](/en-US/docs/Web/SVG/Content_type#length)
- [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage)
- [`<number>`](/en-US/docs/Web/SVG/Content_type#number)
- {{domxref("SVGLengthList")}}
