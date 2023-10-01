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

> **Note:** The text below uses the term "finger" when describing the contact with the surface, but it could, of course, also be a stylus, mouse, or other method of pointing at a location.

### Create a canvas

The {{cssxref("touch-action")}} property is set to `none` to prevent the browser from applying its default touch behavior to the application.

```html
<canvas
  id="canvas"
  width="600"
  height="600"
  style="border:solid black 1px; touch-action:none">
  Your browser does not support canvas element.
</canvas>
<br />
<button onclick="startup()">Initialize</button>
<br />
Log:
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

### Setting up the event handlers

When the page loads, the `startup()` function shown below should be called by our {{HTMLElement("body")}} element's `onload` attribute (but in the example we use a button to trigger it, due to limitations of the MDN live example system).

```js
function startup() {
  const el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("pointerdown", handleStart, false);
  el.addEventListener("pointerup", handleEnd, false);
  el.addEventListener("pointercancel", handleCancel, false);
  el.addEventListener("pointermove", handleMove, false);
  log("initialized.");
}
```

This sets up all the event listeners for our {{HTMLElement("canvas")}} element so we can handle the touch events as they occur.

#### Tracking new touches

We'll keep track of the touches in-progress.

```js
const ongoingTouches = [];
```

When a {{domxref("Element/pointerdown_event", "pointerdown")}} event occurs, indicating that a new touch on the surface has occurred, the `handleStart()` function below is called.

```js
function handleStart(evt) {
  log("pointerdown.");
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");

  log(`pointerdown: id = ${evt.pointerId}`);
  ongoingTouches.push(copyTouch(evt));
  const color = colorForTouch(evt);
  ctx.beginPath();
  ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
  ctx.arc(evt.clientX, evt.clientY, 4, 0, 2 * Math.PI, false); // a circle at the start
  ctx.fillStyle = color;
  ctx.fill();
}
```

After storing some of the event's processing in the `ongoingTouches` for later processing, the start point is drawn as a small circle. We're using a 4-pixel wide line, so a 4 pixel radius circle will show up neatly.

#### Drawing as the pointers move

Each time one or more pointers moves, a {{domxref("Element/pointermove_event", "pointermove")}} event is delivered, resulting in our `handleMove()` function being called. Its responsibility in this example is to update the cached touch information and to draw a line from the previous position to the current position of each touch.

```js
function handleMove(evt) {
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");
  const color = colorForTouch(evt);
  const idx = ongoingTouchIndexById(evt.pointerId);

  log(`continuing touch: idx =  ${idx}`);
  if (idx >= 0) {
    ctx.beginPath();
    log(
      `ctx.moveTo(${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY});`,
    );
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    log(`ctx.lineTo(${evt.clientX}, ${evt.clientY});`);
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();

    ongoingTouches.splice(idx, 1, copyTouch(evt)); // swap in the new touch record
    log(".");
  } else {
    log(`can't figure out which touch to continue: idx = ${idx}`);
  }
}
```

This function looks in our cached touch information array for the previous information about each touch to determine the starting point for each touch's new line segment to be drawn. This is done by looking at each touch's {{domxref("PointerEvent.pointerId")}} property. This property is a unique integer for each pointer event, and remains consistent for each event during the duration of each finger's contact with the surface.

This lets us get the coordinates of the previous position of each touch and use the appropriate context methods to draw a line segment joining the two positions together.

After drawing the line, we call [`Array.splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to replace the previous information about the touch point with the current information in the `ongoingTouches` array.

#### Handling the end of a touch

When the user lifts a finger off the surface, a {{domxref("Element/pointerup_event", "pointerup")}} event is sent. We handle this event by calling the `handleEnd()` function below. Its job is to draw the last line segment for the touch that ended and remove the touch point from the ongoing touch list.

```js
function handleEnd(evt) {
  log("pointerup");
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");
  const color = colorForTouch(evt);
  const idx = ongoingTouchIndexById(evt.pointerId);

  if (idx >= 0) {
    ctx.lineWidth = 4;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.fillRect(evt.clientX - 4, evt.clientY - 4, 8, 8); // and a square at the end
    ongoingTouches.splice(idx, 1); // remove it; we're done
  } else {
    log("can't figure out which touch to end");
  }
}
```

This is very similar to the previous function; the only real differences are that we draw a small square to mark the end and that when we call [`Array.splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), we remove the old entry from the ongoing touch list, without adding in the updated information. The result is that we stop tracking that touch point.

#### Handling canceled touches

If the user's finger wanders into browser UI, or the touch otherwise needs to be canceled, the {{domxref("Element/pointercancel_event", "pointercancel")}} event is sent, and we call the `handleCancel()` function below.

```js
function handleCancel(evt) {
  log(`pointercancel: id = ${evt.pointerId}`);
  const idx = ongoingTouchIndexById(evt.pointerId);
  ongoingTouches.splice(idx, 1); // remove it; we're done
}
```

Since the idea is to immediately abort the touch, we remove it from the ongoing touch list without drawing a final line segment.

### Convenience functions

This example uses two convenience functions that should be looked at briefly to help make the rest of the code more clear.

#### Selecting a color for each touch

In order to make each touch's drawing look different, the `colorForTouch()` function is used to pick a color based on the touch's unique identifier. This identifier is an opaque number, but we can at least rely on it differing between the currently-active touches.

```js
function colorForTouch(touch) {
  let r = touch.pointerId % 16;
  let g = Math.floor(touch.pointerId / 3) % 16;
  let b = Math.floor(touch.pointerId / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  const color = `#${r}${g}${b}`;
  log(`color for touch with identifier ${touch.pointerId} = ${color}`);
  return color;
}
```

The result from this function is a string that can be used when calling {{HTMLElement("canvas")}} functions to set drawing colors. For example, for a {{domxref("PointerEvent.pointerId")}} value of 10, the resulting string is "#aaa".

#### Copying a touch object

Some browsers may re-use touch objects between events, so it's best to copy the bits you care about, rather than referencing the entire object.

```js
function copyTouch(touch) {
  return {
    identifier: touch.pointerId,
    pageX: touch.clientX,
    pageY: touch.clientY,
  };
}
```

#### Finding an ongoing touch

The `ongoingTouchIndexById()` function below scans through the `ongoingTouches` array to find the touch matching the given identifier, then returns that touch's index into the array.

```js
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id === idToFind) {
      return i;
    }
  }
  return -1; // not found
}
```

#### Showing what's going on

```js
function log(msg) {
  const p = document.getElementById("log");
  p.innerHTML = `${msg}\n${p.innerHTML}`;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pointer events](/en-US/docs/Web/API/Pointer_events)
- [Touch events](/en-US/docs/Web/API/Touch_events)
