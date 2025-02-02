---
title: "DOMMatrix: rotateSelf() method"
short-title: rotateSelf()
slug: Web/API/DOMMatrix/rotateSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.rotateSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotateSelf()` method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix. It rotates the source matrix around each of its axes by the specified number of degrees and returns the rotated matrix.

To rotate a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.rotate()")}}

## Syntax

```js-nolint
rotateSelf()
rotateSelf(rotX)
rotateSelf(rotX, rotY)
rotateSelf(rotX, rotY, rotZ)
```

### Parameters

- `rotX`
  - : A number; the x-coordinate of the vector denoting the axis of rotation
- `rotY` {{optional_inline}}
  - : A number; the y-coordinate of the vector denoting the axis of rotation.
- `rotZ` {{optional_inline}}
  - : A number; the z-coordinate of the vector denoting the axis of rotation

If only one parameter is passed, `rotZ` is the value of `rotX`, and both `rotX` and `rotY` are `0`, and the rotation is a 2D rotation. If `rotX` and `rotY` are non-zero, the [`is2D`](/en-US/docs/Web/API/DOMMatrixReadonly/is2D) is `false`.

### Return value

Returns itself; the [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) rotated by the given
vectors.

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.rotateSelf(30); // mutate it
console.log(matrix); // output: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.rotate()")}}
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
