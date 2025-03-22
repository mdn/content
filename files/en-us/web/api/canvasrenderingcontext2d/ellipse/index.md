---
title: "CanvasRenderingContext2D: ellipse() method"
short-title: ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.ellipse
---

{{APIRef}}

The
**`CanvasRenderingContext2D.ellipse()`**
method of the Canvas 2D API adds an elliptical arc to the current sub-path.

## Syntax

```js-nolint
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
```

The `ellipse()` method creates an elliptical arc centered at
`(x, y)` with the radii `radiusX` and `radiusY`. The
path starts at `startAngle` and ends at `endAngle`, and travels in
the direction given by `counterclockwise` (defaulting to clockwise).

### Parameters

- `x`
  - : The x-axis (horizontal) coordinate of the ellipse's center.
- `y`
  - : The y-axis (vertical) coordinate of the ellipse's center.
- `radiusX`
  - : The ellipse's major-axis radius. Must be non-negative.
- `radiusY`
  - : The ellipse's minor-axis radius. Must be non-negative.
- `rotation`
  - : The rotation of the ellipse, expressed in radians.
- `startAngle`
  - : The [eccentric angle](https://en.wikipedia.org/wiki/Angular_eccentricity) at which the ellipse starts, measured clockwise from the positive x-axis
    and expressed in radians.
- `endAngle`
  - : The [eccentric angle](https://en.wikipedia.org/wiki/Angular_eccentricity) at which the ellipse ends, measured clockwise from the positive x-axis and
    expressed in radians.
- `counterclockwise` {{optional_inline}}
  - : An optional boolean value which, if `true`, draws the ellipse
    counterclockwise (anticlockwise). The default value is `false`
    (clockwise).

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Drawing a full ellipse

This example draws an ellipse at an angle of π/4 radians (45°). To
make a full ellipse, the arc begins at an angle of 0 radians (0°), and
ends at an angle of 2π radians (360°).

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw the ellipse
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Drawing_a_full_ellipse', 700, 250) }}

### Various elliptical arcs

This example creates three elliptical paths with varying properties.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.fill();
```

#### Result

{{ EmbedLiveSample('Various_elliptical_arcs', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- Use {{domxref("CanvasRenderingContext2D.arc()")}} to draw a circular arc
