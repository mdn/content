---
title: "DOMMatrixReadOnly: rotate() method"
short-title: rotate()
slug: Web/API/DOMMatrixReadOnly/rotate
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.rotate
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotate()` method of the {{domxref("DOMMatrixReadOnly")}} interface is a transformation method that returns a new {{domxref("DOMMatrix")}} created by rotating the source matrix around each of its axes by the specified number of degrees. The original matrix is not altered.

To mutate the matrix as you rotate it, see {{domxref("DOMMatrix.rotateSelf()")}}

## Syntax

```js-nolint
DOMMatrixReadOnly.rotate()
DOMMatrixReadOnly.rotate(rotX)
DOMMatrixReadOnly.rotate(rotX, rotY)
DOMMatrixReadOnly.rotate(rotX, rotY, rotZ)
```

### Parameters

- `rotX`
  - : A number; the x-coordinate of the vector denoting the axis of rotation
- `rotY` {{optional_inline}}
  - : A number; the y-coordinate of the vector denoting the axis of rotation.
- `rotZ` {{optional_inline}}
  - : A number; the z-coordinate of the vector denoting the axis of rotation

If only one parameter is passed, `rotZ` is the value of `rotX`, and both `rotx` and `rotY` are `0`, and the rotation is a 2D rotation. If `rotX` and `rotY` are non-zero, the [`is_2d`](/en-US/docs/Web/API/DOMMatrixReadOnly#is2d) is `false`.

### Return value

Returns a [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrixReadOnly(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
const rotated = matrix.rotate(30); // rotate it and assign to rotated
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (original value)
console.log(rotated); // output: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
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
