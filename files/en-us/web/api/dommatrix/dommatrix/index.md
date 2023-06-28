---
title: "DOMMatrix: DOMMatrix() constructor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
page-type: web-api-constructor
browser-compat: api.DOMMatrix.DOMMatrix
---

{{APIRef("Geometry Interfaces")}}

The **`DOMMatrix`** constructor creates a new
{{domxref("DOMMatrix")}} object which represents 4x4 matrices, suitable for 2D and 3D
operations.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(init)
```

### Parameters

- `init` {{optional_inline}}

  - : An array of numbers specifying the matrix you want to create, or a CSS transform string.

    In case an array of numbers is passed, the behavior depends on the length of the array:

    - for a 6-element array of components in the form `[a, b, c, d, e, f]`, a 2D matrix is created, initialized with the provided components.
    - for a 16-element array of components (in the column-major order) in the form `[m11, m12, m13, …, m42, m43, m44]`, a 3D matrix is created, initialized with the provided components.

## Examples

This example creates a DOMMatrix to use as an argument for calling
{{domxref("Point.matrixTransform()")}}.

```js
const point = new DOMPoint(5, 4);
const scaleX = 2;
const scaleY = 3;
const translateX = 12;
const translateY = 8;
const angle = Math.PI / 2;
const matrix = new DOMMatrix([
  Math.cos(angle) * scaleX,
  Math.sin(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY,
]);
const transformedPoint = point.matrixTransform(matrix);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
