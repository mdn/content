---
title: "DOMMatrixReadOnly: skewX() method"
short-title: skewX()
slug: Web/API/DOMMatrixReadOnly/skewX
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.skewX
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `skewX()` method of the {{domxref("DOMMatrixReadOnly")}} interface is a transformation method that returns a new {{domxref("DOMMatrix")}} created by applying the specified skew transformation to the source matrix along its X-axis. The original matrix is not modified.

To mutate the matrix as you skew it along the X-axis, see {{domxref("DOMMatrix.skewXSelf()")}}

## Syntax

```js-nolint
DOMMatrixReadOnly.skewX()
DOMMatrixReadOnly.skewX(sX)
```

### Parameters

- `sX`
  - : A number; the angle, in degrees, by which to skew the matrix along the X axis.

### Return value

Returns a [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
const skewed = matrix.skewX(14); // skew along X-axis and assign
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (unchanged)
console.log(skewed); // output: "matrix(1, 0, 0.25, 1, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.skewY()")}}
- {{domxref("DOMMatrix.skewX()")}}
- CSS {{cssxref("transform")}} property
- CSS {{cssxref("transform-function")}} functions
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
  - {{cssxref("transform-function/skewZ", "skewZ()")}}
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface methods
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
