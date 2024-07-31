---
title: "CanvasRenderingContext2D: strokeStyle property"
short-title: strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.strokeStyle
---

{{APIRef}}

The **`CanvasRenderingContext2D.strokeStyle`** property of the
Canvas 2D API specifies the color, gradient, or pattern to use for the strokes
(outlines) around shapes. The default is `#000` (black).

> [!NOTE]
> For more examples of stroke and fill styles, see [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Value

One of the following:

- `color`
  - : A string parsed as [CSS](/en-US/docs/Web/CSS)
    {{cssxref("&lt;color&gt;")}} value.
- `gradient`
  - : A {{domxref("CanvasGradient")}} object (a linear or radial gradient).
- `pattern`
  - : A {{domxref("CanvasPattern")}} object (a repeating image).

## Examples

### Changing the stroke color of a shape

This example applies a blue stroke color to a rectangle.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

#### Result

{{ EmbedLiveSample('Changing_the_stroke_color_of_a_shape', 700, 160) }}

### Creating multiple stroke colors using loops

In this example, we use two `for` loops and the
{{domxref("CanvasRenderingContext2D.arc", "arc()")}} method to draw a grid of circles,
each having a different stroke color. To achieve this, we use the two variables
`i` and `j` to generate a unique RGB color for each circle, and
only modify the green and blue values. (The red channel has a fixed value.)

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

The result looks like this:

{{EmbedLiveSample("Creating_multiple_stroke_colors_using_loops", "", "180")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific note

In WebKit- and Blink-based browsers, the non-standard and deprecated method
`ctx.setStrokeColor()` is implemented in addition to this property.

```js
setStrokeColor(color);
setStrokeColor(color, alpha);
setStrokeColor(grayLevel);
setStrokeColor(grayLevel, alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
