---
title: "SVGTransform: setRotate() method"
short-title: setRotate()
slug: Web/API/SVGTransform/setRotate
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setRotate
---

{{APIRef("SVG")}}

The `setRotate()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_ROTATE`, with parameter `angle` defining the rotation angle and parameters `cx` and `cy` defining the optional center of rotation.

## Syntax

```js-nolint
setRotate(angle, cx, cy)
```

### Parameters

- `angle`
  - : A float defining the rotation angle in degrees.
- `cx` {{optional_inline}}
  - : A float defining the X-coordinate of the center of rotation. Defaults to `0`.
- `cy` {{optional_inline}}
  - : A float defining the Y-coordinate of the center of rotation. Defaults to `0`.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attribute or the {{domxref("SVGTransform")}} object is read-only.

## Examples

### Rotating an SVG Element

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set a rotation of 45 degrees
transform.setRotate(45, 0, 0);

// Output the rotation angle
console.log(`Rotation Angle: ${transform.angle}`); // Output: 45
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform.angle")}}
