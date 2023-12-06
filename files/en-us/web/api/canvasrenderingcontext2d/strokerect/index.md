---
title: "CanvasRenderingContext2D: strokeRect() method"
short-title: strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.strokeRect
---

{{APIRef}}

The
**`CanvasRenderingContext2D.strokeRect()`**
method of the Canvas 2D API draws a rectangle that is stroked (outlined) according to
the current {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} and other
context settings.

This method draws directly to the canvas without modifying the current path, so any
subsequent {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} or
{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} calls will have no effect
on it.

## Syntax

```js-nolint
strokeRect(x, y, width, height)
```

The `strokeRect()` method draws a stroked rectangle whose starting point is
at `(x, y)` and whose size is specified by `width` and
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

### A simple stroked rectangle

This example draws a rectangle with a green outline using the `strokeRect()`
method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The rectangle's top-left corner is at (20, 10). It has a width of 160 and a height of
100\.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "green";
ctx.strokeRect(20, 10, 160, 100);
```

#### Result

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### Applying various context settings

This example draws a rectangle with a drop shadow and thick, beveled outlines.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowColor = "#d53";
ctx.shadowBlur = 20;
ctx.lineJoin = "bevel";
ctx.lineWidth = 15;
ctx.strokeStyle = "#38f";
ctx.strokeRect(30, 30, 160, 90);
```

#### Result

{{ EmbedLiveSample('Applying_various_context_settings', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
