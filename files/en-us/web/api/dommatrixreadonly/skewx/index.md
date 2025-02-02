---
title: "DOMMatrixReadOnly: skewX() method"
short-title: skewX()
slug: Web/API/DOMMatrixReadOnly/skewX
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.skewX
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `skewX()` method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{domxref("DOMMatrix")}} created by applying the specified skew transformation to the source matrix along its x-axis. The original matrix is not modified.

To mutate the matrix as you skew it along the x-axis, see {{domxref("DOMMatrix.skewXSelf()")}}.

## Syntax

```js-nolint
skewX()
skewX(sX)
```

### Parameters

- `sX`
  - : A number; the angle, in degrees, by which to skew the matrix along the x-axis.

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // no transform applied
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewX(14).toString());
//"matrix(1, 0, 0.25, 1, 0, 0)"

console.log(matrix.toString()); // original is unchanged
// "matrix(1, 0, 0, 1, 0, 0)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.skewY()")}}
- {{domxref("DOMMatrix.skewXSelf()")}}
- CSS {{cssxref("transform")}} property and the {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewX", "skewX()")}}, and {{cssxref("transform-function/matrix", "matrix()")}} functions
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface's {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} method
