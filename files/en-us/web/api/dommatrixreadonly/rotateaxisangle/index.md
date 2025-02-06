---
title: "DOMMatrixReadOnly: rotateAxisAngle() method"
short-title: rotateAxisAngle()
slug: Web/API/DOMMatrixReadOnly/rotateAxisAngle
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.rotateAxisAngle
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `rotateAxisAngle()` method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{domxref("DOMMatrix")}} created by rotating the source matrix by the given vector and angle. The original matrix is not altered.

To mutate the matrix as you rotate it, see {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}.

## Syntax

```js-nolint
rotateAxisAngle()
rotateAxisAngle(rotX)
rotateAxisAngle(rotX, rotY)
rotateAxisAngle(rotX, rotY, rotZ)
rotateAxisAngle(rotX, rotY, rotZ, angle)
```

### Parameters

- `rotX`
  - : A number; the x-coordinate of the vector denoting the axis of rotation. If non-zero, {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} is false.
- `rotY` {{optional_inline}}
  - : A number; the y-coordinate of the vector denoting the axis of rotation. If undefined, the `rotX` value is used. If non-zero, {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} is false.
- `rotZ` {{optional_inline}}
  - : A number; the z-coordinate of the vector denoting the axis of rotation. If undefined, the `rotX` value is used.
- `angle` {{optional_inline}}
  - : A number; the angle of the rotation around the axis vector, in degrees.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateAxisAngle().toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30).toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30, 45).toString());
/* matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1) */
console.log(matrix.rotateAxisAngle(5, 5, 5, -45).toString());
/* matrix3d(
    0.805, -0.311, 0.506, 0, 
    0.506, 0.805, -0.311, 0, 
    -0.311, 0.506, 0.805, 0, 
    0, 0, 0, 1) */
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (unchanged)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotate()")}}
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- CSS {{cssxref("transform")}} property and {{cssxref("transform-function/rotate3d", "rotate3d()")}} function
- CSS {{cssxref("rotate")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface and {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} method
