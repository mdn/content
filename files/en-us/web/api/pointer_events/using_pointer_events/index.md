---
title: Using Pointer Events
slug: Web/API/Pointer_events/Using_Pointer_Events
page-type: guide
browser-compat: api.PointerEvent
---

{{DefaultAPISidebar("Pointer Events")}}

This guide demonstrates how to use [pointer events](/en-US/docs/Web/API/Pointer_events) and the HTML {{HTMLElement("canvas")}} element to build a multi-touch enabled drawing application. This example is based on the one in the [touch events overview](/en-US/docs/Web/API/Touch_events), except it uses the {{domxref("PointerEvent","pointer events", "", 1)}} input event model. Another difference is that because pointer events are pointer device agnostic, the application accepts coordinate-based inputs from a mouse, a pen, or a fingertip using the same code.

This application will only work on a browser that supports pointer events.

## Definitions

- Surface
  - : A touch-sensitive surface. This may be a trackpad, a touch screen, or even a virtual mapping of a user's desk surface (or mousepad) with the physical screen.
- Touch point
  - : A point of contact with the surface. This may be a finger (or elbow, ear, nose, whatever, but typically a finger), stylus, mouse, or any other method for specifying a single point on the surface.

## Examples

> [!NOTE]
> The text below uses the term "finger" when describing the contact with the surface, but it could, of course, also be a stylus, mouse, or other method of pointing at a location.

### Drawing application

#### HTML

The HTML consists of a single {{HTMLElement("canvas")}} element. Curves will be drawn in response to the user's touch gestures. A button is also included to clear the canvas.

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support the canvas element.
</canvas>
<button id="clear">Clear canvas</button>
```

#### CSS

The {{cssxref("touch-action")}} property is set to `none` to prevent the browser from applying its default touch behavior to the application.

```css
#canvas {
  border: solid black 1px;
  touch-action: none;
  display: block;
}
```

#### JavaScript

We will keep track of all ongoing touches and draw lines for each of them. The `colors` are used to distinguish between different fingers.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mapping from the pointerId to the current finger position
const ongoingTouches = new Map();
const colors = ["red", "green", "blue"];
```

The `handleStart` function listens to the {{domxref("Element/pointerdown_event", "pointerdown")}} event and draws a circle at the start of the touch.

```js
function handleStart(event) {
  const touch = {
    pageX: event.pageX,
    pageY: event.pageY,
    color: colors[ongoingTouches.size % colors.length],
  };
  ongoingTouches.set(event.pointerId, touch);

  ctx.beginPath();
  ctx.arc(touch.pageX, touch.pageY, 4, 0, 2 * Math.PI, false);
  ctx.fillStyle = touch.color;
  ctx.fill();
}

canvas.addEventListener("pointerdown", handleStart, false);
```

The `handleEnd` function listens to the {{domxref("Element/pointerup_event", "pointerup")}} event and draws a square at the end of the touch.

```js
function handleEnd(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`End: Could not find touch ${event.pointerId}`);
    return;
  }

  ctx.lineWidth = 4;
  ctx.fillStyle = touch.color;
  ctx.beginPath();
  ctx.moveTo(touch.pageX, touch.pageY);
  ctx.lineTo(event.pageX, event.pageY);
  ctx.fillRect(event.pageX - 4, event.pageY - 4, 8, 8);
  ongoingTouches.delete(event.pointerId);
}

canvas.addEventListener("pointerup", handleEnd, false);
```

The `handleCancel` function listens to the {{domxref("Element/pointercancel_event", "pointercancel")}} event and stops tracking the touch.

```js
function handleCancel(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`Cancel: Could not find touch ${event.pointerId}`);
    return;
  }

  ongoingTouches.delete(event.pointerId);
}

canvas.addEventListener("pointercancel", handleCancel, false);
```

The `handleMove` function listens to the {{domxref("Element/pointermove_event", "pointermove")}} event and draws a line between the start and end of the touch.

```js
function handleMove(event) {
  const touch = ongoingTouches.get(event.pointerId);

  // Event was not started
  if (!touch) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(touch.pageX, touch.pageY);
  ctx.lineTo(event.pageX, event.pageY);
  ctx.lineWidth = 4;
  ctx.strokeStyle = touch.color;
  ctx.stroke();

  const newTouch = {
    pageX: event.pageX,
    pageY: event.pageY,
    color: touch.color,
  };

  ongoingTouches.set(event.pointerId, newTouch);
}

canvas.addEventListener("pointermove", handleMove, false);
```

Finally, add clearing functionality.

```js
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
```

{{EmbedLiveSample("drawing_application", "", "700")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pointer events](/en-US/docs/Web/API/Pointer_events)
- [Touch events](/en-US/docs/Web/API/Touch_events)
