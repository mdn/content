---
title: "DOMMatrixReadOnly: flipY() method"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.flipY
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`flipY()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates a new matrix being the result of the original matrix flipped about the y-axis. This is equivalent to multiplying the matrix by `DOMMatrix(1, 0, 0, -1, 0, 0)`. The original matrix is not modified.

## Syntax

```js-nolint
flipY()
```

### Return value

A [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix).

## Examples

### Inverting a triangle

In this example, the SVG contains two identical [paths](/en-US/docs/Web/SVG/Attribute/d) in the shape of a triangle; they are both drawn to have the same size and position. The viewbox has a negative y value showing us content from both sides of the y-axis. This enables the flipped triangle to be withing the viewport after it is transformed.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

The JavaScript creates an [identity matrix](/en-US/docs/Web/API/DOMMatrixReadOnly/isIdentity), then uses the `flipY()` method to create a new matrix, which is then applied to the blue triangle, inverting it across the y-axis. The red triangle is left in place.

```js
const flipped = document.getElementById("flipped");
const matrix = new DOMMatrix();
const flippedMatrix = matrix.flipY();
flipped.setAttribute("transform", flippedMatrix.toString());
```

#### Result

{{EmbedLiveSample('Inverting a triangle', '', '240')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.flipX()")}}
