---
title: SVGAnimatedInteger
slug: Web/API/SVGAnimatedInteger
page-type: web-api-interface
browser-compat: api.SVGAnimatedInteger
---

{{APIRef("SVG")}}

The **`SVGAnimatedInteger`** interface is used for attributes of basic type [\<integer>](/en-US/docs/Web/SVG/Guides/Content_type#integer) which can be animated.

## Instance properties

- {{domxref("SVGAnimatedInteger.baseVal", "baseVal")}}
  - : An integer representing the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedInteger.animVal", "animVal")}} {{ReadOnlyInline}}
  - : An integer representing the current animated value of the given attribute. If the given attribute is not currently being animated, then it contains the same value as `baseVal`.

## Instance methods

_The `SVGAnimatedInteger` interface does not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
