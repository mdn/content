---
title: "CanvasRenderingContext2D: lineJoin property"
short-title: lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.lineJoin
---

{{APIRef}}

The
**`CanvasRenderingContext2D.lineJoin`**
property of the Canvas 2D API determines the shape used to join two line segments where
they meet.

This property has no effect wherever two connected segments have the same direction,
because no joining area will be added in this case. Degenerate segments with a length of
zero (i.e., with all endpoints and control points at the exact same position) are also
ignored.

> **Note:** Lines can be drawn with the
> {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}},
> {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}},
> and {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} methods.

## Value

There are three possible values for this property: `"round"`, `"bevel"`, and `"miter"`. The default is `"miter"`.

![Three horizontal zigzag lines with round, bevel, and miter values, shown from top to bottom respectively.](canvas_linejoin.png)

- `"round"`
  - : Rounds off the corners of a shape by filling an additional sector of disc centered
    at the common endpoint of connected segments. The radius for these rounded corners is
    equal to the line width.
- `"bevel"`
  - : Fills an additional triangular area between the common endpoint of connected
    segments, and the separate outside rectangular corners of each segment.
- `"miter"`
  - : Connected segments are joined by extending their outside edges to connect at a
    single point, with the effect of filling an additional lozenge-shaped area. This
    setting is affected by the {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}} property. Default value.

## Examples

### Changing the joins in a path

This example applies rounded line joins to a path.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Changing_the_joins_in_a_path', 700, 180) }}

### Comparison of line joins

The example below draws three different paths, demonstrating each of the three
`lineJoin` options.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");
ctx.lineWidth = 10;

["round", "bevel", "miter"].forEach((join, i) => {
  ctx.lineJoin = join;
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_joins", "180", "180", "canvas_linejoin.png")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific notes

- In WebKit- and Blink-based Browsers, a non-standard and deprecated method
  `ctx.setLineJoin()` is implemented in addition to this property.

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
