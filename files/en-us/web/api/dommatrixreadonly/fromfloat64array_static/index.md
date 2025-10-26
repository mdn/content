---
title: "DOMMatrixReadOnly: fromFloat64Array() static method"
short-title: fromFloat64Array()
slug: Web/API/DOMMatrixReadOnly/fromFloat64Array_static
page-type: web-api-static-method
browser-compat: api.DOMMatrixReadOnly.fromFloat64Array_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromFloat64Array()`** static method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new {{domxref("DOMMatrixReadOnly")}} object given an array of double-precision (64-bit) floating-point values.

If the array has 6 values, the result is a 2D matrix; if the array has 16 values, the result is a 3D matrix. Otherwise, a {{jsxref("TypeError")}} exception is thrown.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromFloat64Array(array)
```

### Parameters

- `array`
  - : A {{jsxref("Float64Array")}} with 6 or 16 elements in column-major order.

### Return value

A {{domxref("DOMMatrixReadonly")}} object.

## Examples

### Creating a 2D matrix from a Float64Array

This example creates a 2D matrix from a 6-element `Float64Array`.

```js
const float64Array = new Float64Array([1, 0, 0, 1, 100, 200]);
const matrix2D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 100, 200)

console.log(matrix2D.is2D);
// Output: true

console.log(matrix2D.e, matrix2D.f);
// Output: 100 200
```

### Creating a 3D matrix from a Float64Array

This example creates a 3D matrix from a 16-element `Float64Array`.

```js
const float64Array = new Float64Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 75, 100, 1,
]);
const matrix3D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

console.log(matrix3D.is2D);
// Output: false

console.log(matrix3D.m41, matrix3D.m42, matrix3D.m43);
// Output: 50 75 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
