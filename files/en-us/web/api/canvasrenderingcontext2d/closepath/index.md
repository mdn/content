---
title: "CanvasRenderingContext2D: closePath() method"
short-title: closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.closePath
---

{{APIRef}}

The
**`CanvasRenderingContext2D.closePath()`**
method of the Canvas 2D API attempts to add a straight line from the current point to
the start of the current sub-path. If the shape has already been closed or has only one
point, this function does nothing.

This method doesn't draw anything to the canvas directly. You can render the path using
the {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} or
{{domxref("CanvasRenderingContext2D.fill()", "fill()")}} methods.

## Syntax

```js-nolint
closePath()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Closing a triangle

This example creates the first two (diagonal) sides of a triangle using the
`lineTo()` method. After that, the triangle's base is created with the
`closePath()` method, which automatically connects the shape's first and last
points.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The triangle's corners are at (20, 140), (120, 10), and (220, 140).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 140); // Move pen to bottom-left corner
ctx.lineTo(120, 10); // Line to top corner
ctx.lineTo(220, 140); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Closing_a_triangle', 700, 180) }}

### Closing just one sub-path

This example draws a smiley face consisting of three disconnected sub-paths.

> **Note:** Although `closePath()` is called after all the arcs have been
> created, only the last arc (sub-path) gets closed.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The first two arcs create the face's eyes. The last arc creates the mouth.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Closing_just_one_sub-path', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
