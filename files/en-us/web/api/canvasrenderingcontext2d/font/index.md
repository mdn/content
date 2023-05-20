---
title: "CanvasRenderingContext2D: font property"
short-title: font
slug: Web/API/CanvasRenderingContext2D/font
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.font
---

{{APIRef}}

The **`CanvasRenderingContext2D.font`** property of the Canvas 2D API specifies the current text style to use when drawing text.
This string uses the same syntax as the [CSS font](/en-US/docs/Web/CSS/font) specifier.

## Value

A string parsed as CSS {{cssxref("font")}} value. The default font is 10px sans-serif.

## Examples

### Using a custom font

In this example we use the `font` property to specify a custom font weight, size, and family.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### Result

{{ EmbedLiveSample('Using_a_custom_font', 700, 180) }}

### Loading fonts with the CSS Font Loading API

With the help of the {{domxref("FontFace")}} API, you can explicitly load fonts before using them in a canvas.

```js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
  // Ready to use the font in a canvas context
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
