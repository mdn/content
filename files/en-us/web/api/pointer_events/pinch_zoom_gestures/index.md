---
title: Pinch zoom gestures
slug: Web/API/Pointer_events/Pinch_zoom_gestures
page-type: guide
---

{{DefaultAPISidebar("Pointer Events")}}

Adding _gestures_ to an application can significantly improve the user experience. There are many types of gestures, from the simple single-touch _swipe_ gesture to the more complex multi-touch _twist_ gesture, where the touch points (aka _pointers_) move in different directions.

This example shows how to detect the _pinch/zoom_ gesture, which uses {{domxref("Pointer_events","pointer events")}} to detect whether the user moves two pointers closer or farther apart from each other.

A _live_ version of this application is available on [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html). The [source code is available on GitHub](https://github.com/mdn/dom-examples/blob/main/pointerevents/Pinch_zoom_gestures.html); pull requests and [bug reports](https://github.com/mdn/dom-examples/issues) are welcome.

## Example

In this example, you use the {{domxref("Pointer_events","pointer events")}} to simultaneously detect two pointing devices of any type, including fingers, mice, and pens. The pinch in (zoom out) gesture, which moves the two pointers toward each other, changes the target element's background color to `lightblue`. The pinch out (zoom in) gesture, which moves the two pointers away from each other, changes the target element's background color to `pink`.

### Define touch target

The application uses {{HTMLElement("div")}} to define the pointers' target areas.

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
</style>
```

### Global state

Supporting a two-pointer gesture requires preserving a pointer's event state during various event phases. This application uses two global variables to cache the event state.

```js
// Global vars to cache event state
const evCache = [];
let prevDiff = -1;
```

### Register event handlers

Event handlers are registered for the following pointer events: {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}} and {{domxref("Element/pointerup_event", "pointerup")}}. The handler for {{domxref("Element/pointerup_event", "pointerup")}} is used for the {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerout_event", "pointerout")}} and {{domxref("Element/pointerleave_event", "pointerleave")}} events since these four events have the same semantics in this application.

```js
function init() {
  // Install event handlers for the pointer target
  const el = document.getElementById("target");
  el.onpointerdown = pointerdownHandler;
  el.onpointermove = pointermoveHandler;

  // Use same handler for pointer{up,cancel,out,leave} events since
  // the semantics for these events - in this app - are the same.
  el.onpointerup = pointerupHandler;
  el.onpointercancel = pointerupHandler;
  el.onpointerout = pointerupHandler;
  el.onpointerleave = pointerupHandler;
}
```

### Pointer down

The {{domxref("Element/pointerdown_event", "pointerdown")}} event is fired when a pointer (mouse, pen/stylus or touch point on a touchscreen) makes contact with the _contact surface_. In this application, the event's state must be cached in case this down event is part of a two-pointer pinch/zoom gesture.

```js
function pointerdownHandler(ev) {
  // The pointerdown event signals the start of a touch interaction.
  // This event is cached to support 2-finger gestures
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Pointer move

The {{domxref("Element/pointermove_event", "pointermove")}} event handler detects if a user is invoking a two-pointer pinch/zoom gesture. If two pointers are down, and the distance between the pointers is increasing (signifying a pinch out or zoom in), the element's background color is changed to `pink`, and if the distance between the pointers is decreasing (a pinch in or zoom out), the background color is changed to `lightblue`. In a more sophisticated application, pinch in or pinch out determination could be used to apply application-specific semantics.

When this event is processed, the target's border is set to `dashed` to provide a clear visual indication the element has received a move event.

```js
function pointermoveHandler(ev) {
  // This function implements a 2-pointer horizontal pinch/zoom gesture.
  //
  // If the distance between the two pointers has increased (zoom in),
  // the target element's background is changed to "pink" and if the
  // distance is decreasing (zoom out), the color is changed to "lightblue".
  //
  // This function sets the target element's border to "dashed" to visually
  // indicate the pointer's target received a move event.
  log("pointerMove", ev);
  ev.target.style.border = "dashed";

  // Find this event in the cache and update its record with this event
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache[index] = ev;

  // If two pointers are down, check for pinch gestures
  if (evCache.length === 2) {
    // Calculate the distance between the two pointers
    const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

    if (prevDiff > 0) {
      if (curDiff > prevDiff) {
        // The distance between the two pointers has increased
        log("Pinch moving OUT -> Zoom in", ev);
        ev.target.style.background = "pink";
      }
      if (curDiff < prevDiff) {
        // The distance between the two pointers has decreased
        log("Pinch moving IN -> Zoom out", ev);
        ev.target.style.background = "lightblue";
      }
    }

    // Cache the distance for the next move event
    prevDiff = curDiff;
  }
}
```

### Pointer up

The {{domxref("Element/pointerup_event", "pointerup")}} event is fired when a pointer is raised from the _contact surface_. When this occurs, the event is removed from the event cache and the target element's background color and border are restored to their original values.

In this application, this handler is also used for {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerleave_event", "pointerleave")}} and {{domxref("Element/pointerout_event", "pointerout")}} events.

```js
function pointerupHandler(ev) {
  log(ev.type, ev);
  // Remove this pointer from the cache and reset the target's
  // background and border
  removeEvent(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length < 2) {
    prevDiff = -1;
  }
}
```

### Application UI

The application uses a {{HTMLElement("div")}} element for the touch area and provides buttons to enable logging and to clear the log.

To prevent the browser's default touch behavior from overriding this application's pointer handling, the {{cssxref("touch-action")}} property is applied to the {{HTMLElement("body")}} element.

```html
<body onload="init();" style="touch-action:none">
  <div id="target">
    Touch and Hold with 2 pointers, then pinch in or out.<br />
    The background color will change to pink if the pinch is opening (Zoom In)
    or changes to lightblue if the pinch is closing (Zoom out).
  </div>
  <!-- UI for logging/debugging -->
  <button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
  <button id="clearlog" onclick="clearLog(event);">Clear the log</button>
  <p></p>
  <output></output>
</body>
```

### Miscellaneous functions

These functions support the application but aren't directly involved in the event flow.

#### Cache management

This function helps manage the global event caches `evCache`.

```js
function removeEvent(ev) {
  // Remove this event from the target's cache
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache.splice(index, 1);
}
```

#### Event logging

These functions are used to send event activity to the application's window (to support debugging and learning about the event flow).

```js
// Log events flag
let logEvents = false;

// Logging/debugging functions
function enableLog(ev) {
  logEvents = !logEvents;
}

function log(prefix, ev) {
  if (!logEvents) return;
  const o = document.getElementsByTagName("output")[0];
  o.innerText += `${prefix}:
  pointerID   = ${ev.pointerId}
  pointerType = ${ev.pointerType}
  isPrimary   = ${ev.isPrimary}
`;
}

function clearLog(event) {
  const o = document.getElementsByTagName("output")[0];
  o.textContent = "";
}
```

## See also

- [Pointer Events now in Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; by Matt Brubeck and Jason Weathersby; 2015-Aug-04
- [jQuery Pointer Events Polyfill](https://github.com/jquery-archive/PEP)
- [Gestures](https://material.io/design/interaction/gestures.html); Material Design
