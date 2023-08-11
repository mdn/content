---
title: "CanvasRenderingContext2D: fontStretch property"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
page-type: web-api-instance-property
status:
  - experimental
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

First we get the canvas declared in the HTML file and use it to get the `CanvasRenderingContext2D` that will later be used for drawing text.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

The next step in the example is to load a variable font that can be varied in the width axis.
This is needed because `fontStretch` can only stretch a font that contains information about how glyphs are drawn when stretched — otherwise text will be drawn using the closest available font stretch value for the font, which will often be the normal width.

In this case we use [`FontFace`](/en-US/docs/Web/API/FontFace) to define a font face for the [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester) Google Font, which supports font widths from 50% to 200% (allowing us to demonstrate `fontStretch` values from `ultra-condensed` to `ultra-expanded`).
We then add this to the document's [`FontFaceSet`](/en-US/docs/Web/API/FontFaceSet) ([`document.fonts`](/en-US/docs/Web/API/Document/fonts)) so that it can be used for drawing.

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

The code below then calls [`FontFaceSet.load()`](/en-US/docs/Web/API/FontFaceSet/load) to fetch and load the Google Font.
Note that this call sets the size of the font that is needed, and returns a promise that resolves when the font has been loaded.

We then assign the font face we downloaded to the context, and use the context to draw text to the canvas at each of the keyword stretch levels.
Note that again the size of the desired font is specified (this does not have to match the loaded font size).

```js
document.fonts.load("30px Inconsolata").then(
  () => {
    ctx.font = "30px 'Inconsolata'";
    // Default (normal)
    ctx.fillText(`Hello world (default: ${ctx.fontStretch})`, 5, 20);

    ctx.fontStretch = "ultra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 50);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 80);

    ctx.fontStretch = "condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 110);

    ctx.fontStretch = "semi-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 140);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 170);

    ctx.fontStretch = "semi-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 200);

    ctx.fontStretch = "expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 230);

    ctx.fontStretch = "extra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 260);

    ctx.fontStretch = "ultra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 290);
  },
  (err) => {
    console.error(err);
  },
);
```

### Result

{{ EmbedLiveSample('Examples', 700, 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
