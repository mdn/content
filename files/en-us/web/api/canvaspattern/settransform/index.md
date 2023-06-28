---
title: "CanvasPattern: setTransform() method"
short-title: setTransform()
slug: Web/API/CanvasPattern/setTransform
page-type: web-api-instance-method
browser-compat: api.CanvasPattern.setTransform
---

{{APIRef("Canvas API")}}

The **`CanvasPattern.setTransform()`** method uses a {{domxref("DOMMatrix")}} object as the pattern's transformation matrix and invokes it on the pattern.

## Syntax

```js-nolint
setTransform(matrix)
```

### Parameters

- `matrix`
  - : A {{domxref("DOMMatrix")}} to use as the pattern's transformation matrix.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `setTransform` method

This is just a simple code snippet which uses the `setTransform` method to
create a {{domxref("CanvasPattern")}} with the specified pattern transformation from a
{{domxref("DOMMatrix")}}. The pattern gets applied if you set it as the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} and gets drawn onto the
canvas when using the {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}
method, for example.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src = "canvas_createpattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

#### Editable demo

Here's an editable demo of the code snippet above. Try changing the argument to `SetTransform()` to see the effect it had.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
const img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = () => {
  const pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

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

{{ EmbedLiveSample('Editable_demo', 700, 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
