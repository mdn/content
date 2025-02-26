---
title: "DOMMatrixReadOnly: inverse() method"
short-title: inverse()
slug: Web/API/DOMMatrixReadOnly/inverse
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.inverse
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`inverse()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new matrix which is the inverse of the original matrix. If the matrix cannot be inverted, the new matrix's components are all set to `NaN` and its {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} property is set to `false`. The original matrix is not changed.

To mutate the matrix as you invert it, see {{domxref("DOMMatrix.invertSelf()")}}.

## Syntax

```js-nolint
inverse()
```

### Return value

A {{domxref("DOMMatrix")}}.

## Examples

```js
const matrix = new DOMMatrixReadOnly().rotate(30);
const invertedMatrix = matrix.inverse();
console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
console.log(invertedMatrix.toString());
// output: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.invertSelf()")}}
- {{domxref("DOMMatrixReadOnly.flipX()")}}
- {{domxref("DOMMatrixReadOnly.flipY()")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
