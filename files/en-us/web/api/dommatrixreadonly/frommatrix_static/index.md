---
title: "DOMMatrixReadOnly: fromMatrix() static method"
short-title: fromMatrix()
slug: Web/API/DOMMatrixReadOnly/fromMatrix_static
page-type: web-api-static-method
browser-compat: api.DOMMatrixReadOnly.fromMatrix_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromMatrix()`** static method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new mutable {{domxref("DOMMatrix")}} object given an existing matrix or an object which provides the values for its properties.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromMatrix()
DOMMatrixReadOnly.fromMatrix(other)
```

### Parameters

- `other` {{optional_inline}}
  - : An existing matrix or an object providing the matrix values. If not specified, the matrix is initialized with every element set to `0` _except_ the bottom-right corner and the element immediately above and to its left: `m33` and `m34`. These have the default value of `1`.

    The object can contain any of the following properties:
    - `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
      - : Double-precision floating-point values representing each component of a 4×4 matrix, where `m11` through `m14` are the first column, `m21` through `m24` are the second column, and so forth.
    - `a`, `b`, `c`, `d`, `e`, `f`
      - : Double-precision floating-point values representing the components of a 4×4 matrix which are required in order to perform 2D rotations and translations. These are aliases for specific components of a 4×4 matrix: `a` = `m11`, `b` = `m12`, `c` = `m21`, `d` = `m22`, `e` = `m41`, `f` = `m42`.
    - `is2D`
      - : A Boolean flag whose value is `true` if the matrix was initialized as a 2D matrix. If `false`, the matrix is 3D.

### Return value

A {{domxref("DOMMatrix")}} object.

## Examples

### Creating a matrix from an object

This example creates a `DOMMatrix` by providing matrix values in an object.

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

This example creates a new `DOMMatrix` from an existing `DOMMatrixReadOnly`.

```js
const readOnlyMatrix = new DOMMatrixReadOnly([1, 0, 0, 1, 100, 100]);
const mutableMatrix = DOMMatrixReadOnly.fromMatrix(readOnlyMatrix);

console.log(mutableMatrix.toString());
// Output: matrix(1, 0, 0, 1, 100, 100)

// The returned matrix is mutable
mutableMatrix.translateSelf(50, 25);

console.log(mutableMatrix.toString());
// Output: matrix(1, 0, 0, 1, 150, 125)
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
- {{domxref("DOMMatrix.DOMMatrix", "DOMMatrix()")}} constructor
