---
title: "DOMMatrixReadOnly: fromMatrix() static method"
short-title: fromMatrix()
slug: Web/API/DOMMatrixReadOnly/fromMatrix_static
page-type: web-api-static-method
browser-compat: api.DOMMatrixReadOnly.fromMatrix_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromMatrix()`** static method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new {{domxref("DOMMatrixReadOnly")}} object given an existing matrix or an object which provides the values for its properties.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromMatrix()
DOMMatrixReadOnly.fromMatrix(other)
```

### Parameters

- `other` {{optional_inline}}
  - : A {{domxref("DOMMatrix")}}, {{domxref("DOMMatrixReadOnly")}}, or an object with the same properties. All properties default to `0`. The properties are:
    - `is2D`
      - : A boolean. `true` if the matrix should be created as a 2D matrix. Defaults to `false` if at least one of `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34`, or `m43` is non-zero, or at least one of `m33` or `m44` is not 1; otherwise, defaults to `true`.
    - `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
      - : Numbers representing each component of a 4×4 matrix, where `m11` through `m14` are the first column, `m21` through `m24` are the second column, and so forth. `m11`, `m22`, `m33`, and `m44` default to `1`, and all other components default to `0`.

        If `is2D` is explicitly set to `true`, `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34`, or `m43` must either be omitted or set to `0`, and `m33` and `m44` must either be omitted or set to `1`.

    - `a`, `b`, `c`, `d`, `e`, `f`
      - : Aliases for `m11`, `m12`, `m21`, `m22`, `m41`, and `m42`, respectively, for convenience when initializing 2D matrices. If these aliases are provided with the `m` counterparts, their values must be equal.

### Return value

A {{domxref("DOMMatrixReadOnly")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided object's properties are inconsistent (for example, if both `a` and `m11` are provided but have different values).

## Examples

### Creating a matrix from an object

This example creates a `DOMMatrixReadOnly` by providing matrix values in an object.

```js
const matrix = DOMMatrixReadOnly.fromMatrix({
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  e: 50,
  f: 50,
  is2D: true,
});

console.log(matrix.toString());
// Output: matrix(1, 0, 0, 1, 50, 50)

console.log(matrix.is2D);
// Output: true
```

### Creating a matrix from an existing matrix

This example creates a new `DOMMatrixReadOnly` from an existing `DOMMatrixReadOnly`.

```js
const matrix1 = new DOMMatrixReadOnly([1, 0, 0, 1, 100, 100]);
const matrix2 = DOMMatrixReadOnly.fromMatrix(matrix1);

console.log(matrix2.toString());
// Output: matrix(1, 0, 0, 1, 100, 100)
```

### Creating a default identity matrix

This example shows how calling `fromMatrix()` with no arguments creates an identity matrix.

```js
const identityMatrix = DOMMatrixReadOnly.fromMatrix();

console.log(identityMatrix.toString());
// Output: matrix(1, 0, 0, 1, 0, 0)

console.log(identityMatrix.isIdentity);
// Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.DOMMatrixReadOnly", "DOMMatrixReadOnly()")}} constructor
- {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}}
