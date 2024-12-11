---
title: "DOMMatrix: preMultiplySelf() method"
short-title: preMultiplySelf()
slug: Web/API/DOMMatrix/preMultiplySelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.preMultiplySelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`preMultiplySelf()`** method of the {{domxref("DOMMatrix")}} interface Modifies the matrix by pre-multiplying it with the specified `DOMMatrix`. This is equivalent to the dot product `B⋅A`, where matrix `A` is the source matrix and `B` is the matrix given as an input to the method. If no matrix is specified as the multiplier, the matrix is multiplied by a matrix in which every element is `0` _except_ the bottom-right corner and the element immediately above and to its left: `m33` and `m34`. These have the default value of `1`.git

## Syntax

```js-nolint
  DOMMatrix.preMultiplySelf( )
  DOMMatrix.preMultiplySelf( otherMatrix )
```

### Parameters

- `otherMatrix`
  - : The [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) multiplier.

### Return value

Returns a new [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) containing the results of the applied multiplications.

## Examples

```js
const matrix = new DOMMatrix().rotate(30);

console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

matrix.preMultiplySelf(matrix);

console.log(matrix.toString());
// output: matrix(0.5, 0.866, -0.866, 0.5, 0, 0)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.multiplySelf()")}}
- {{domxref("DOMMatrixReadOnly.multiply()")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
