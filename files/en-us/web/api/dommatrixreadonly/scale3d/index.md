---
title: "DOMMatrixReadOnly: scale3d() method"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.scale3d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`scale3d()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new matrix being the result of the 3D scale transform being applied
to the matrix. It returns a new {{domxref("DOMMatrix")}} created by scaling the source 3d matrix by the given scale factor centered on the origin point specified by the origin parameters, with a default origin of `(0, 0, 0)`. The original matrix is not modified.

To mutate the matrix as you 3D-rotate it, see {{domxref("DOMMatrix.scale3dSelf()")}}

## Syntax

```js
DOMMatrixReadOnly.scale3d();
DOMMatrixReadOnly.scale3d(scale);
DOMMatrixReadOnly.scale3d(scale, originX);
DOMMatrixReadOnly.scale3d(scale, originX, originY);
DOMMatrixReadOnly.scale3d(scale, originX, originY, originZ);
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

Returns a {{domxref("DOMMatrix")}}.

## Examples

```js
const matrix = new DOMMatrix();
const scaledMatrix = matrix.scale3d(2);
const scaledMatrixWithOrigin = matrix.scale3d(0.5, 25, 25, 1.25);

console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 0, 0)
console.log(scaledMatrix.toString()); // output: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1)
console.log(scaledMatrixWithOrigin.toString()); // output: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 12.5, 12.5, 0.625, 1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.scale3dSelf()")}}
- {{domxref("DOMMatrixReadOnly.scale()")}}
- CSS {{cssxref("transform")}} property
- CSS {{cssxref("transform-function")}} functions
  - {{cssxref("transform-function/scale", "scale3d()")}}
  - {{cssxref("transform-function/scalez", "scaleZ()")}}
  - {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface methods
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
