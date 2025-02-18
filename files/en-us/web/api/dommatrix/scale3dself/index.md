---
title: "DOMMatrix: scale3dSelf() method"
short-title: scale3dSelf()
slug: Web/API/DOMMatrix/scale3dSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.scale3dSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`scale3dSelf()`** method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix by applying a specified scaling factor to all three axes, centered on the given origin, with a default origin of `(0, 0, 0)`, returning the 3D-scaled matrix.

To 3D-scale a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.scale3d()")}}, which creates a new scaled matrix while leaving the original unchanged.

## Syntax

```js-nolint
scale3dSelf()
scale3dSelf(scale)
scale3dSelf(scale, originX)
scale3dSelf(scale, originX, originY)
scale3dSelf(scale, originX, originY, originZ)
```

### Parameters

- `scale`
  - : A multiplier; the scale value. If no scale is supplied, this defaults to `1`. If scale is not 1, the {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} property of the current matrix is set to `false`.
- `originX` {{optional_inline}}
  - : An x-coordinate for the origin of the transformation. If no origin is supplied, this defaults to `0`.
- `originY` {{optional_inline}}
  - : A y-coordinate for the origin of the transformation. If no origin is supplied, this defaults to `0`.
- `originZ` {{optional_inline}}
  - : A z-coordinate for the origin of the transformation. If no origin is supplied, this defaults to `0`.

### Return value

Returns itself; a {{domxref("DOMMatrix")}}.

## Examples

```js
const matrix = new DOMMatrix();
console.log(matrix.scale3dSelf(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3dSelf(3.1, 25, 25, 1.25).toString());
/* matrix3d(
    6.2, 0, 0, 0,
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) */
console.log(matrix.toString());
/* matrix3d(
    6.2, 0, 0, 0, 
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) (same as above) */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.scale3d()")}}
- {{domxref("DOMMatrix.scaleSelf()")}}
- CSS {{cssxref("transform")}} property and the {{cssxref("transform-function/scale", "scale3d()")}} and {{cssxref("transform-function/matrix3d", "matrix3d()")}} functions
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} method
