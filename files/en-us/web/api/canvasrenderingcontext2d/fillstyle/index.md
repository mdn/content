---
title: "CanvasRenderingContext2D: fillStyle property"
short-title: fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.fillStyle
---

{{APIRef}}

The
**`CanvasRenderingContext2D.fillStyle`**
property of the [Canvas 2D API](/en-US/docs/Web/API/Canvas_API) specifies the
color, gradient, or pattern to use inside shapes. The default style is `#000`
(black).

> [!NOTE]
> For more examples of fill and stroke styles, see [Applying styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Value

One of the following:

- A string parsed as CSS {{cssxref("&lt;color&gt;")}} value.
- A {{domxref("CanvasGradient")}} object (a linear or radial gradient).
- A {{domxref("CanvasPattern")}} object (a repeating image).

## Examples

### Changing the fill color of a shape

This example applies a blue fill color to a rectangle.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

#### Result

{{ EmbedLiveSample('Changing_the_fill_color_of_a_shape', 700, 160) }}

### Creating multiple fill colors using loops

In this example, we use two `for` loops to draw a grid of rectangles, each
having a different fill color. To achieve this, we use the two variables `i`
and `j` to generate a unique RGB color for each square, and only modify the
red and green values. (The blue channel has a fixed value.) By modifying the channels,
you can generate all kinds of palettes.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)}
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

The result looks like this:

{{EmbedLiveSample("Creating_multiple_fill_colors_using_loops", "", "160")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific note

In WebKit- and Blink-based browsers, the non-standard and deprecated method
`ctx.setFillColor()` is implemented in addition to this property.

```js
setFillColor(color, /* (optional) */ alpha);
setFillColor(grayLevel, /* (optional) */ alpha);
setFillColor(r, g, b, a);
setFillColor(c, m, y, k, a);
```

## See also

- [Canvas API](/en-US/docs/Web/API/Canvas_API)
- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- Values used by this property:

  - {{cssxref("&lt;color&gt;")}} CSS data type
  - {{domxref("CanvasGradient")}} object
  - {{domxref("CanvasPattern")}} object
