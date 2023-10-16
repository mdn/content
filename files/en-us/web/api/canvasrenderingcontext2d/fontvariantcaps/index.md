---
title: "CanvasRenderingContext2D: fontVariantCaps property"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CanvasRenderingContext2D.fontVariantCaps
---

{{APIRef}}{{SeeCompatTable}}

The **`CanvasRenderingContext2D.fontVariantCaps`** property of the [Canvas API](/en-US/docs/Web/API/Canvas_API) specifies an alternative capitalization of the rendered text.

This corresponds to the CSS [`font-variant-caps`](/en-US/docs/Web/CSS/font-variant-caps) property.

## Value

The font alternative capitalization value, which is one of:

- `normal` (default)
  - : Deactivates of the use of alternate glyphs.
- `small-caps`
  - : Enables display of small capitals (OpenType feature: `smcp`).
    Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.
- `all-small-caps`
  - : Enables display of small capitals for both upper and lowercase letters (OpenType features: `c2sc`, `smcp`).
- `petite-caps`
  - : Enables display of petite capitals (OpenType feature: `pcap`).
- `all-petite-caps`
  - : Enables display of petite capitals for both upper and lowercase letters (OpenType features: `c2pc`, `pcap`).
- `unicase`
  - : Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: `unic`).
- `titling-caps`
  - : Enables display of titling capitals (OpenType feature: `titl`).
    Uppercase letter glyphs are often designed for use with lowercase letters.
    When used in all uppercase titling sequences they can appear too strong.
    Titling capitals are designed specifically for this situation.

The property can be used to get or set the font capitalization value.

Note that there are accessibility concerns with some of these, which are outlined in the corresponding [`font-variant-caps`](/en-US/docs/Web/CSS/font-variant-caps#accessibility_concerns) topic.

## Examples

In this example we display the text "Hello World" using each of the supported values of the `fontVariantCaps` property.
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

// Default (normal)
ctx.fillText(`Hello world (default: ${ctx.fontVariantCaps})`, 5, 20);

// Capitalization: small-caps
ctx.fontVariantCaps = "small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 50);

// Capitalization: all-small-caps
ctx.fontVariantCaps = "all-small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 80);

// Capitalization: petite-caps
ctx.fontVariantCaps = "petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 110);

// Capitalization: all-petite-caps
ctx.fontVariantCaps = "all-petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 140);

// Capitalization: unicase
ctx.fontVariantCaps = "unicase";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 170);

// Capitalization: titling-caps
ctx.fontVariantCaps = "titling-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 200);
```

### Result

{{ EmbedLiveSample('Examples', 700, 230) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
