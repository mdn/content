---
title: "CanvasRenderingContext2D: lineCap property"
short-title: lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.lineCap
---

{{APIRef}}

The
**`CanvasRenderingContext2D.lineCap`**
property of the Canvas 2D API determines the shape used to draw the end points of lines.

> [!NOTE]
> Lines can be drawn with the
> {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}},
> and {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} methods.

## Value

One of the following:

- `"butt"`
  - : The ends of lines are squared off at the endpoints. Default value.
- `"round"`
  - : The ends of lines are rounded.
- `"square"`
  - : The ends of lines are squared off by adding a box with an equal width and half the
    height of the line's thickness.

## Examples

### Changing the shape of line caps

This example rounds the end caps of a straight line.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Changing_the_shape_of_line_caps', 700, 180) }}

### Comparison of line caps

In this example three lines are drawn, each with a different value for the
`lineCap` property. Two guides to see the exact differences between the three
are added. Each of these lines starts and ends exactly on these guides.

The line on the left uses the default `"butt"` option. It's drawn completely
flush with the guides. The second is set to use the `"round"` option. This
adds a semicircle to the end that has a radius half the width of the line. The line on
the right uses the `"square"` option. This adds a box with an equal width and
half the height of the line thickness.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw guides
ctx.strokeStyle = "#09f";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = "black";
["butt", "round", "square"].forEach((lineCap, i) => {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap;
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_caps", "180", "180")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific notes

- In WebKit- and Blink-based Browsers, a non-standard and deprecated method
  `ctx.setLineCap()` is implemented in addition to this property.

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
