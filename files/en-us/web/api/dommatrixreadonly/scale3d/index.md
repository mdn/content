---
title: "DOMMatrixReadOnly: scale3d() method"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.scale3d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`scale3d()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new matrix which is the result of a 3D scale transform being applied
to the matrix. It returns a new {{domxref("DOMMatrix")}} created by scaling the source 3d matrix by the given scale factor centered on the origin point specified by the origin parameters, with a default origin of `(0, 0, 0)`. The original matrix is not modified.

To mutate the matrix as you 3D-scale it, see {{domxref("DOMMatrix.scale3dSelf()")}}

## Syntax

```js-nolint
scale3d()
scale3d(scale)
scale3d(scale, originX)
scale3d(scale, originX, originY)
scale3d(scale, originX, originY, originZ)
```

### Parameters

- `scale`
  - : A multiplier; the scale value. If no scale is supplied, this defaults to `1`.
- `originX` {{optional_inline}}
  - : An x-coordinate for the origin of the transformation. If no origin is supplied, this defaults to `0`.
- `originY` {{optional_inline}}
  - : A y-coordinate for the origin of the transformation. If no origin is supplied, this defaults to `0`.
- `originZ` {{optional_inline}}
  - : A z-coordinate for the origin of the transformation. If this value is `0`, the default if omitted, the resulting matrix may not be 3d.

### Return value

A {{domxref("DOMMatrix")}}.

## Examples

```js
const matrix = new DOMMatrix();
console.log(matrix.toString()); // no transforms applied
// matrix(1, 0, 0, 1, 0, 0)

console.log(matrix.scale3d(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3d(0.5, 25, 25, 1.25).toString());
/* matrix3d(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 1
    2.5, 12.5, 0.625, 1) */
console.log(matrix.toString()); // original matrix is unchanged
// matrix(1, 0, 0, 1, 0, 0)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.scale3dSelf()")}}
- {{domxref("DOMMatrixReadOnly.scale()")}}
- CSS {{cssxref("transform")}} property and {{cssxref("transform-function/scale3d", "scale3d()")}} and {{cssxref("transform-function/matrix3d", "matrix3d()")}} functions
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface's {{domxref("CanvasRenderingContext2D.transform()")}} method
