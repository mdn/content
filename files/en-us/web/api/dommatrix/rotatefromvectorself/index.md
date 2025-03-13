---
title: "DOMMatrix: rotateFromVectorSelf() method"
short-title: rotateFromVectorSelf()
slug: Web/API/DOMMatrix/rotateFromVectorSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.rotateFromVectorSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotateFromVectorSelf()` method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix by rotating the matrix by the angle between the specified vector and `(1, 0)`. The rotation angle is determined by the angle between the vector `(1,0)T` and `(x,y)T` in the clockwise direction, or `(+/-)arctan(y/x)`. If `x` and `y` are both `0`, the angle is specified as `0`, and the matrix is not altered.

To rotate a matrix from a vector without mutating it, see {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}, which creates a new rotated matrix while leaving the original unchanged.

## Syntax

```js-nolint
rotateFromVectorSelf()
rotateFromVectorSelf(rotX)
rotateFromVectorSelf(rotX, rotY)
```

### Parameters

- `rotX` {{optional_inline}}
  - : A number; The x-coordinate of x,y vector that determines the rotation angle. If undefined, `0` is used.
- `rotY` {{optional_inline}}
  - : A number; The y-coordinate of x,y vector that determines the rotation angle. If undefined, `0` is used.

### Return value

Returns itself; the updated [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateFromVectorSelf().toString());
// output: matrix(1, 0, 0, 1, 0, 0) (no rotation applied)
console.log(matrix.rotateFromVectorSelf(10, 20).toString());
// output: matrix(0.447, 0.894, -0.894, 0.447, 0, 0)
console.log(matrix.toString());
// output: matrix(0.447, 0.894, -0.894, 0.447, 0, 0) (same as above)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
- CSS {{cssxref("transform")}} property and {{cssxref("transform-function/rotate3d", "rotate3d()")}} function
- CSS {{cssxref("rotate")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface and {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} method
