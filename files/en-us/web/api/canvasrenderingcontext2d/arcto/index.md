---
title: "CanvasRenderingContext2D: arcTo() method"
short-title: arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.arcTo
---

{{APIRef}}

The
**`CanvasRenderingContext2D.arcTo()`**
method of the Canvas 2D API adds a circular arc to the current sub-path, using the given
control points and radius. The arc is automatically connected to the path's latest point
with a straight line, if necessary for the specified parameters.

This method is commonly used for making rounded corners.

> **Note:** Be aware that you may get unexpected results when using a
> relatively large radius: the arc's connecting line will go in whatever direction it
> must to meet the specified radius.

## Syntax

```js-nolint
arcTo(x1, y1, x2, y2, radius)
```

### Parameters

- `x1`
  - : The x-axis coordinate of the first control point.
- `y1`
  - : The y-axis coordinate of the first control point.
- `x2`
  - : The x-axis coordinate of the second control point.
- `y2`
  - : The y-axis coordinate of the second control point.
- `radius`
  - : The arc's radius. Must be non-negative.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### How arcTo works

One way to think about `arcTo()` is to imagine two straight segments: one
from the starting point to a first control point, and another from there to a second
control point. Without `arcTo()`, these two segments would form a sharp
corner: `arcTo()` creates a circular arc that fits this corner and smooths it
out. In other words, the arc is tangential to both segments.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Tangential lines
ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// Arc
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();

// Start point
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// Control points
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Control point two
ctx.fill();
```

#### Result

In this example, the path created by `arcTo()` is **thick and
black**. Tangent lines are gray, control points are red, and the start point is blue.

{{ EmbedLiveSample('How_arcTo_works', 315, 165) }}

### Creating a rounded corner

This example creates a rounded corner using `arcTo()`. This is one of the
method's most common uses.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The arc begins at the point specified by `moveTo()`: (230, 20). It is shaped
to fit control points at (90, 130) and (20, 20), and has a radius of 50. The
`lineTo()` method connects the arc to (20, 20) with a straight line. Note
that the arc's second control point and the point specified by `lineTo()` are
the same, which produces a totally smooth corner.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, y: 130 };
const p2 = { x: 20, y: 20 };

const labelPoint = (p) => {
  const offset = 15;
  ctx.fillText(`(${p.x},${p.y})`, p.x + offset, p.y + offset);
};

ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Creating_a_rounded_corner', 315, 165) }}

### Result of a large radius

If you use a relatively large radius, the arc may appear in a place you didn't expect.
In this example, the arc's connecting line goes above, instead of below, the coordinate
specified by `moveTo()`. This happens because the radius is too large for the
arc to fit entirely below the starting point.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180, 130, 110, 130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Result_of_a_large_radius', 315, 165) }}

### Live demo

More sophisticated demo of the method. You can play around with the arc radius to see how
the path changes. The path is drawn from the starting point _p0_ using `arcTo()` with control points
_p1_ and _p2_ and a radius that varies from 0 to the maximum radius selected with the slider.
Then a `lineTo()` call completes the path to _p2_.

#### HTML

```html
<div>
  <label for="radius">Radius: </label>
  <input name="radius" type="range" id="radius" min="0" max="100" value="50" />
  <label for="radius" id="radius-output">50</label>
</div>
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const controlOut = document.getElementById("radius-output");
const control = document.getElementById("radius");
control.oninput = () => {
  controlOut.textContent = radius = control.value;
};

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };
let radius = control.value; // match with init control value

function labelPoint(p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
}

function drawPoints(points) {
  points.forEach((p, i) => {
    labelPoint(p, { x: 0, y: -20 }, `p${i}`);
  });
}

// Draw arc
function drawArc([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function loop(t) {
  const angle = (t / 1000) % (2 * Math.PI);
  const rr = Math.abs(Math.cos(angle) * radius);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
}

loop(0);
```

#### Result

{{EmbedLiveSample('Live_demo', 315, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
