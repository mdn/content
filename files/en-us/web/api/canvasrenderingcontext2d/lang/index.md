---
title: "CanvasRenderingContext2D: lang property"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.lang
---

{{APIRef}}

The **`CanvasRenderingContext2D.lang`** property of the Canvas 2D API gets or sets the language of the canvas drawing context.

## Value

A [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646) representing the language of the canvas context, or `inherit`, in which case the language is inherited from the [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute of the originating {{HTMLElement("canvas")}} element or the nearest available ancestor with an explicit `lang` set.

The default value is `inherit`.

## Description

Sometimes, it is necessary to set a language for a canvas rendering context so that it knows how to render language-dependent features such as some fonts. An on-screen canvas context (`CanvasRenderingContext2D`) is always associated with a particular `<canvas>` element, so whenever you render content using it, it can derive the language from the value of the `<canvas>` element's `lang` attribute.

However, an off-screen canvas context ({{domxref("OffscreenCanvasRenderingContext2D")}}) renders its content before it is associated with a `<canvas>` element, so it can't derive a rendering language from the `lang` attribute of the `<canvas>` element. The `lang` property addresses this issue, allowing you to set a language directly on a canvas rendering context, whether you are using an on-screen or off-screen canvas.

### The `inherit` value

When the `inherit` value is used, the language of the canvas context is inherited from the [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute of the nearest-available HTML source:

- In the case of an on-screen context, or an off-screen context that was transferred from an on-screen context, this will be the originating {{HTMLElement("canvas")}} element, provided it has a valid `lang` attribute set.
- If a `lang` attribute is not available on an associated `<canvas>` element, which could be the case for an on- or off-screen context, this will be the nearest available ancestor with an explicit `lang` set, which is commonly the document root.

Due to technical limitations, the `inherit` value behaves differently for on-screen and off-screen canvases:

- For on-screen canvases, the `lang` value is inherited when the associated `CanvasRenderingContext2D` object is first created; the inherited `lang` value then changes dynamically if the `lang` attribute value is updated.
- For off-screen canvases, the `lang` value is inherited when the associated `OffscreenCanvasRenderingContext2D` object is first created, and then fixed for the lifetime of the {{domxref("OffscreenCanvas")}}. It **does not** change if the `lang` attribute value is updated. Because of this, the language of an off-screen canvas can only be changed by setting the `lang` value explicitly.

## Examples

### Basic usage

```js
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

// Get context language; returns "inherit" by default
console.log(ctx.lang);

// Set context language
ctx.lang = "en";
// Logs "en"
console.log(ctx.lang);
```

### Demonstrating canvas context localization support

In this example, we render a text string to a 2D canvas context in a particular font that has language-dependent ligatures. We allow the canvas context's language to be adjusted so you can see the difference in rendering.

#### HTML

The HTML features a {{htmlelement("select")}} element that allows you to choose a language — `en` (English) or `tr` (Turkish) — and a {{htmlelement("canvas")}} element to render to.

```html live-example___canvas-l10n
<p>
  <label for="lang">Choose language:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

In the JavaScript, we first grab references to the `<canvas>` element, its `CanvasRenderingContext2D`, and the `<select>` element, then load the language-dependant font using the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API). Once the font is loaded, we run an `init()` function. This function defines another function — `drawText()`, which draws some text to the canvas context that uses the loaded font, adds a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) [event listener](/en-US/docs/Web/API/EventTarget/addEventListener) to the `<select>` element, then calls `drawText()` so that the text is immediately drawn to the canvas when the page first loads.

```js live-example___canvas-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures
  "Lato-Medium",
  "url(https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf)",
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    ctx.font = "30px Lato-Medium";
    ctx.color = "black";
    ctx.fillText("finish crafting", 50, 100);
  }

  selectElem.addEventListener("change", () => {
    document.documentElement.lang = selectElem.value;
    drawText();
  });

  drawText();
}
```

When the `<select>` value is changed, the `change` event handler function fires, which:

- Sets the value of the `<html>` element's [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute to the `<select>` element value, effectively changing the language of the document.
- Runs the `drawText()` function. The `CanvasRenderingContext2D.lang` property is set to `inherit` by default, therefore the canvas context inherits the language of the document.

#### Result

The example is rendered as follows:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Try changing the document language using the `<select>` element. When the language is set to English, the font will be rendered with the "fi" ligature. However, when it is set to Turkish, the font will be rendered without the "fi" ligature, because that locale doesn't include it.

### Language support for offscreen canvases

This example is the similar to the previous example, except that the font is rendered to a {{domxref("OffscreenCanvasRenderingContext2D")}} then the resulting bitmap is transferred to the on-screen `<canvas>` to display.

In addition, because an inherited off-screen canvas language is only set once, and not dynamically updated if the inherited `lang` attribute value is changed, we explicitly set the `lang` property on the `OffscreenCanvasRenderingContext2D` instead.

#### HTML

```html live-example___offscreen-l10n
<p>
  <label for="lang">Choose language:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

The JavaScript works in the same way as the previous example, except that:

- The on-screen canvas context is defined as an {{domxref("ImageBitmapRenderingContext")}}.
- We define a new `OffscreenCanvasRenderingContext2D` to draw the text onto, transfer the result to a bitmap using {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}}, then render it on the `<canvas>` using {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap", "transferFromImageBitmap()")}}.
- When the `<select>` value is changed, we update the `lang` property directly on the `OffscreenCanvasRenderingContext2D` instead of changing the `<html>` `lang` attribute value.

```js live-example___offscreen-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(canvasElem.width, canvasElem.height);
const offscreen_ctx = offscreen.getContext("2d");

const selectElem = document.querySelector("select");

let latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures.
  "Lato-Medium",
  "url(https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf)",
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    offscreen_ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    offscreen_ctx.lang = selectElem.value;
    offscreen_ctx.font = "30px Lato-Medium";
    offscreen_ctx.color = "black";
    offscreen_ctx.fillText("finish crafting", 50, 100);

    const bitmap = offscreen.transferToImageBitmap();
    ctx.transferFromImageBitmap(bitmap);
  }

  selectElem.addEventListener("change", () => {
    drawText();
  });

  drawText();
}
```

#### Result

The example is rendered as follows:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) from Igalia (2025)
