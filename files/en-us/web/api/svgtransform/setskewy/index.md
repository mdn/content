---
title: "SVGTransform: setSkewY() method"
short-title: setSkewY()
slug: Web/API/SVGTransform/setSkewY
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setSkewY
---

{{APIRef("SVG")}}

The `setSkewY()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_SKEWY`, with parameter `angle` defining the amount of skew along the Y-axis.

## Syntax

```js-nolint
setSkewY(angle)
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

### Skewing an SVG Element Along the Y-Axis

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Apply a skew of 30 degrees along the Y-axis
transform.setSkewY(30);

// Log the applied transformation angle
console.log(`Skew Angle: ${transform.angle}`); // Output: 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform.angle")}}
