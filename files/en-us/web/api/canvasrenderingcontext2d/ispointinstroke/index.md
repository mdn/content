---
title: "CanvasRenderingContext2D: isPointInStroke() method"
short-title: isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.isPointInStroke
---

{{APIRef}}

The
**`CanvasRenderingContext2D.isPointInStroke()`**
method of the Canvas 2D API reports whether or not the specified point is inside the
area contained by the stroking of a path.

## Syntax

```js-nolint
isPointInStroke(x, y)
isPointInStroke(path, x, y)
```

### Parameters

- `x`
  - : The x-axis coordinate of the point to check.
- `y`
  - : The y-axis coordinate of the point to check.
- `path`
  - : A {{domxref("Path2D")}} path to check against. If unspecified, the current path is
    used.

### Return value

- A boolean value
  - : A Boolean, which is `true` if the point is inside the area contained by
    the stroking of a path, otherwise `false`.

## Examples

### Checking a point in the current path

This example uses the `isPointInStroke()` method to check if a point is
within the area of the current path's stroke.

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In stroke: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
result.innerText = ctx.isPointInStroke(50, 10);
```

#### Result

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### Checking a point in the specified path

Whenever you move the mouse, this example checks whether the cursor is in the stroke of
an elliptical `Path2D` path. If yes, the ellipse's stroke becomes green,
otherwise it is red.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create ellipse
const ellipse = new Path2D();
ellipse.ellipse(150, 75, 40, 60, Math.PI * 0.25, 0, 2 * Math.PI);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.fill(ellipse);
ctx.stroke(ellipse);

// Listen for mouse moves
canvas.addEventListener("mousemove", (event) => {
  // Check whether point is inside ellipse's stroke
  const isPointInStroke = ctx.isPointInStroke(
    ellipse,
    event.offsetX,
    event.offsetY,
  );
  ctx.strokeStyle = isPointInStroke ? "green" : "red";

  // Draw ellipse
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(ellipse);
  ctx.stroke(ellipse);
});
```

#### Result

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
