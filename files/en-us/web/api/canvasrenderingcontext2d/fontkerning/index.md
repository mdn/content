---
title: "CanvasRenderingContext2D: fontKerning property"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.fontKerning
---

{{APIRef}}

The **`CanvasRenderingContext2D.fontKerning`** property of the [Canvas API](/en-US/docs/Web/API/Canvas_API) specifies how font kerning information is used.

Kerning adjusts how adjacent letters are spaced in a proportional font, allowing them to edge into each other's visual area if there is space available.
For example, in well-kerned fonts, the characters `AV`, `Ta` and `We` nest together and make character spacing more uniform and pleasant to read than the equivalent text without kerning.

The property corresponds to the [`font-kerning`](/en-US/docs/Web/CSS/font-kerning) CSS property.

## Value

The property can be used to get or set the value.

Allowed values are:

- `auto`
  - : The browser determines whether font kerning should be used or not.
    For example, some browsers will disable kerning on small fonts, since applying it could harm the readability of text.
- `normal`
  - : Font kerning information stored in the font must be applied.
- `none`
  - : Font kerning information stored in the font is disabled.

## Examples

In this example we display the text "AVA Ta We" using each of the supported values of the `textRendering` property.

### HTML

```html
<canvas id="canvas" width="700" height="140"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px serif";

// Default (auto)
ctx.fillText(`AVA Ta We (default: ${ctx.fontKerning})`, 5, 30);

// Font kerning: normal
ctx.fontKerning = "normal";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 70);

// Font kerning: none
ctx.fontKerning = "none";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 110);
```

### Result

Note that the last string has font kerning disabled, so adjacent characters are evenly spread.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
