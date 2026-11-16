---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
page-type: web-api-interface
browser-compat: api.SVGAnimatedPreserveAspectRatio
---

{{APIRef("SVG")}}

The **`SVGAnimatedPreserveAspectRatio`** interface represents attributes of type {{ domxref("SVGPreserveAspectRatio") }} which can be animated.

## Instance properties

- {{domxref("SVGAnimatedPreserveAspectRatio.baseVal", "baseVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGPreserveAspectRatio")}} that represents the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedPreserveAspectRatio.animVal", "animVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGPreserveAspectRatio")}} that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{ domxref("SVGPreserveAspectRatio") }} will have the same contents as `baseVal`. The object referenced by `animVal` is always distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

The `SVGAnimatedPreserveAspectRatio` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
