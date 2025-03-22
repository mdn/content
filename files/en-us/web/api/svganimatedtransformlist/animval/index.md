---
title: SVGAnimatedTransformList.animVal Property
short-title: animVal
slug: Web/API/SVGAnimatedTransformList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedTransformList.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedTransformList")}} interface represents the animated value of the `transform` attribute of an SVG element.

This property reflects the SVG element's {{SVGAttr("transform")}}, the {{SVGElement("linearGradient")}} or {{SVGElement("radialGradient")}} element's {{SVGAttr("gradientTransform")}} attribute, or the {{SVGElement("pattern")}} element's {{SVGAttr("patternTransform")}} attribute as a readonly {{ domxref("SVGTransformList") }}, providing access to the dynamically updated {{ domxref("SVGTransform") }} for each transform function during an animation. If no animation is active, this property will return the same value as `baseVal`.

## Value

An {{domxref("SVGTransformList")}} object that reflects the current animated value of the `transform` attribute.

## Examples

```js
// Get the rectangle element
const rect = document.querySelector("rect");

// Access the animated transform list (if any)
const animTransforms = rect.transform.animVal;

// Log the animated transforms to the console
console.dir(animTransforms);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
