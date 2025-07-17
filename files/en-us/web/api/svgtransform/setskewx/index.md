---
title: "SVGTransform: setSkewX() method"
short-title: setSkewX()
slug: Web/API/SVGTransform/setSkewX
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setSkewX
---

{{APIRef("SVG")}}

The `setSkewX()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_SKEWX`, with parameter `angle` defining the amount of skew along the X-axis.

## Syntax

```js-nolint
setSkewX(angle)
```

### Parameters

- `angle`
  - : A float defining the amount of skew in degrees.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attribute or the {{domxref("SVGTransform")}} object is read-only.

## Examples

### Skewing an SVG Element Along the X-Axis

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Apply a skew of 30 degrees along the X-axis
transform.setSkewX(30);

// Log the applied transformation angle
console.log(`Skew Angle: ${transform.angle}`); // Output: 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform.angle")}}
