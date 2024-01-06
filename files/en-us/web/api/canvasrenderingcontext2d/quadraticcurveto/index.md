---
title: "CanvasRenderingContext2D: quadraticCurveTo() method"
short-title: quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.quadraticCurveTo
---

{{APIRef}}

The
**`CanvasRenderingContext2D.quadraticCurveTo()`**
method of the Canvas 2D API adds a quadratic [Bézier curve](/en-US/docs/Glossary/Bezier_curve) to the current
sub-path. It requires two points: the first one is a control point and the second one is
the end point. The starting point is the latest point in the current path, which can be
changed using {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} before creating
the quadratic Bézier curve.

## Syntax

```js-nolint
quadraticCurveTo(cpx, cpy, x, y)
```

### Parameters

- `cpx`
  - : The x-axis coordinate of the control point.
- `cpy`
  - : The y-axis coordinate of the control point.
- `x`
  - : The x-axis coordinate of the end point.
- `y`
  - : The y-axis coordinate of the end point.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### How quadraticCurveTo works

This example shows how a quadratic Bézier curve is drawn.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Quadratic Bézier curve
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// Start and end points
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Start point
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // End point
ctx.fill();

// Control point
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### Result

In this example, the control point is red and the
start and end points are blue.

{{ EmbedLiveSample('How_quadraticCurveTo_works', 315, 165) }}

### A simple quadratic curve

This example draws a simple quadratic Bézier curve using
`quadraticCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The curve begins at the point specified by `moveTo()`: (20, 110). The
control point is placed at (230, 150). The curve ends at (250, 20).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('A_simple_quadratic_curve', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- [Bézier curve](/en-US/docs/Glossary/Bezier_curve)
