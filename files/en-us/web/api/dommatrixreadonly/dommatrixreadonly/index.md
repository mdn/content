---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() constructor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
page-type: web-api-constructor
browser-compat: api.DOMMatrixReadOnly.DOMMatrixReadOnly
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMMatrixReadOnly()`** constructor creates a new {{domxref("DOMMatrixReadOnly")}} object which represents a 4x4 matrix, suitable for 2D and 3D operations.

## Syntax

```js-nolint
new DOMMatrixReadOnly()
new DOMMatrixReadOnly(initString)
new DOMMatrixReadOnly(initArray)
```

### Parameters

- `initString` {{optional_inline}}
  - : A string representing a 2D or 3D matrix in CSS {{cssxref("transform-function/matrix", "matrix()")}} or {{cssxref("transform-function/matrix3d", "matrix3d()")}} format.
- `initArray` {{optional_inline}}
  - : An array containing either 6 or 16 numbers in column-major order. Other array lengths throw a {{jsxref("TypeError")}}.
    - A 6-element array is interpreted as the matrix components `[m11, m12, m21, m22, m41, m42]`, creating a 2D matrix.
    - A 16-element array is interpreted as the matrix components `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]`, creating a 3D matrix.

    If this argument is omitted, an identity matrix is created, i.e., equivalent to `[1, 0, 0, 1, 0, 0]`.

    If this argument is provided as a {{jsxref("Float32Array")}} or {{jsxref("Float64Array")}}, consider using the more performant static methods {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}} or {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}} instead.

### Return value

A new {{domxref("DOMMatrixReadOnly")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the argument is not a string or an array with a length other than 6 or 16.
- {{jsxref("SyntaxError")}}
  - : Thrown if the string argument is not in a valid CSS {{cssxref("transform-function/matrix", "matrix()")}} or {{cssxref("transform-function/matrix3d", "matrix3d()")}} format.

## Examples

### Creating a DOMMatrixReadOnly from a string

```js
const matrixFromString = new DOMMatrixReadOnly("matrix(1, 0, 0, 1, 10, 20)");
console.log(matrixFromString.toJSON());
// Output: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

### Creating a DOMMatrixReadOnly from an array

```js
const matrixFromArray = new DOMMatrixReadOnly([1, 0, 0, 1, 10, 20]);
console.log(matrixFromArray.toJSON());
// Output: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}}
- {{domxref("DOMMatrixReadOnly.fromMatrix_static", "DOMMatrixReadOnly.fromMatrix()")}}
