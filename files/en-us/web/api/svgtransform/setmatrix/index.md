---
title: "SVGTransform: setMatrix() method"
short-title: setMatrix()
slug: Web/API/SVGTransform/setMatrix
page-type: web-api-instance-method
browser-compat: api.SVGTransform.setMatrix
---

{{APIRef("SVG")}}

The `setMatrix()` method of the {{domxref("SVGTransform")}} interface sets the transform type to `SVG_TRANSFORM_MATRIX`, with parameter `matrix` defining the new transformation.

Note that the values from the parameter `matrix` are copied, meaning changes to the `matrix` object after calling this method will not affect the transformation.

## Syntax

```js-nolint
setMatrix(matrix)
```

### Parameters

- `matrix`
  - : A live {{domxref("DOMMatrix")}} object defining the new transformation matrix to apply.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attribute or the {{domxref("SVGTransform")}} object is read-only.

## Examples

### Setting a Transformation Matrix

```js
// Get an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Create a DOMMatrix with specific values
const matrix = new DOMMatrix();
matrix.a = 1; // Scale X
matrix.d = 1; // Scale Y
matrix.e = 50; // Translate X
matrix.f = 50; // Translate Y

// Set the transform to the new matrix
transform.setMatrix(matrix);

console.dir(transform.matrix); // Output: SVGMatrix { a: 1, b: 0, c: 0, d: 1, e: 50, f: 50 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("DOMMatrix")}}
