---
title: CanvasRenderingContext2D.font
slug: Web/API/CanvasRenderingContext2D/font
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.font
---
{{APIRef}}

The
**`CanvasRenderingContext2D.font`**
property of the Canvas 2D API specifies the current text style to use when drawing text.
This string uses the same syntax as the [CSS font](/en-US/docs/Web/CSS/font)
specifier.

## Value

A string parsed as CSS {{cssxref("font")}} value. The default font is 10px sans-serif.

## Examples

### Using a custom font

In this example we use the `font` property to specify a custom font weight,
size, and family.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = 'bold 48px serif';
ctx.strokeText('Hello world', 50, 100);
```

#### Result

{{ EmbedLiveSample('Using_a_custom_font', 700, 180) }}

### Loading fonts with the CSS Font Loading API

With the help of the {{domxref("FontFace")}} API, you can explicitly load fonts before
using them in a canvas.

```js
let f = new FontFace('test', 'url(x)');

f.load().then(() => {
  // Ready to use the font in a canvas context
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Gecko-specific notes

- In Gecko-based browsers, such as Firefox, a non-standard and deprecated property
  `ctx.mozTextStyle` is implemented besides this property. Use
  `ctx.font` instead.
- In Gecko, when setting a system font as the value of a canvas 2D context's
  {{domxref("CanvasRenderingContext2D.font", "font")}} (e.g., `menu`),
  getting the font value used to fail to return the expected font (it returns nothing).
  This is fixed in Firefox's [Quantum/Stylo](https://wiki.mozilla.org/Quantum/Stylo) parallel CSS engine,
  released in Firefox 57 ({{bug(1374885)}}).

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
