---
title: SVGAnimatedNumber
slug: Web/API/SVGAnimatedNumber
page-type: web-api-interface
browser-compat: api.SVGAnimatedNumber
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumber`** interface represents attributes of type [\<number>](/en-US/docs/Web/SVG/Guides/Content_type#number) which can be animated.

## Instance properties

- {{domxref("SVGAnimatedNumber.baseVal", "baseVal")}}
  - : An `SVGAnimatedNumber` representing the base value as a floating point value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedNumber.animVal", "animVal")}} {{ReadOnlyInline}}
  - : If the given attribute or property is being animated, an `SVGAnimatedNumber` containing the current animated value of the attribute or property. If the given attribute or property is not currently being animated, an `SVGAnimatedNumber` containing the same value as `baseVal`.

## Instance methods

The `SVGAnimatedNumber` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
