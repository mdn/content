---
title: "CanvasRenderingContext2D: lineWidth property"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.lineWidth
---

{{APIRef}}

The
**`CanvasRenderingContext2D.lineWidth`**
property of the Canvas 2D API sets the thickness of lines.

> [!NOTE]
> Lines can be drawn with the
> {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}},
> {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}},
> and {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} methods.

## Value

A number specifying the line width, in coordinate space units. Zero, negative, {{jsxref("Infinity")}}, and {{jsxref("NaN")}} values are ignored. This value is `1.0` by default.

## Examples

### Changing line width

This example draws a line and a rectangle, using a line width of 15 units.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(130, 130);
ctx.rect(40, 40, 70, 70);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Changing_line_width', 700, 180) }}

### More examples

For more examples and explanation about this property, see [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the [Canvas Tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
