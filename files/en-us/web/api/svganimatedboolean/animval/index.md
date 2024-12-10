---
title: "SVGAnimatedBoolean: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedBoolean.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedBoolean")}} interface represents the current animated value of the associated animateable boolean SVG attribute. If the attribute is not animated, `animVal` is the same as {{domxref("SVGAnimatedBoolean.baseVal")}}.

Some boolean SVG attributes, such as [`preserveAlpha`](/en-US/docs/Web/SVG/Attribute/preserveAlpha), are animateble. In such cases, `SVGAnimatedBoolea.animVal` property is `true` when the attribute value resolves to true. Otherwise, the value is `false`. 

## Value

A boolean; the value of the animatable boolean attribute:

- `true` if the animated value of the attribute is `"true"`.
- `false` if the animated value is `"false"` or not present.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
