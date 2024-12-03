---
title: "SVGAnimatedLengthList: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedLengthList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLengthList.baseVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedLengthList.baseVal`** read-only property of the {{domxref("SVGAnimatedLengthList")}} interface represents the base (non-animated) value of an animatable attribute that accepts a list of `<length>`, `<percentage>`, or `<number>` values.

This property provides access to the initial or static value of the associated attribute as a live {{domxref("SVGLengthList")}} object, which can be modified to update the attribute.

## Value

An {{domxref("SVGLengthList")}} object representing the base value of the attribute. The list contains one or more items corresponding to the individual lengths, percentages, or numbers specified in the attribute.

- Changes to the `SVGLengthList` reflected by `baseVal` directly update the attribute on the SVG element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLengthList")}}
- {{domxref("SVGLengthList")}}
