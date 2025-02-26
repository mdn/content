---
title: "DOMMatrix: multiplySelf() method"
short-title: multiplySelf()
slug: Web/API/DOMMatrix/multiplySelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.multiplySelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`multiplySelf()`** method of the {{domxref("DOMMatrix")}} interface multiplies a matrix by the `otherMatrix` parameter, computing the dot product of the original matrix and the specified matrix: `A⋅B`. If no matrix is specified as the multiplier, the matrix is multiplied by a matrix in which every element is `0` _except_ the bottom-right corner and the element immediately above and to its left: `m33` and `m34`. These have the default value of `1`.

To multiply a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.multiply()")}}.

## Syntax

```js-nolint
multiplySelf()
multiplySelf(otherMatrix)
```

### Parameters

- `otherMatrix` {{optional_inline}}
  - : The [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) multiplier.

### Return value

Returns itself; the [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) updated to the results of the applied multiplications.

## Examples

```js
const matrix = new DOMMatrix().rotate(30);

console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

matrix.multiplySelf(matrix);

console.log(matrix.toString());
// output: matrix(0.5, 0.866, -0.866, 0.5, 0, 0) (a 60deg rotation)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.multiply()")}}
- {{domxref("DOMMatrix.preMultiplySelf()")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
