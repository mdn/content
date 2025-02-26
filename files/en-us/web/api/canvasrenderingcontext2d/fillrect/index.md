---
title: "CanvasRenderingContext2D: fillRect() method"
short-title: fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.fillRect
---

{{APIRef}}

The
**`CanvasRenderingContext2D.fillRect()`**
method of the Canvas 2D API draws a rectangle that is filled according to the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}.

This method draws directly to the canvas without modifying the current path, so any
subsequent {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} or
{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} calls will have no effect
on it.

## Syntax

```js-nolint
fillRect(x, y, width, height)
```

The `fillRect()` method draws a filled rectangle whose starting point is at
`(x, y)` and whose size is specified by `width` and
`height`. The fill style is determined by the current `fillStyle`
attribute.

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

### A simple filled rectangle

This example draws a filled green rectangle using the `fillRect()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The rectangle's top-left corner is at (20, 10). It has a width of 150 and a height of
100\.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(20, 10, 150, 100);
```

#### Result

{{ EmbedLiveSample('A_simple_filled_rectangle', 700, 180) }}

### Filling the whole canvas

This code snippet fills the entire canvas with a rectangle. This is often useful for
creating a background, on top of which other things may then be drawn. To achieve this,
the dimensions of the rectangle are set to equal the {{HtmlElement("canvas")}} element's
`width` and `height` attributes.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
