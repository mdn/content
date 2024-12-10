---
title: "DOMMatrix: isIdentity property"
short-title: isIdentity
slug: Web/API/DOMMatrix/isIdentity
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.isIdentity
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The readonly **`isIdentity`** property of the {{domxref("DOMMatrix")}} interface is a Boolean whose value is `true` if the matrix is the [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix). The identity matrix is one in which every value is `0` _except_ those on the main diagonal from top-left to bottom-right corner (in other words, where the offsets in each direction are equal).

## Syntax

```js-nolint
DOMMatrix.isIdentity
```

## Value

A boolean value.

## Examples

```js
// Initialize a 2D matrix
const matrix = new DOMMatrix(); // create a matrix

console.log(matrix); // DOMMatrix { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, m11: 1, m12: 0, m13: 0, m14: 0 }
console.log(matrix.isIdentity); // output: true

// Apply a transform: the matrix is rotated by 30deg
matrix.rotateSelf(30);

console.log(matrix); // DOMMatrix { a: 0.866, b: 0.5, c: -0.5, d: 0.866, e: 0, f: 0, m11: 0.866, m12: 0.5, m13: 0, m14: 0 }
console.log(matrix.isIdentity); // output: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.isIdentity")}}
- {{domxref("CSSMatrixComponent")}} interface
- {{domxref("CanvasRenderingContext2D")}} interface
- CSS {{cssxref("transform-function/matrix()")}} function
- CSS {{cssxref("transform")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
