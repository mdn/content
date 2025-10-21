---
title: Touch events
slug: Web/API/Touch_events
page-type: web-api-overview
browser-compat:
  - api.Touch
  - api.TouchEvent
  - api.TouchList
spec-urls: https://w3c.github.io/touch-events/
---

{{DefaultAPISidebar("Touch Events")}}

To provide quality support for touch-based user interfaces, touch events offer the ability to interpret finger (or stylus) activity on touch screens or trackpads.

The touch events interfaces are relatively low-level APIs that can be used to support application-specific multi-touch interactions such as a two-finger gesture. A multi-touch interaction starts when a finger (or stylus) first touches the contact surface. Other fingers may subsequently touch the surface and optionally move across the touch surface. The interaction ends when the fingers are removed from the surface. During this interaction, an application receives touch events during the start, move, and end phases.

Touch events are similar to mouse events except they support simultaneous touches and at different locations on the touch surface. The {{domxref("TouchEvent")}} interface encapsulates all of the touchpoints that are currently active. The {{domxref("Touch")}} interface, which represents a single touchpoint, includes information such as the position of the touch point relative to the browser viewport.

## Definitions

- Surface
  - : The touch-sensitive surface. This may be a screen or trackpad.
- Touch point
  - : A point of contact with the surface. This may be a finger (or elbow, ear, nose, whatever, but typically a finger) or stylus.

## Interfaces

- {{domxref("TouchEvent")}}
  - : Represents an event that occurs when the state of touches on the surface changes.
- {{domxref("Touch")}}
  - : Represents a single point of contact between the user and the touch surface.
- {{domxref("TouchList")}}
  - : Represents a group of touches; this is used when the user has, for example, multiple fingers on the surface at the same time.

## Examples

> [!NOTE]
> The text below uses the term "finger" when describing the contact with the surface, but it could, of course, also be a stylus or other contact method.

### Drawing application

This example tracks multiple touchpoints at a time, allowing the user to draw in a {{HTMLElement("canvas")}} with more than one finger at a time. It will only work on a browser that supports touch events.

#### Create a canvas

The HTML consists of a single {{HTMLElement("canvas")}} element. Curves will be drawn in response to the user's touch gestures. A button is also included to clear the canvas.

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support the canvas element.
</canvas>
<button id="clear">Clear canvas</button>
```

```css
#canvas {
  border: 1px solid black;
  display: block;
}
```

#### Tracking new touches

We will keep track of all ongoing touches and draw lines for each of them.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mapping from the pointerId to the current finger position
const ongoingTouches = new Map();
```

When a {{domxref("Element/touchstart_event", "touchstart")}} event occurs, indicating that a new touch on the surface has occurred, the `handleStart()` function below is called.

```js
function handleStart(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = {
      pageX: changedTouch.pageX,
      pageY: changedTouch.pageY,
      color: colorForTouch(changedTouch),
    };
    ongoingTouches.set(changedTouch.identifier, touch);
    ctx.beginPath();
    ctx.arc(touch.pageX, touch.pageY, 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = touch.color;
    ctx.fill();
  }
}

canvas.addEventListener("touchstart", handleStart);
```

This calls {{domxref("event.preventDefault()")}} to keep the browser from continuing to process the touch event (this also prevents a mouse event from also being delivered). Then we get the context and pull the list of changed touch points out of the event's {{domxref("TouchEvent.changedTouches")}} property.

After that, we iterate over all the {{domxref("Touch")}} objects in the list, pushing them onto an array of active touchpoints and drawing the start point for the draw as a small circle; we're using a 4-pixel wide line, so a 4-pixel radius circle will show up neatly.

To make each touch's drawing look different, the `colorForTouch()` function is used to pick a color based on the touch's unique identifier.
This identifier is an opaque number, but we can at least rely on it differing between the currently-active touches.

```js
function colorForTouch(touch) {
  const r = touch.identifier % 16;
  const g = Math.floor(touch.identifier / 3) % 16;
  const b = Math.floor(touch.identifier / 7) % 16;
  // convert to hex digits
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
```

The result from this function is a string that can be used when calling {{HTMLElement("canvas")}} functions to set drawing colors.
For example, for a {{domxref("Touch.identifier")}} value of 10, the resulting string is "#aa3311".

#### Handling the end of a touch

When the user lifts a finger off the surface, a {{domxref("Element/touchend_event", "touchend")}} event is sent. We handle this by calling the `handleEnd()` function below. Its job is to draw the last line segment for each touch that ended and remove the touchpoint from the ongoing touch map.

```js
function handleEnd(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = touches.get(changedTouch.identifier);
    if (!touch) {
      console.error(`End: Could not find touch ${changedTouch.identifier}`);
      continue;
    }
    ctx.lineWidth = 4;
    ctx.fillStyle = touch.color;
    ctx.beginPath();
    ctx.moveTo(touch.pageX, touch.pageY);
    ctx.lineTo(changedTouch.pageX, changedTouch.pageY);
    ctx.fillRect(changedTouch.pageX - 4, changedTouch.pageY - 4, 8, 8);
    ongoingTouches.delete(changedTouch.identifier);
  }
}

canvas.addEventListener("touchend", handleEnd);
```

This is very similar to the previous function; the only real differences are that we draw a small square to mark the end and that when we call [`Map.delete()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete), we remove the old entry from the ongoing touch map, without adding in the updated information. The result is that we stop tracking that touchpoint.

#### Handling canceled touches

If the user's finger wanders into browser UI, or the touch otherwise needs to be canceled, the {{domxref("Element/touchcancel_event", "touchcancel")}} event is sent, and we call the `handleCancel()` function below.

```js
function handleCancel(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    if (!ongoingTouches.has(changedTouch.identifier)) {
      console.error(`Cancel: Could not find touch ${changedTouch.identifier}`);
      continue;
    }
    ongoingTouches.delete(changedTouch.identifier);
  }
}

canvas.addEventListener("touchcancel", handleCancel);
```

Since the idea is to immediately abort the touch, we remove it from the ongoing touch map without drawing a final line segment.

#### Drawing as the touches move

Each time one or more fingers move, a {{domxref("Element/touchmove_event", "touchmove")}} event is delivered, resulting in our `handleMove()` function being called. Its responsibility in this example is to update the cached touch information and to draw a line from the previous position to the current position of each touch.

```js
function handleMove(event) {
  event.preventDefault();

  for (const changedTouch of event.changedTouches) {
    const touch = ongoingTouches.get(changedTouch.identifier);

    if (!touch) {
      console.error(`Move: Could not find touch ${changedTouch.identifier}`);
      continue;
    }

    ctx.beginPath();
    ctx.moveTo(touch.pageX, touch.pageY);
    ctx.lineTo(changedTouch.pageX, changedTouch.pageY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = touch.color;
    ctx.stroke();

    const newTouch = {
      pageX: changedTouch.pageX,
      pageY: changedTouch.pageY,
      color: touch.color,
    };

    ongoingTouches.set(changedTouch.identifier, newTouch);
  }
}

canvas.addEventListener("touchmove", handleMove);
```

This iterates over the changed touches as well, but it looks in our cached touch information array for the previous information about each touch to determine the starting point for each touch's new line segment to be drawn. This is done by looking at each touch's {{domxref("Touch.identifier")}} property. This property is a unique integer for each touch and remains consistent for each event during the duration of each finger's contact with the surface.

This lets us get the coordinates of the previous position of each touch and use the appropriate context methods to draw a line segment joining the two positions together.

After drawing the line, we call [`Map.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) to replace the previous information about the touchpoint with the current information in the `touches` map.

### Result

You can test this example on mobile devices by touching the box below.

{{EmbedLiveSample('drawing application','100%', 900)}}

> [!NOTE]
> More generally, the example will work on platforms that provide touch events.
> You can test this on desktop platforms that can simulate such events:
>
> - On Firefox enable "touch simulation" in [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (you may need to reload the page).
> - On Chrome use [Device mode](https://developer.chrome.com/docs/devtools/device-mode/) and set the [Device type](https://developer.chrome.com/docs/devtools/device-mode/#type) to one that sends touch events.

## Additional tips

This section provides additional tips on how to handle touch events in your web application.

### Handling clicks

Since calling `preventDefault()` on a {{domxref("Element/touchstart_event", "touchstart")}} or the first {{domxref("Element/touchmove_event", "touchmove")}} event of a series prevents the corresponding mouse events from firing, it's common to call `preventDefault()` on `touchmove` rather than `touchstart`. That way, mouse events can still fire and things like links will continue to work. Alternatively, some frameworks have taken to re-firing touch events as mouse events for this same purpose. (This example is oversimplified and may result in strange behavior. It is only intended as a guide.)

```js
function onTouch(event) {
  event.preventDefault();

  if (
    event.touches.length > 1 ||
    (event.type === "touchend" && event.touches.length > 0)
  )
    return;

  let type;
  let touch;

  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      touch = event.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = event.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = event.changedTouches[0];
      break;
  }

  const newEvent = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: event.originalTarget.ownerDocument.defaultView,
    detail: 0,
    screenX: touch.screenX,
    screenY: touch.screenY,
    clientX: touch.clientX,
    clientY: touch.clientY,
    ctrlKey: event.ctrlKey,
    altKey: event.altKey,
    shiftKey: event.shiftKey,
    metaKey: event.metaKey,
    button: 0,
    relatedTarget: null,
  });

  event.originalTarget.dispatchEvent(newEvent);
}
```

### Calling preventDefault() only on a second touch

One technique for preventing things like `pinchZoom` on a page is to call `preventDefault()` on the second touch in a series. This behavior is not well defined in the touch events spec and results in different behavior for different browsers (i.e., iOS will prevent zooming but still allow panning with both fingers; Android will allow zooming but not panning; Opera and Firefox currently prevent all panning and zooming.) Currently, it's not recommended to depend on any particular behavior in this case, but rather to depend on meta viewport to prevent zooming.

## Specifications

{{Specifications}}

## Browser compatibility

Touch events are typically available on devices with a touch screen, but many browsers make the touch events API unavailable on all desktop devices, even those with touch screens.

The reason for this is that some websites use the availability of parts of the touch events API as an indicator that the browser is running on a mobile device. If the touch events API is available, these websites will assume a mobile device and serve mobile-optimized content. This may then provide a poor experience for users of desktop devices that have touch screens.

To support both touch and mouse across all types of devices, use [pointer events](/en-US/docs/Web/API/Pointer_events) instead.

{{Compat}}
