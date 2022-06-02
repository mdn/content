---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.clearRect
---
{{APIRef}}

The
**`CanvasRenderingContext2D.clearRect()`**
method of the Canvas 2D API erases the pixels in a rectangular area by setting them to
transparent black.

> **Note:** Be aware that `clearRect()` may cause unintended
> side effects if you're not [using paths properly](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths). Make sure to call
> {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} before starting to
> draw new items after calling `clearRect()`.

## Syntax

```js
clearRect(x, y, width, height)
```

The `clearRect()` method sets the pixels in a rectangular area to
transparent black (`rgba(0,0,0,0)`). The rectangle's top-left corner is at
`(x, y)`, and its size is specified by `width` and
`height`.

### Parameters

- `x`
  - : The x-axis coordinate of the rectangle's starting point.
- `y`
  - : The y-axis coordinate of the rectangle's starting point.
- `width`
  - : The rectangle's width. Positive values are to the right, and negative to the left.
- `height`
  - : The rectangle's height. Positive values are down, and negative are up.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Erasing the whole canvas

This code snippet erases the entire canvas. This is commonly required at the start of
each frame in an animation. The dimensions of the cleared area are set to equal the
{{HtmlElement("canvas")}} element's `width` and `height`
attributes.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Erasing part of a canvas

This example draws a blue triangle on top of a yellowish background. The
`clearRect()` method then erases part of the canvas.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The cleared area is rectangular in shape, with its top-left corner at (10, 10). The
cleared area has a width of 120 and a height of 100.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw yellow background
ctx.beginPath();
ctx.fillStyle = '#ff6';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw blue triangle
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// Clear part of the canvas
ctx.clearRect(10, 10, 120, 100);
```

#### Result

{{EmbedLiveSample('Erasing_part_of_a_canvas', 700, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
