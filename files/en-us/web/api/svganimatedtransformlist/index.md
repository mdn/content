---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
page-type: web-api-interface
browser-compat: api.SVGAnimatedTransformList
---

{{APIRef("SVG")}}

The **`SVGAnimatedTransformList`** interface represents attributes which take a list of numbers and which can be animated.

## Instance properties

- {{domxref("SVGAnimatedTransformList.baseVal", "baseVal")}} {{ReadOnlyInline}}

  - : The base value of the given attribute before applying any animations.

- {{domxref("SVGAnimatedTransformList.animVal", "animVal")}} {{ReadOnlyInline}}
  - : The current animated value of the given attribute as read only {{ domxref("SVGTransformList") }}. If the given attribute is not currently being animated, then the {{ domxref("SVGTransformList") }} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

_The `SVGAnimatedTransformList` interface doesn't provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
