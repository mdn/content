---
title: "CanvasRenderingContext2D: rect() method"
short-title: rect()
slug: Web/API/CanvasRenderingContext2D/rect
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.rect
---

{{APIRef}}

The
**`CanvasRenderingContext2D.rect()`**
method of the Canvas 2D API adds a rectangle to the current path.

Like other methods that modify the current path, this method does not directly render
anything. To draw the rectangle onto a canvas, you can use the
{{domxref("CanvasRenderingContext2D.fill", "fill()")}} or
{{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} methods.

> [!NOTE]
> To both create and render a rectangle in one step, use the
> {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} or
> {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} methods.

## Syntax

```js-nolint
rect(x, y, width, height)
```

The `rect()` method creates a rectangular path whose starting point is at
`(x, y)` and whose size is specified by `width` and
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

### Drawing a rectangle

This example creates a rectangular path using the `rect()` method. The path
is then rendered using the `fill()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The rectangle's corner is located at (10, 20). It has a width of 150 and a height of
100\.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath(); // Start a new path
ctx.rect(10, 20, 150, 100); // Add a rectangle to the current path
ctx.fill(); // Render the path
```

#### Result

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
