---
title: CanvasRenderingContext2D.miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.miterLimit
---
{{APIRef}}

The **`CanvasRenderingContext2D.miterLimit`** property of the
Canvas 2D API sets the miter limit ratio.

> **Note:** For more info about miters, see [Applying
> styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the [Canvas
> tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Syntax

```js
ctx.miterLimit = value;
```

### Options

- `value`
  - : A number specifying the miter limit ratio, in coordinate space units. Zero,
    negative, {{jsxref("Infinity")}}, and {{jsxref("NaN")}} values are ignored. The
    default value is `10.0`.

## Examples

### Using the `miterLimit` property

See the chapter [Applying
styles and color](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_demo_of_the_miterlimit_property) in the [Canvas
tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial) for more information.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineWidth = 15;
ctx.lineTo(100, 100);
ctx.stroke();</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "400", "180",
  "canvas_miterlimit.png",
  "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific notes

- In WebKit- and Blink-based Browsers, a non-standard and deprecated method
  `ctx.setMiterLimit()` is implemented in addition to this property.

### Gecko-specific notes

- Starting Gecko 2.0 {{geckoRelease("2.0")}}, setting `miterLimit` to a
  negative value no longer throws an exception; instead, it properly ignores
  non-positive values.

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
