---
title: "DOMMatrixReadOnly: skewY() method"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.skewY
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `skewY()` method of the {{domxref("DOMMatrixReadOnly")}} interface is a transformation method that returns a new {{domxref("DOMMatrix")}} created by applying the specified skew transformation to the source matrix along its Y-axis. The original matrix is not modified.

To mutate the matrix as you skew it along the Y-axis, see {{domxref("DOMMatrix.skewYSelf()")}}

## Syntax

```js-nolint
DOMMatrixReadOnly.skewY()
DOMMatrixReadOnly.skewY(sY)
```

### Parameters

- `sY`
  - : A number; the angle, in degrees, by which to skew the matrix along the Y axis.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
const skewed = matrix.skewY(14); // skew along Y-axis and assign
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (unchanged)
console.log(skewed); // output: "matrix(1, -0.25, 0, 1, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.skewY()")}}
- {{domxref("DOMMatrixReadOnly.skewX()")}}
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
