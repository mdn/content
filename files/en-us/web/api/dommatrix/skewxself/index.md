---
title: "DOMMatrix: skewXSelf() method"
short-title: skewXSelf()
slug: Web/API/DOMMatrix/skewXSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.skewXSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `skewXSelf()` method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix. It skews the source matrix by applying the specified skew transformation along the X-axis and returns the skewed matrix.

To skew a matrix along the X-axis without mutating it, see {{domxref("DOMMatrixReadOnly.skewX()")}}

## Syntax

```js-nolint
skewXSelf()
skewXSelf(sX)
```

### Parameters

- `sX`
  - : A number; the angle, in degrees, by which to skew the matrix along the X axis.

### Return value

Returns itself; the [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) skewed along the X-axis by the given
angle.

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.skewXSelf(14); // mutate it
console.log(matrix); // output: "matrix(1, 0, 0.25, 1, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

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
