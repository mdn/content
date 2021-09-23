---
title: 'Element: mousemove event'
slug: Web/API/Element/mousemove_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - MouseEvent
  - Reference
  - mouse
  - mousemove
  - move
  - pointer
browser-compat: api.Element.mousemove_event
---
{{APIRef}}

The `mousemove` event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example uses the {{domxref("Element/mousedown_event", "mousedown")}}, `mousemove`, and {{domxref("Element/mouseup_event", "mouseup")}} events to allow the user to draw on an HTML5 [canvas](/en-US/docs/Web/API/Canvas_API). Its functionality is simple: the thickness of the line is set to 1, and the color is always black.

When the page loads, constants `myPics` and `context` are created to store a reference to the canvas and the 2d context we will use to draw.

Drawing begins when the `mousedown` event fires. First we store the x and y coordinates of the mouse pointer in the variables `x` and `y`, and then set `isDrawing` to true.

As the mouse moves over the page, the `mousemove` event fires. If `isDrawing` is true, the event handler calls the `drawLine` function to draw a line from the stored `x` and `y` values to the current location.

When the `drawLine()` function returns, we adjust the coordinates and then save them in `x` and `y`.

The `mouseup` event draws the final line segment, sets `x` and `y` to `0`, and stops further drawing by setting `isDrawing` to `false`.

### HTML

```html
<h1>Drawing with mouse events</h1>
<canvas id="myPics" width="560" height="360"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}
```

### JavaScript

```js
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
```

### Result

{{EmbedLiveSample("Examples", 640, 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
