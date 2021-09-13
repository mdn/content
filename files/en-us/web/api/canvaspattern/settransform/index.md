---
title: CanvasPattern.setTransform()
slug: Web/API/CanvasPattern/setTransform
tags:
  - API
  - Canvas
  - CanvasPattern
  - Experimental
  - Method
  - Reference
browser-compat: api.CanvasPattern.setTransform
---
{{APIRef("Canvas API")}}

The
**`CanvasPattern.setTransform()`**
method uses an {{domxref("SVGMatrix")}} or {{domxref("DOMMatrix")}} object as the
pattern's transformation matrix and invokes it on the pattern.

## Syntax

```js
void pattern.setTransform(matrix);
```

### Parameters

- `matrix`
  - : An {{domxref("SVGMatrix")}} or {{domxref("DOMMatrix")}} to use as the pattern's
    transformation matrix.

## Examples

### Using the `setTransform` method

This is just a simple code snippet which uses the `setTransform` method to
create a {{domxref("CanvasPattern")}} with the specified pattern transformation from an
{{domxref("SVGMatrix")}}. The pattern gets applied if you set it as the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} and gets drawn onto the
canvas when using the {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}
method, for example.

#### HTML

```html
<canvas id="canvas"></canvas>
<svg id="svg1"></svg>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var svg1 = document.getElementById('svg1');
var matrix = svg1.createSVGMatrix();

var img = new Image();
img.src = 'canvas_createpattern.png';

img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

Note that newer browser versions started to support {{domxref("DOMMatrix")}} as an
input to `setTransform()`, so for example you could replace the
`SVGMatrix` in the above example with the following:

```js
const matrix = new DOMMatrix([1, .2, .8, 1, 0, 0]);
```

#### Editable demo

Here's an editable demo of the code snippet above. Try changing the argument to `SetTransform()` to see the effect it had.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<svg id="svg1" style="display:none"></svg>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
var img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};</textarea>
```

```js hidden
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

var svg1 = document.getElementById('svg1');
var matrix = svg1.createSVGMatrix();

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
```

{{ EmbedLiveSample('Editable_demo', 700, 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasPattern")}}
- {{domxref("SVGMatrix")}}
- {{domxref("DOMMatrix")}}
