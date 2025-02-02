---
title: "DOMMatrixReadOnly: isIdentity property"
short-title: isIdentity
slug: Web/API/DOMMatrixReadOnly/isIdentity
page-type: web-api-instance-property
browser-compat: api.DOMMatrixReadOnly.isIdentity
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The readonly **`isIdentity`** property of the {{domxref("DOMMatrixReadOnly")}} interface is a Boolean whose value is `true` if the matrix is the [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix).

The identity matrix is one in which every value is `0` _except_ those on the main diagonal from top-left to bottom-right corner (in other words, where the offsets in each direction are equal).

## Value

A Boolean value.

## Examples

```js
// Initialize a 2D matrix
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.isIdentity); // output: true

// Apply a transform that has no effect
console.log(matrix.translate(0).isIdentity); // output: true

// Apply a transform with effect: this rotates the matrix by 30deg
console.log(matrix.rotate(30).isIdentity); // output: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrix")}} interface
- {{domxref("CSSMatrixComponent")}} interface
- {{domxref("CanvasRenderingContext2D")}} interface
- CSS {{cssxref("transform-function/matrix()")}} function
- CSS {{cssxref("transform")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
