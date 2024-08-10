---
title: Using Pointer Events
slug: Web/API/Pointer_events/Using_Pointer_Events
page-type: guide
browser-compat: api.PointerEvent
---

{{DefaultAPISidebar("Pointer Events")}}

This guide demonstrates how to use [pointer events](/en-US/docs/Web/API/Pointer_events) and the HTML {{HTMLElement("canvas")}} element to build a multi-touch enabled drawing application. This example is based on the one in the [touch events overview](/en-US/docs/Web/API/Touch_events), except it uses the {{domxref("PointerEvent","pointer events", "", 1)}} input event model. Another difference is that because pointer events are pointer device agnostic, the application accepts coordinate-based inputs from a mouse, a pen, or a fingertip using the same code.

This application will only work on a browser that supports pointer events.

A live version of this application is available on [GitHub](https://mdn.github.io/dom-examples/pointerevents/Using_Pointer_Events.html). The [source code is available on GitHub](https://github.com/mdn/dom-examples/blob/main/pointerevents/Using_Pointer_Events.html) and pull requests and bug reports are welcome.

## Definitions

- Surface
  - : A touch-sensitive surface. This may be a trackpad, a touch screen, or even a virtual mapping of a user's desk surface (or mousepad) with the physical screen.
- Touch point
  - : A point of contact with the surface. This may be a finger (or elbow, ear, nose, whatever, but typically a finger), stylus, mouse, or any other method for specifying a single point on the surface.

## Example

> [!NOTE]
> The text below uses the term "finger" when describing the contact with the surface, but it could, of course, also be a stylus, mouse, or other method of pointing at a location.

## Examples

```html
<canvas
  id="canvas"
  width="600"
  height="600"
  style="border:solid black 1px; touch-action:none">
  Your browser does not support canvas element.
</canvas>
```

```js
const ongoingTouches = [];

const canvas = document.getElementsByTagName("canvas")[0];
const context2d = canvas.getContext("2d");

const colors = ["red", "green", "blue"];

function handleStart(event) {
  console.log(`Starting ${event.pointerId}`);

  const savedTouch = {
    identifier: event.pointerId,
    pageX: event.pageX,
    pageY: event.pageY,
  };

  // Save this touch for later
  ongoingTouches.push(savedTouch);

  const color = colors[ongoingTouches.length % colors.length];
  context2d.beginPath();
  context2d.arc(savedTouch.pageX, savedTouch.pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
  context2d.arc(event.clientX, event.clientY, 4, 0, 2 * Math.PI, false); // a circle at the start
  context2d.fillStyle = color;
  context2d.fill();
}

function handleEnd(event) {
  const identifier = event.pointerId;
  const touchIndex = ongoingTouches.findIndex(
    (t) => t.identifier === identifier,
  );

  console.log(`Ending ${identifier}`);
  if (touchIndex === -1) {
    console.error(`End: Could not find touch #${identifier}`);
    return;
  }

  const touch = ongoingTouches[touchIndex];

  const color = colors[ongoingTouches.length % colors.length];
  context2d.lineWidth = 4;
  context2d.fillStyle = color;
  context2d.beginPath();
  context2d.moveTo(touch.pageX, touch.pageY);
  context2d.lineTo(event.clientX, event.clientY);
  context2d.fillRect(event.clientX - 4, event.clientY - 4, 8, 8); // and a square at the end
  ongoingTouches.splice(touchIndex, 1); // remove it; we're done
}

function handleCancel(evt) {
  const identifier = event.pointerId;
  const touchIndex = ongoingTouches.findIndex(
    (t) => t.identifier === identifier,
  );

  console.log(`Canceling ${identifier}`);
  if (touchIndex === -1) {
    console.error(`Cancel: Could not find touch #${identifier}`);
    return;
  }

  ongoingTouches.splice(touchIndex, 1); // remove it; we're done
}

function handleMove(evt) {
  const identifier = event.pointerId;
  const touchIndex = ongoingTouches.findIndex(
    (t) => t.identifier === identifier,
  );

  // Event was not started
  if (touchIndex === -1) {
    return;
  }

  const touch = ongoingTouches[touchIndex];

  const color = colors[ongoingTouches.length % colors.length];
  context2d.beginPath();
  context2d.moveTo(touch.pageX, touch.pageY);
  context2d.lineTo(event.clientX, event.clientY);
  context2d.lineWidth = 4;
  context2d.strokeStyle = color;
  context2d.stroke();

  const newTouch = {
    identifier: event.pointerId,
    pageX: event.pageX,
    pageY: event.pageY,
  };

  ongoingTouches.splice(touchIndex, 1, newTouch); // swap in the new touch record
}

canvas.addEventListener("pointerdown", handleStart, false);
canvas.addEventListener("pointerup", handleEnd, false);
canvas.addEventListener("pointercancel", handleCancel, false);
canvas.addEventListener("pointermove", handleMove, false);
```

When a {{domxref("Element/pointerdown_event", "pointerdown")}} event occurs, the `handleStart` function will be called, same for the other events

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pointer events](/en-US/docs/Web/API/Pointer_events)
- [Touch events](/en-US/docs/Web/API/Touch_events)
