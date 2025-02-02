---
title: "DOMPointReadOnly: matrixTransform() method"
short-title: matrixTransform()
slug: Web/API/DOMPointReadOnly/matrixTransform
page-type: web-api-instance-method
browser-compat: api.DOMPointReadOnly.matrixTransform
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`matrixTransform()`** method of the {{domxref("DOMPointReadOnly")}} interface applies a matrix transform specified as an object to the DOMPointReadOnly object, creating and returning a new `DOMPointReadOnly` object. Neither the matrix nor the point are altered.

If the matrix passed as a parameter is 2D (the {{domxref("DOMMatrixReadonly.is2D", "is2D")}} is `true`) then this is a 2D transformation and the point's `z` coordinate will be `0` and point's `w` perspective will be `1`. Otherwise this is a 3D transformation.

You can also create a new `DOMPoint` with a point and matrix with the {{domxref("DOMMatrixReadOnly.transformPoint()")}} method.

## Syntax

```js-nolint
matrixTransform()
matrixTransform(matrix)
```

### Parameters

- `matrix`
  - : A {{domxref("DOMMatrix")}} or {{domxref("DOMMatrixReadOnly")}} object.

### Return value

A new {{domxref("DOMPoint")}} object.

## Examples

### 2D transform

In this example, we apply a 2D matrix transform to a `DOMPointReadOnly`, creating a new `DOMPoint`:

```js
const originalPoint = new DOMPointReadOnly(10, 20); // DOMPointReadOnly {x: 10, y: 20, z: 0, w: 1}
const matrix = new DOMMatrix([1, 0, 0, 1, 15, 30]);

const transformedPoint = originalPoint.matrixTransform(matrix); // DOMPoint {x: 25, y: 50, z: 0, w: 1}

console.log(transformedPoint.toJSON()); // output: {x: 25, y: 50, z: 0, w: 1}
```

### 3D transform

In this example, we apply a 3D matrix transform to a `DOMPointReadOnly`:

```js
const point = new DOMPointReadOnly(5, 10); // DOMPointReadOnly {x: 5, y: 10, z: 0, w: 1}
const matrix3D = new DOMMatrix().translate(0, 0, 10);
const transformedPoint = point.matrixTransform(matrix3D); // DOMPoint {x: 5, y: 10, z: 10, w: 1}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMMatrix")}}
- {{domxref("DOMMatrixReadOnly.transformPoint()")}}
- CSS {{cssxref("transform-function/matrix", "matrix()")}} and {{cssxref("transform-function/matrix3d", "matrix3d()")}} functions
