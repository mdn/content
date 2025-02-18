---
title: "DOMMatrixReadOnly: is2D property"
short-title: is2D
slug: Web/API/DOMMatrixReadOnly/is2D
page-type: web-api-instance-property
browser-compat: api.DOMMatrixReadOnly.is2D
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The readonly **`is2D`** property of the {{domxref("DOMMatrixReadOnly")}} interface is a Boolean flag that is `true` when the matrix is 2D. The value is `true` if the matrix was initialized as a 2D matrix and only 2D transformation operations were applied. Otherwise, the matrix is defined in 3D, and `is2D` is `false`.

## Value

A Boolean value.

## Examples

```js
// Initialize a 2D matrix
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.is2D); // output: true

// Transform in a 2D space
console.log(matrix.rotate(30).is2D); // output: true

// Apply a 3D transform
console.log(matrix.rotate(10, 20, 1).is2D); // output: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.is2D")}}
- {{domxref("CSSTransformComponent.is2D")}}
- CSS {{cssxref("transform-function")}} functions
- CSS {{cssxref("transform")}} property
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface
