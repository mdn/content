---
title: "SVGAnimatedPreserveAspectRatio: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedPreserveAspectRatio.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedPreserveAspectRatio")}} interface represents the current animated value of the `preserveAspectRatio` attribute of an SVG element.

## Value

An {{domxref("SVGPreserveAspectRatio")}} object that represents the animated value of the `preserveAspectRatio` attribute.

- If the attribute is animated, `animVal` reflects the current animation state.
- If the attribute is not animated, `animVal` will be identical to `baseVal`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGElement")}}
