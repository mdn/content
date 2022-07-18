---
title: CanvasRenderingContext2D.drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
page-type: web-api-instance-method
tags:
  - API
  - Accessibility
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.drawFocusIfNeeded
---
{{APIRef}}

The
**`CanvasRenderingContext2D.drawFocusIfNeeded()`**
method of the Canvas 2D API draws a focus ring around the current or given path, if the
specified element is focused.

## Syntax

```js
drawFocusIfNeeded(element)
drawFocusIfNeeded(path, element)
```

### Parameters

- `element`
  - : The element to check whether it is focused or not.
- `path`
  - : A {{domxref("Path2D")}} path to use.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Managing button focus

This example draws two buttons on a canvas. The `drawFocusIfNeeded()` method
is used to draw a focus ring when appropriate.

#### HTML

```html
<canvas id="canvas">
  <button id="button1">Continue</button>
  <button id="button2">Quit</button>
</canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

document.addEventListener('focus', redraw, true);
document.addEventListener('blur', redraw, true);
canvas.addEventListener('click', handleClick, false);
redraw();

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton(button1, 20, 20);
  drawButton(button2, 20, 80);
}

function handleClick(e) {
  // Calculate click coordinates
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // Focus button1, if appropriate
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // Focus button2, if appropriate
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // Button background
  ctx.fillStyle = active ? 'pink' : 'lightgray';
  ctx.fillRect(x, y, width, height);

  // Button text
  ctx.font = '15px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = active ? 'blue' : 'black';
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // Define clickable area
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // Draw focus ring, if appropriate
  ctx.drawFocusIfNeeded(el);
}
```

#### Result

{{EmbedLiveSample('Managing_button_focus', 700, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
