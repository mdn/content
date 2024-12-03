---
title: SVGAnimatedTransformList.animVal Property
short-title: animVal
slug: Web/API/SVGAnimatedTransformList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedTransformList.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedTransformList.animVal`** read-only property of the {{domxref("SVGAnimatedTransformList")}} interface represents the animated value of the `transform` attribute of an SVG element.

This property provides access to the current value of the `transform` attribute during an animation. If the transform is not currently being animated, `animVal` will return the same value as `baseVal`.

## Value

An {{domxref("SVGTransformList")}} object that reflects the current animated value of the `transform` attribute.

## Examples

```js
// Get the rectangle element
const rect = document.getElementById("myRect");

// Access the animated transform list (if any)
const animTransforms = rect.transform.animVal;

// Log the animated transforms to the console
console.log(animTransforms);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedTransformList.baseVal")}}
- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
