---
title: "CanvasRenderingContext2D: textRendering property"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CanvasRenderingContext2D.textRendering
---

{{APIRef}}{{SeeCompatTable}}

The **`CanvasRenderingContext2D.textRendering`** property of the [Canvas API](/en-US/docs/Web/API/Canvas_API) provides information to the rendering engine about what to optimize for when rendering text.

The values correspond to the SVG [`text-rendering`](/en-US/docs/Web/SVG/Attribute/text-rendering) attribute (and CSS [`text-rendering`](/en-US/docs/Web/CSS/text-rendering) property).

## Value

A text-rendering hint to the browser engine.
This one of:

- `auto`
  - : The browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text.
- `optimizeSpeed`
  - : The browser emphasizes rendering speed over legibility and geometric precision when drawing text.
    It disables kerning and ligatures.
- `optimizeLegibility`
  - : The browser emphasizes legibility over rendering speed and geometric precision.
    This enables kerning and optional ligatures.
- `geometricPrecision`

  - : The browser emphasizes geometric precision over rendering speed and legibility.
    Certain aspects of fonts — such as kerning — don't scale linearly.
    For large scale factors, you might see less-than-beautiful text rendering, but the size is what you would expect (neither rounded up nor down to the nearest font size supported by the underlying operating system).

The property can be used to get or set the value.

## Examples

In this example we display the text "Hello World" using each of the supported values of the `textRendering` property.
The value is also displayed for each case by reading the property.

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Default (auto)
ctx.fillText(`Hello world (default: ${ctx.textRendering})`, 5, 20);

// Text rendering: optimizeSpeed
ctx.textRendering = "optimizeSpeed";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 50);

// Text rendering: optimizeLegibility
ctx.textRendering = "optimizeLegibility";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 80);

// Text rendering: geometricPrecision
ctx.textRendering = "geometricPrecision";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 110);
```

### Result

{{ EmbedLiveSample('Examples', 700, 230) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
