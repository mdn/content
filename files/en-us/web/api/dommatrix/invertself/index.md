---
title: "DOMMatrix: invertSelf() method"
short-title: invertSelf()
slug: Web/API/DOMMatrix/invertSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.invertSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`invertSelf()`** method of the {{domxref("DOMMatrix")}} interface inverts the original matrix. If the matrix cannot be inverted, the new matrix's components are all set to `NaN` and its {{domxref("DOMMatrixReadonly.is2D", "is2D")}} property is set to `false`.

To invert a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.inverse()")}}

## Syntax

```js-nolint
invertSelf()
```

### Return value

A {{domxref("DOMMatrix")}}.

## Examples

In this example, we create a matrix with a rotation of 30deg. Then invert it, resulting in a rotation of -30deg.

```js
const matrix = new DOMMatrix().rotate(30);
console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
matrix.invertSelf();
console.log(matrix.toString());
// output: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.inverse()")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
