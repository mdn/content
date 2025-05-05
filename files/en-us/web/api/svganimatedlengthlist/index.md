---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
page-type: web-api-interface
browser-compat: api.SVGAnimatedLengthList
---

{{APIRef("SVG")}}

The **`SVGAnimatedLengthList`** interface is used for attributes of type {{domxref("SVGLengthList")}} which can be animated.

## Instance properties

- {{domxref("SVGAnimatedLengthList.baseVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGLengthList")}} that represents the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedLengthList.animVal")}} {{ReadOnlyInline}}
  - : A read only {{domxref("SVGLengthList")}} that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{domxref("SVGLengthList")}} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

_The `SVGAnimatedLengthList` interface does not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
