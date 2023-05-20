---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
page-type: web-api-interface
browser-compat: api.SVGAnimatedString
---

{{APIRef("SVG")}}

The **`SVGAnimatedString`** interface represents string attributes which can be animated from each SVG declaration. You need to create SVG attribute before doing anything else, everything should be declared inside this.

## Instance properties

- {{domxref("SVGAnimatedString.animVal")}} {{ReadOnlyInline}}
  - : This is a string representing the animation value. If the given attribute or property is being animated it contains the current animated value of the attribute or property. If the given attribute or property is not currently being animated, it contains the same value as baseVal.
- {{domxref("SVGAnimatedString.baseVal")}}
  - : This is a string representing the base value. The base value of the given attribute before applying any animations. Setter throws DOMException.

## Instance methods

_The `SVGAnimatedString` interface do not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
