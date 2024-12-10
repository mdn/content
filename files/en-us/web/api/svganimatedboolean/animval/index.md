---
title: "SVGAnimatedBoolean: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedBoolean.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedBoolean")}} interface represents the current animated value of the associated SVG attribute. If there are no animations, `animVal` is the same as {{domxref("SVGAnimatedBoolean.baseVal")}}.

## Value

A `boolean` representing the animated value of the reflected attribute:

- `true` if the animated value of the attribute is `"true"`.
- `false` if the animated value is `"false"` or not present.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
