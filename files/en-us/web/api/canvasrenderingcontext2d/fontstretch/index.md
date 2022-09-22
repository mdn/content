---
title: CanvasRenderingContext2D.fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
  - Experimental
browser-compat: api.CanvasRenderingContext2D.fontStretch
---

{{APIRef}}{{SeeCompatTable}}

The **`CanvasRenderingContext2D.fontStretch`** property of the [Canvas API](/en-US/docs/Web/API/Canvas_API) specifies how the font may be expanded or condensed when drawing text.

The property corresponds to the [`font-stretch`](/en-US/docs/Web/CSS/font-stretch) CSS property when used with keywords (percentage values are not supported).

## Value

The font stretch value as a string.
This is one of: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (default), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.

The property can be used to get or set the font stretch value.

## Examples

In this example we display the text "Hello World" using each of the supported values of the `fontStretch` property.
The stretch value is also displayed for each case by reading the property.

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fontFile = new FontFace('30px "Inconsolata"', 'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")', {stretch: '50% 200%'});

document.fonts.add(fontFile);

document.fonts.load('30px "Inconsolata"').then(() => {
ctx.font = '30px "Inconsolata"'
// Default (normal)
ctx.fillText(`Hello world (default: ${ctx.fontStretch})`, 5, 20);

// Font stretch: ultra-condensed
ctx.fontStretch = '60%';
//ctx.fontStretch = 'ultra-condensed';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 50);

// Font stretch: extra-condensed
ctx.fontStretch = 'extra-condensed';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 80);

// Font stretch: condensed
ctx.fontStretch = 'condensed';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 110);

// Font stretch: semi-condensed
ctx.fontStretch = 'semi-condensed';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 140);

// Font stretch: extra-condensed
ctx.fontStretch = 'extra-condensed';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 170);

// Font stretch: semi-expanded
ctx.fontStretch = 'semi-expanded';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 200);

// Font stretch: expanded
ctx.fontStretch = 'expanded';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 230);

// Font stretch: extra-expanded
ctx.fontStretch = 'extra-expanded';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 260);

// Font stretch: ultra-expanded
ctx.fontStretch = 'ultra-expanded';
ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 290);
},
(err) => {
  console.error(err);
});
```

### Result

{{ EmbedLiveSample('Examples', 700, 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
