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
  - : A string representing the animated value of the reflected attribute value.
    If the given attribute is not currently being animated, it contains the same value as `baseVal`.
- {{domxref("SVGAnimatedString.baseVal")}}
  - : A string representing the base value of the reflected attribute before applying any animations.

## Instance methods

_The `SVGAnimatedString` interface do not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGScriptElement.href")}}, an object of this type.
