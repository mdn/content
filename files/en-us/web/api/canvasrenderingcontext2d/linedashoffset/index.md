---
title: "CanvasRenderingContext2D: lineDashOffset property"
short-title: lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.lineDashOffset
---

{{APIRef}}

The
**`CanvasRenderingContext2D.lineDashOffset`**
property of the Canvas 2D API sets the line dash offset, or "phase."

> **Note:** Lines are drawn by calling the
> {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} method.

## Value

A float specifying the amount of the line dash offset. The default value is `0.0`.

## Examples

### Offsetting a line dash

This example draws two dashed lines. The first has no dash offset. The second has a
dash offset of 4.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// Dashed line with no offset
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Dashed line with offset of 4
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Result

The line with a dash offset is drawn in red.

{{ EmbedLiveSample('Offsetting_a_line_dash', 700, 180) }}

### Marching ants

The [marching ants](https://en.wikipedia.org/wiki/Marching_ants) effect is
an animation technique often found in selection tools of computer graphics programs. It
helps the user to distinguish the selection border from the image background by
animating the border.

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{ EmbedLiveSample('Marching_ants', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
