---
title: SVGAnimatedTransformList.baseVal Property
short-title: baseVal
slug: Web/API/SVGAnimatedTransformList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedTransformList.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedTransformList")}} interface represents the non-animated value of the `transform` attribute of an SVG element.

This property reflects the SVG element's {{SVGAttr("transform")}}, the {{SVGElement("linearGradient")}} or {{SVGElement("radialGradient")}} element's {{SVGAttr("gradientTransform")}} attribute, or the {{SVGElement("pattern")}} element's {{SVGAttr("patternTransform")}} attribute value as a readonly {{ domxref("SVGTransformList") }}, providing access to a static {{ domxref("SVGTransform") }} for each transform function set on the SVG element.

## Value

An {{domxref("SVGTransformList")}} object that represents the current, non-animated value of the `transform` attribute.

## Examples

```js
// Get the rectangle element
const rect = document.querySelector("rect");

// Access the non-animated transform list of the element
const baseTransforms = rect.transform.baseVal;

// Log the base transforms to the console
console.dir(baseTransforms);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
