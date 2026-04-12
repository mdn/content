---
title: "DOMMatrixReadOnly: multiply() method"
short-title: multiply()
slug: Web/API/DOMMatrixReadOnly/multiply
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.multiply
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`multiply()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates and returns a new matrix which is the dot product of the matrix and the `otherMatrix` parameter. If `otherMatrix` is omitted, the matrix is multiplied by a matrix in which every element is `0` _except_ the bottom-right corner and the element immediately above and to its left: `m33` and `m34`. These have the default value of `1`. The original matrix is not modified.

To mutate the matrix as you multiply it, see {{domxref("DOMMatrix.multiplySelf()")}}.

## Syntax

```js-nolint
multiply()
multiply(otherMatrix)
```

### Parameters

- `otherMatrix` {{optional_inline}}
  - : The [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) multiplier.

### Return value

A {{domxref("DOMMatrix")}}.

## Examples

```js
const matrix = new DOMMatrixReadOnly().translate(13, 21);
const multipliedMatrix = matrix.multiply(matrix);
console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 13, 21)
console.log(multipliedMatrix.toString()); // output: matrix(1, 0, 0, 1, 26, 42)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.multiplySelf()")}}
- {{domxref("DOMMatrix.preMultiplySelf()")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
