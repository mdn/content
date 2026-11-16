---
title: "DOMMatrix: DOMMatrix() constructor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
page-type: web-api-constructor
browser-compat: api.DOMMatrix.DOMMatrix
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMMatrix()`** constructor creates a new {{domxref("DOMMatrix")}} object which represents a 4x4 matrix, suitable for 2D and 3D operations.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(initString)
new DOMMatrix(initArray)
```

### Parameters

- `initString` {{optional_inline}}
  - : A string representing a 2D or 3D matrix in CSS {{cssxref("transform-function/matrix", "matrix()")}} or {{cssxref("transform-function/matrix3d", "matrix3d()")}} format.
- `initArray` {{optional_inline}}
  - : An array containing either 6 or 16 numbers in column-major order. Other array lengths throw a {{jsxref("TypeError")}}.
    - A 6-element array is interpreted as the matrix components `[m11, m12, m21, m22, m41, m42]`, creating a 2D matrix.
    - A 16-element array is interpreted as the matrix components `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]`, creating a 3D matrix.

    If this argument is omitted, an identity matrix is created, i.e., equivalent to `[1, 0, 0, 1, 0, 0]`.

    If this argument is provided as a {{jsxref("Float32Array")}} or {{jsxref("Float64Array")}}, consider using the more performant static methods {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}} or {{domxref("DOMMatrix.fromFloat64Array_static", "DOMMatrix.fromFloat64Array()")}} instead.

### Return value

A new {{domxref("DOMMatrix")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the argument is not a string or an array with a length other than 6 or 16.
- {{jsxref("SyntaxError")}}
  - : Thrown if the string argument is not in a valid CSS {{cssxref("transform-function/matrix", "matrix()")}} or {{cssxref("transform-function/matrix3d", "matrix3d()")}} format.

## Examples

This example creates a DOMMatrix to use as an argument for calling {{domxref("DOMPointReadOnly.matrixTransform()")}}.

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

## See also

- {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}}
- {{domxref("DOMMatrix.fromFloat64Array_static", "DOMMatrix.fromFloat64Array()")}}
- {{domxref("DOMMatrix.fromMatrix_static", "DOMMatrix.fromMatrix()")}}
