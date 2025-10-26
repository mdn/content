---
title: "DOMMatrixReadOnly: fromFloat32Array() static method"
short-title: fromFloat32Array()
slug: Web/API/DOMMatrixReadOnly/fromFloat32Array_static
page-type: web-api-static-method
browser-compat: api.DOMMatrixReadOnly.fromFloat32Array_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromFloat32Array()`** static method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new mutable {{domxref("DOMMatrix")}} object given an array of single-precision (32-bit) floating-point values.

If the array has six values, the result is a 2D matrix; if the array has 16 values, the result is a 3D matrix.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromFloat32Array(array)
```

### Parameters

- `array`
  - : A {{jsxref("Float32Array")}}.

### Return value

A {{domxref("DOMMatrix")}} object.

## Examples

### Creating a 2D matrix from a Float32Array

This example creates a 2D matrix from a 6-element `Float32Array`.

```js
const float32Array = new Float32Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrixReadOnly.fromFloat32Array(float32Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// Output: true
```

### Creating a 3D matrix from a Float32Array

This example creates a 3D matrix from a 16-element `Float32Array`.

```js
const float32Array = new Float32Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrixReadOnly.fromFloat32Array(float32Array);

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

- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
