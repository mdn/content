---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
page-type: web-api-interface
browser-compat: api.SVGAnimatedAngle
---

{{APIRef("SVG")}}

The **`SVGAnimatedAngle`** interface is used for attributes of basic type [\<angle>](/en-US/docs/Web/SVG/Guides/Content_type#angle) which can be animated.

## Instance properties

- {{domxref("SVGAnimatedAngle.baseVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAngle")}} representing the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedAngle.animVal")}} {{ReadOnlyInline}}
  - : A read only {{domxref("SVGAngle")}} representing the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{domxref("SVGAngle")}} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

_The `SVGAnimatedAngle` interface does not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
