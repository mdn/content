---
title: SVGAnimatedLength
slug: Web/API/SVGAnimatedLength
tags:
  - API
  - Reference
  - SVG
browser-compat: api.SVGAnimatedLength
---
{{APIRef("SVG")}}

The `SVGAnimatedLength` interface represents attributes of type [\<length>](/en-US/docs/Web/SVG/Content_type#length) which can be animated.

## Properties

- {{domxref("baseVal")}} {{ReadOnlyInline}}
  - : A {{domxref("SVGLength")}} representing the base value of the given attribute before applying any animations.
- {{domxref("animVal")}} {{ReadOnlyInline}}
  - : If the given attribute or property is being animated, 
    a {{domxref("SVGLength")}} containing the current animated value of the attribute or property. 
    If the given attribute or property is not currently being animated, 
    a {{domxref("SVGLength")}} containing the same value as <code>baseVal</code>.

## Methods

_This interface does not implement any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
