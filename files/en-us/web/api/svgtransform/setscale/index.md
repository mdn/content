---
title: "SVGTransform: setScale() method"
short-title: setScale()
slug: Web/API/SVGTransform/setScale
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setScale
---

{{APIRef("SVG")}}

The `setScale()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_SCALE`, with parameters `sx` and `sy` defining the scale amounts.

## Syntax

```js-nolint
setScale(sx, sy)
```

### Parameters

- `sx`
  - : A float defining the scale amount along the X-axis.
- `sy`
  - : A float defining the scale amount along the Y-axis.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attribute or the {{domxref("SVGTransform")}} object is read-only.

## Examples

### Scaling an SVG Element

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set the scale values for the transform
transform.setScale(2, 3);

// Output the scale details
console.log(`Scale X: ${transform.matrix.a}`); // Output: 2
console.log(`Scale Y: ${transform.matrix.d}`); // Output: 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
