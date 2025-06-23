---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
page-type: web-api-interface
browser-compat: api.SVGAnimatedNumberList
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumberList`** interface represents a list of attributes of type [\<number>](/en-US/docs/Web/SVG/Guides/Content_type#number) which can be animated.

## Instance properties

- {{domxref("SVGAnimatedNumberList.baseVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGNumberList")}} that represents the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedNumberList.animVal")}} {{ReadOnlyInline}}
  - : A read only {{ domxref("SVGNumberList") }} that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{ domxref("SVGNumberList") }} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

The `SVGAnimatedNumberList` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
