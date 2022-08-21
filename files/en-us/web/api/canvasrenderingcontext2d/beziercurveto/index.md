---
title: CanvasRenderingContext2D.bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.bezierCurveTo
---
{{APIRef}}

The
**`CanvasRenderingContext2D.bezierCurveTo()`**
method of the Canvas 2D API adds a cubic [Bézier curve](/en-US/docs/Glossary/Bezier_curve) to the current
sub-path. It requires three points: the first two are control points and the third one
is the end point. The starting point is the latest point in the current path, which can
be changed using {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} before
creating the Bézier curve.

## Syntax

```js
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

### Parameters

- `cp1x`
  - : The x-axis coordinate of the first control point.
- `cp1y`
  - : The y-axis coordinate of the first control point.
- `cp2x`
  - : The x-axis coordinate of the second control point.
- `cp2y`
  - : The y-axis coordinate of the second control point.
- `x`
  - : The x-axis coordinate of the end point.
- `y`
  - : The y-axis coordinate of the end point.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### How bezierCurveTo works

This example shows how a cubic Bézier curve is drawn.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
// Define canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the points as {x, y}
let start = { x: 50,    y: 20  };
let cp1 =   { x: 230,   y: 30  };
let cp2 =   { x: 150,   y: 80  };
let end =   { x: 250,   y: 100 };

// Cubic Bézier curve
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.stroke();

// Start and end points
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
ctx.fill();

// Control points
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
ctx.fill();
```

#### Result

In this example, the control points are red and the
start and end points are blue.

{{ EmbedLiveSample('How_bezierCurveTo_works', 315, 165) }}

### A simple Bézier curve

This example draws a simple Bézier curve using `bezierCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The curve begins at the point specified by `moveTo()`: (30, 30). The first
control point is placed at (120, 160), and the second at (180, 10). The curve ends at
(220, 140).

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120,160, 180,10, 220,140);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('A_simple_Bézier_curve', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- [Bézier curve](/en-US/docs/Glossary/Bezier_curve)
