---
title: "DOMMatrixReadOnly: skewY() method"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.skewY
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `skewY()` method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{domxref("DOMMatrix")}} created by applying the specified skew transformation to the source matrix along its y-axis. The original matrix is not modified.

To mutate the matrix as you skew it along the y-axis, see {{domxref("DOMMatrix.skewYSelf()")}}.

## Syntax

```js-nolint
skewY()
skewY(sY)
```

### Parameters

- `sY`
  - : A number; the angle, in degrees, by which to skew the matrix along the y-axis.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // original value
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewY(14).toString()); // skew along y-axis
// "matrix(1, -0.25, 0, 1, 0, 0)"

console.log(matrix.toString()); // original unchanged
// "matrix(1, 0, 0, 1, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix.skewYSelf()")}}
- {{domxref("DOMMatrixReadOnly.skewX()")}}
- CSS {{cssxref("transform")}} property and the {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewY", "skewY()")}}, and {{cssxref("transform-function/matrix", "matrix()")}} functions
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface's {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} method
