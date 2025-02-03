---
title: "DOMMatrixReadOnly: rotate() method"
short-title: rotate()
slug: Web/API/DOMMatrixReadOnly/rotate
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.rotate
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotate()` method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{domxref("DOMMatrix")}} created by rotating the source matrix around each of its axes by the specified number of degrees. The original matrix is not altered.

To mutate the matrix as you rotate it, see {{domxref("DOMMatrix.rotateSelf()")}}.

## Syntax

```js-nolint
rotate()
rotate(rotX)
rotate(rotX, rotY)
rotate(rotX, rotY, rotZ)
```

### Parameters

- `rotX`
  - : A number; the x-coordinate of the vector denoting the axis of rotation. If non-zero, [`is2D`](/en-US/docs/Web/API/DOMMatrixReadonly/is2D) is false.
- `rotY` {{optional_inline}}
  - : A number; the y-coordinate of the vector denoting the axis of rotation. If non-zero, [`is2D`](/en-US/docs/Web/API/DOMMatrixReadonly/is2D) is false.
- `rotZ` {{optional_inline}}
  - : A number; the z-coordinate of the vector denoting the axis of rotation.

If only `rotX` is passed, then `rotX` is used as the value for the z-coordinate, and the x- and -y-coordinates are both set to zero.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString());
// output: "matrix(1, 0, 0, 1, 0, 0)"

const rotated = matrix.rotate(30); // rotation and assignment
console.log(matrix.toString()); // original matrix is unchanged
// output: "matrix(1, 0, 0, 1, 0, 0)"
console.log(rotated.toString());
// output: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- CSS {{cssxref("transform")}} property and {{cssxref("transform-function/rotate3d", "rotate3d()")}} function
- CSS {{cssxref("rotate")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface and {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} method
