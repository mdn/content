---
title: Drawing text
slug: Web/API/Canvas_API/Tutorial/Drawing_text
page-type: guide
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

After having seen how to [apply styles and colors](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the previous chapter, we will now have a look at how to draw text onto the canvas.

## Drawing text

The canvas rendering context provides two methods to render text:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

### A `fillText` example

The text is filled using the current `fillStyle`.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### A `strokeText` example

The text is filled using the current `strokeStyle`.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## Styling text

In the examples above we are already making use of the `font` property to make the text a bit larger than the default size. There are some more properties which let you adjust the way the text gets displayed on the canvas:

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : The current text style being used when drawing text. This string uses the same syntax as the [CSS](/en-US/docs/Web/CSS) {{cssxref("font")}} property. The default font is 10px sans-serif.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Text alignment setting. Possible values: `start`, `end`, `left`, `right` or `center`. The default value is `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. The default value is `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Directionality. Possible values: `ltr`, `rtl`, `inherit`. The default value is `inherit`.

These properties might be familiar to you, if you have worked with CSS before.

The following diagram from the [WHATWG](https://whatwg.org/) demonstrates the various baselines supported by the `textBaseline` property.![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](baselines.png)

### A textBaseline example

Edit the code below and see your changes update live in the canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('A_textBaseline_example', 700, 400) }}

## Advanced text measurements

In the case you need to obtain more details about the text, the following method allows you to measure it.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object containing the width, in pixels, that the specified text will be when drawn in the current text style.

The following code snippet shows how you can measure a text and get its width.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Accessibility concerns

The `<canvas>` element is just a bitmap and does not provide information about any drawn objects. Text written on canvas can cause legibility issues with users relying on screen magnification. The pixels within a canvas element do not scale and can become blurry with magnification. This is because they are not a vector but letter-shaped collection of pixels. When zooming in on it, the pixels become bigger.

Canvas content is not exposed to accessibility tools like semantic HTML is. In general, you should avoid using canvas in an accessible website or app. An alternative is to use HTML elements or SVG instead of canvas.

## Gecko-specific notes

In Gecko (the rendering engine of Firefox, Firefox OS and other Mozilla based applications), some [prefixed APIs](/en-US/docs/Web/API/CanvasRenderingContext2D#prefixed_apis) were implemented in earlier versions to draw text on a canvas. These are now deprecated and removed, and are no longer guaranteed to work.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
