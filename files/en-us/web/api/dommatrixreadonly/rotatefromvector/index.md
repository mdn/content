---
title: "DOMMatrixReadOnly: rotateFromVector() method"
short-title: rotateFromVector()
slug: Web/API/DOMMatrixReadOnly/rotateFromVector
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.rotateFromVector
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotateFromVector()` method of the {{domxref("DOMMatrixReadOnly")}} interface is a transformation method that returns a new {{domxref("DOMMatrix")}} created by rotating the source matrix by the angle between the specified vector and `(1, 0)`. The rotation angle is determined by the angle between the vector `(1,0)T` and `(x,y)T` in the clockwise direction, or `(+/-)arctan(y/x)`. If `x` and `y` are both `0`, the angle is specified as `0`. The original matrix is not altered.

To mutate the matrix as you rotate it by the angle between the specified vector and `(1, 0)`, see {{domxref("DOMMatrix.rotateFromVectorSelf()")}}

## Syntax

```js-nolint
DOMMatrixReadOnly.rotateFromVector()
DOMMatrixReadOnly.rotateFromVector(rotX)
DOMMatrixReadOnly.rotateFromVector(rotX, rotY)
```

### Parameters

- `rotX` {{optional_inline}}
  - : A number; The x-coordinate of x,y vector that determines the rotation angle. If undefined, `0` is used.
- `rotY` {{optional_inline}}
  - : A number; The y-coordinate of x,y vector that determines the rotation angle. If undefined, `0` is used.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateFromVector().toString()); // output: matrix(1, 0, 0, 1, 0, 0) (no rotation applied)
console.log(matrix.rotateFromVector(10, 20).toString()); // matrix(0.447, 0.894, -0.894, 0.447, 0, 0)
console.log(matrix.rotateFromVector(-5, 5).toString()); // matrix(-0.707, 0.707, -0.707, -0.707, 0, 0)
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (unchanged)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotate()")}}
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- CSS {{cssxref("transform")}} property
- CSS {{cssxref("rotate")}} property
- CSS {{cssxref("transform-function")}} functions
  - {{cssxref("transform-function/rotate", "rotate()")}}
  - {{cssxref("transform-function/rotate3d", "rotate3d()")}}
  - {{cssxref("transform-function/rotateX", "rotateX()")}}
  - {{cssxref("transform-function/rotateY", "rotateY()")}}
  - {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface methods
  - {{domxref("CanvasRenderingContext2D.rotate()")}}
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
