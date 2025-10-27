---
title: "DOMMatrix: fromFloat64Array() static method"
short-title: fromFloat64Array()
slug: Web/API/DOMMatrix/fromFloat64Array_static
page-type: web-api-static-method
browser-compat: api.DOMMatrix.fromFloat64Array_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromFloat64Array()`** static method of the {{domxref("DOMMatrix")}} interface creates a new {{domxref("DOMMatrix")}} object given an array of double-precision (64-bit) floating-point values.

If the array has 6 values, the result is a 2D matrix; if the array has 16 values, the result is a 3D matrix. Otherwise, a {{jsxref("TypeError")}} exception is thrown.

## Syntax

```js-nolint
DOMMatrix.fromFloat64Array(array)
```

### Parameters

- `array`
  - : A {{jsxref("Float64Array")}} with 6 or 16 elements in column-major order.

### Return value

A {{domxref("DOMMatrix")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the length of the `array` parameter is not 6 or 16.

## Examples

### Creating a 2D matrix from a Float64Array

This example creates a 2D matrix from a 6-element `Float64Array`.

```js
const float64Array = new Float64Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrix.fromFloat64Array(float64Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// Output: true

console.log(matrix2D.e, matrix2D.f);
// Output: 10 20
```

### Creating a 3D matrix from a Float64Array

This example creates a 3D matrix from a 16-element `Float64Array`.

```js
const float64Array = new Float64Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrix.fromFloat64Array(float64Array);

console.log(matrix3D.is2D);
// Output: false

console.log(matrix3D.m41, matrix3D.m42, matrix3D.m43);
// Output: 10 20 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix/DOMMatrix", "DOMMatrix()")}}
- {{domxref("DOMMatrix.toFloat32Array()")}}
- {{domxref("DOMMatrix.toFloat64Array()")}}
- {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}}
- {{domxref("DOMMatrix.fromMatrix_static", "DOMMatrix.fromMatrix()")}}
