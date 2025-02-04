---
title: "DOMMatrix: rotateAxisAngleSelf() method"
short-title: rotateAxisAngleSelf()
slug: Web/API/DOMMatrix/rotateAxisAngleSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.rotateAxisAngleSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotateAxisAngleSelf()` method of the {{domxref("DOMMatrix")}} interface is a transformation method that rotates the source matrix by the given vector and angle, returning the altered matrix.

To rotate a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}, which creates a new rotated matrix while leaving the original unchanged.

## Syntax

```js-nolint
rotateAxisAngleSelf()
rotateAxisAngleSelf(rotX)
rotateAxisAngleSelf(rotX, rotY)
rotateAxisAngleSelf(rotX, rotY, rotZ)
rotateAxisAngleSelf(rotX, rotY, rotZ, angle)
```

### Parameters

- `rotX`
  - : A number; the x-coordinate of the vector denoting the axis of rotation. If non-zero, {{domxref("DOMMatrixReadonly.is2D", "is2D")}} is false.
- `rotY` {{optional_inline}}
  - : A number; the y-coordinate of the vector denoting the axis of rotation. If undefined, the `rotX` value is used. If non-zero, {{domxref("DOMMatrixReadonly.is2D", "is2D")}} is false.
- `rotZ` {{optional_inline}}
  - : A number; the z-coordinate of the vector denoting the axis of rotation. If undefined, the `rotX` value is used.
- `angle` {{optional_inline}}
  - : A number; the angle of the rotation around the axis vector, in degrees.

If `rotY` and `rotZ` are both missing, `rotZ` is set to the value of `rotX`, and both `rotX` and `rotY` are `0`.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateAxisAngleSelf(10, 20, 30, 45).toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1)" */
console.log(matrix.toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 0, 
    0, 0, 0, 1)" */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
- CSS {{cssxref("transform")}} property and {{cssxref("transform-function/rotate3d", "rotate3d()")}} function
- CSS {{cssxref("rotate")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface and {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} method
