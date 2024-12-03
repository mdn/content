---
title: "SVGAnimatedLengthList: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedLengthList.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedLengthList.animVal`** read-only property of the {{domxref("SVGAnimatedLengthList")}} interface represents the animated value of an attribute that accepts a list of `<length>`, `<percentage>`, or `<number>` values.

This property provides access to the current animated state of the attribute as a live {{domxref("SVGLengthList")}} object.

## Value

An {{domxref("SVGLengthList")}} object representing the animated value of the attribute. The list contains one or more items corresponding to the individual lengths, percentages, or numbers specified in the attribute.

- If the attribute is being animated, `animVal` reflects the animation's progress in real time.
- If the attribute is not animated, `animVal` is identical to {{domxref("SVGAnimatedLengthList.baseVal")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLengthList")}}
- {{domxref("SVGLengthList")}}
