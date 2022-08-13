---
title: CanvasRenderingContext2D.resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
page-type: web-api-instance-method
tags:
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.resetTransform
---
{{APIRef}}

The
**`CanvasRenderingContext2D.resetTransform()`**
method of the Canvas 2D API resets the current transform to the identity matrix.

## Syntax

```js
void ctx.resetTransform();
```

## Examples

### Resetting the matrix

This example draws a rotated rectangle after modifying the matrix, and then resets the
matrix using the `resetTransform()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} method rotates the
transformation matrix by 45°. The {{domxref("CanvasRenderingContext2D.fillRect()",
  "fillRect()")}} method draws a filled rectangle, adjusted according to that matrix.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw a rotated rectangle
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(60, 0, 100, 30);

// Reset transformation matrix to the identity matrix
ctx.resetTransform();
```

#### Result

{{ EmbedLiveSample('Resetting_the_matrix', 700, 180) }}

### Continuing with a regular matrix

Whenever you're done drawing transformed shapes, you should call
`resetTransform()` before rendering anything else. In this example, the first
two shapes are drawn with a skew transformation, and the last two are drawn with the
identity (regular) transformation.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Skewed rectangles
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = 'gray';
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// Non-skewed rectangles
ctx.resetTransform();
ctx.fillStyle = 'red';
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
```

#### Result

The skewed rectangles are gray, and the non-skewed rectangles are red.

{{ EmbedLiveSample('Continuing_with_a_regular_matrix', 700, 180) }}

## Polyfill

You can also use the {{domxref("CanvasRenderingContext2D.setTransform()",
  "setTransform()")}} method to reset the current transform to the identity matrix, like
so:

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
