---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
page-type: web-api-interface
browser-compat: api.SVGAnimatedRect
---

{{APIRef("SVG")}}

The **`SVGAnimatedRect`** interface represents an {{domxref("SVGRect")}} attribute that can be animated.

## Instance properties

- {{domxref("SVGAnimatedRect.baseVal", "baseVal")}}
  - : The base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedRect.animVal", "animVal")}} {{ReadOnlyInline}}
  - : The current animated value of the given attribute as a read-only {{domxref("SVGRect")}}. If the given attribute is not currently being animated, then the {{domxref("SVGRect")}} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

_The `SVGAnimatedRect` interface does not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
