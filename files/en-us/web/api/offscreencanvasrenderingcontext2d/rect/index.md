---
title: OffscreenCanvasRenderingContext2D.rect()
slug: Web/API/OffscreenCanvasRenderingContext2D/rect
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D.rect
---

{{APIRef}}

The
**`OffscreenCanvasRenderingContext2D.rect()`**
method of the Canvas 2D API adds a rectangle to the current path.

Like other methods that modify the current path, this method does not directly render
anything. To draw the rectangle onto a canvas, you can use the
{{domxref("OffscreenCanvasRenderingContext2D.fill", "fill()")}} or
{{domxref("OffscreenCanvasRenderingContext2D.stroke", "stroke()")}} methods.

> **Note:** To both create and render a rectangle in one step, use the
> {{domxref("OffscreenCanvasRenderingContext2D.fillRect", "fillRect()")}} or
> {{domxref("OffscreenCanvasRenderingContext2D.strokeRect", "strokeRect()")}} methods.

## Syntax

```js
rect(x, y, width, height);
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
ctx.rect(10, 20, 150, 100);
ctx.fill();
```

#### Result

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D.fillRect")}}
- {{domxref("OffscreenCanvasRenderingContext2D.strokeRect()")}}
- {{domxref("OffscreenCanvasRenderingContext2D.fill()")}}
- {{domxref("OffscreenCanvasRenderingContext2D.stroke()")}}
