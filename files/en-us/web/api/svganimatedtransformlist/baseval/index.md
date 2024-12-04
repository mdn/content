---
title: SVGAnimatedTransformList.baseVal Property
short-title: baseVal
slug: Web/API/SVGAnimatedTransformList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedTransformList.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedTransformList")}} interface represents the non-animated value of the `transform` attribute of an SVG element.

This property provides access to the static value of the `transform` attribute, as set by the `transform` or similar presentation attributes (such as `gradientTransform` or `patternTransform`) of an SVG element.

## Value

An {{domxref("SVGTransformList")}} object that represents the current, non-animated value of the `transform` attribute.

## Examples

```js
// Get the rectangle element
const rect = document.getElementById("myRect");

// Access the non-animated transform list of the element
const baseTransforms = rect.transform.baseVal;

// Log the base transforms to the console
console.log(baseTransforms);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedTransformList.animVal")}}
- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
