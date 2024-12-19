---
title: "DOMMatrix: setMatrixValue() method"
short-title: setMatrixValue()
slug: Web/API/DOMMatrix/setMatrixValue
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.setMatrixValue
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`setMatrixValue()`** method of the {{domxref("DOMMatrix")}} interface replaces the contents of the matrix with the matrix described by the specified transform or transforms, returning itself.

## Syntax

```js-nolint
  DOMMatrix.setMatrixValue( transformList )
```

### Parameters

- `transformList`
  - : The list of comma-separated transform values as a `DOMString` matrix.

### Return value

Returns itself; the [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) with updated values.

## Examples

In this example, we create a matrix, apply a 3D transform using the {{domxref("DOMMatrix.translateSelf()")}} method, revert it to a 2D transform using the `setMatrixValue()` method, then revert it back to a 3D transform with another `setMatrixValue()` method call.

```js
const matrix = new DOMMatrix();

console.log(matrix.toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.is2D); // true

matrix.translateSelf(30, 40, 50);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false

matrix.setMatrixValue("matrix(1, 0, 0, 1, 15, 45)");
console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 15, 45)
console.log(matrix.is2D); // true

matrix.setMatrixValue(
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)",
);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.translateSelf()")}}
- {{domxref("DOMMatrixReadOnly.is2D")}}
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} function
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} function
