---
title: CanvasRenderingContext2D.scrollPathIntoView()
slug: Web/API/CanvasRenderingContext2D/scrollPathIntoView
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Experimental
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.scrollPathIntoView
---
{{APIRef}} {{SeeCompatTable}}

The
**`CanvasRenderingContext2D.scrollPathIntoView()`**
method of the Canvas 2D API scrolls the current or given path into view. It is similar
to {{domxref("Element.scrollIntoView()")}}.

## Syntax

```js
void ctx.scrollPathIntoView();
void ctx.scrollPathIntoView(path);
```

### Parameters

- `path`
  - : A {{domxref("Path2D")}} path to use.

## Examples

### Using the scrollPathIntoView method

This example demonstrates the `scrollPathIntoView()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillRect(10, 10, 30, 30);
ctx.scrollPathIntoView();
```

#### Editable demo

Edit the code below to see your changes update live in the canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas">
<input id="button" type="range" min="1" max="12">
</canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.scrollPathIntoView();</textarea>
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

{{ EmbedLiveSample('Editable_demo', 700, 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("Element.scrollIntoView()")}}
