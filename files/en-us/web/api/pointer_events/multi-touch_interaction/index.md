---
title: Multi-touch interaction
slug: Web/API/Pointer_events/Multi-touch_interaction
page-type: guide
tags:
  - Guide
  - Pointer Events
  - touch
---
{{DefaultAPISidebar("Pointer Events")}}

Pointer events extend DOM input events to support various pointing input devices such as pen/stylus and touch screens as well as mouse. The _pointer_ is a hardware-agnostic device that can target a specific set of screen coordinates. Having a single event model for pointers can simplify creating Web sites, applications and provide a good user experience regardless of the user's hardware.

Pointer events have many similarities to mouse events but they support multiple simultaneous pointers such as multiple fingers on a touch screen. This additional feature can be used to provide richer user interaction models but at the cost of additional complexity in the multi-touch interaction handling. This document demonstrates via example code, using pointer events with different multi-touch interactions.

A _live_ version of this application is available on [GitHub](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html). The [source code is available on GitHub](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html); pull requests and [bug reports](https://github.com/mdn/dom-examples/issues) are welcome.

## Example

This example demonstrates using pointer events' various event types ({{domxref("HTMLElement/pointerdown_event", "pointerdown")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}}, {{domxref("HTMLElement/pointerup_event", "pointerup")}} {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, etc.) for different multi-touch interactions.

### Define touch targets

The application uses {{HTMLElement("div")}} to define three different touch target areas.

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target1 {
    background: white;
    border: 1px solid black;
  }
  #target2 {
    background: white;
    border: 1px solid black;
  }
  #target3 {
    background: white;
    border: 1px solid black;
  }
</style>
```

### Global state

To support multi-touch interaction, preserving a pointer's event state during various event phases is required. This application uses three arrays to cache event state, one cache per target element.

```js
// Log events flag
const logEvents = false;

// Event caches, one per touch target
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### Register event handlers

Event handlers are registered for the following pointer events: {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}} and {{domxref("HTMLElement/pointerup_event", "pointerup")}}. The handler for {{domxref("HTMLElement/pointerup_event", "pointerup")}} is used for the {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}} and {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} events, since these four events have the same semantics in this application.

```js
function set_handlers(name) {
 // Install event handlers for the given element
 const el = document.getElementById(name);
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Use same handler for pointer{up,cancel,out,leave} events since
 // the semantics for these events - in this app - are the same.
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}

function init() {
 set_handlers("target1");
 set_handlers("target2");
 set_handlers("target3");
}
```

### Pointer down

The {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event is fired when a pointer (mouse, pen/stylus or touch point on a touchscreen) makes contact with the _contact surface_. The event's state must be cached, in case this down event is part of a multi-touch interaction.

In this application, when a pointer is placed down on an element, the background color of the element changes, depending on the number of active touch points the element has. See the [`update_background`](#update_background_color) function for more details about the color changes.

```js
function pointerdown_handler(ev) {
 // The pointerdown event signals the start of a touch interaction.
 // Save this event for later processing (this could be part of a
 // multi-touch interaction) and update the background color
 push_event(ev);
 if (logEvents) log(`pointerDown: name = ${ev.target.id}`, ev);
 update_background(ev);
}
```

### Pointer move

The {{domxref("HTMLElement/pointermove_event", "pointermove")}} handler is called when the pointer moves. It may be called multiple times (for example, if the user moves the pointer) before a different event type is fired.

In this application, a pointer move is represented by the target's border being set to `dashed` to provide a clear visual indication that the element has received this event.

```js
function pointermove_handler(ev) {
 // Note: if the user makes more than one "simultaneous" touch, most browsers
 // fire at least one pointermove event and some will fire several pointermoves.
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the target received a move event.
 if (logEvents) log("pointerMove", ev);
 update_background(ev);
 ev.target.style.border = "dashed";
}
```

### Pointer up

The {{domxref("HTMLElement/pointerup_event", "pointerup")}} event is fired when a pointer is raised from the _contact surface_. When this occurs, the event is removed from the associated event cache.

In this application, this handler is also used for {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} and {{domxref("HTMLElement/pointerout_event", "pointerout")}} events.

```js
function pointerup_handler(ev) {
  if (logEvents) log(ev.type, ev);
  // Remove this touch point from the cache and reset the target's
  // background and border
  remove_event(ev);
  update_background(ev);
  ev.target.style.border = "1px solid black";
}
```

### Application UI

The application uses {{HTMLElement("div")}} elements for the touch areas and provides buttons to enable logging and to clear the log.

To prevent the browser's default touch behavior from overriding this application's pointer handling, the {{cssxref("touch-action")}} property is applied to the {{HTMLElement("body")}} element.

```html
<body onload="init();" style="touch-action:none">
 <div id="target1"> Tap, Hold or Swipe me 1</div>
 <div id="target2"> Tap, Hold or Swipe me 2</div>
 <div id="target3"> Tap, Hold or Swipe me 3</div>

 <!-- UI for logging/debugging -->
 <button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
 <button id="clearlog" onclick="clearLog(event);">Clear the log</button>
 <p></p>
 <output></output>
</body>
```

### Miscellaneous functions

These functions support the application but aren't directly involved with the event flow.

#### Cache management

These functions manage the global event caches `evCache1`, `evCache2` and `evCache3`.

```js
function get_cache(ev) {
 // Return the cache for this event's target element
 switch(ev.target.id) {
   case "target1": return evCache1;
   case "target2": return evCache2;
   case "target3": return evCache3;
   default: log("Error with cache handling",ev);
 }
}

function push_event(ev) {
 // Save this event in the target's cache
 const cache = get_cache(ev);
 cache.push(ev);
}

function remove_event(ev) {
 // Remove this event from the target's cache
 const cache = get_cache(ev);
 for (let i = 0; i < cache.length; i++) {
   if (cache[i].pointerId === ev.pointerId) {
     cache.splice(i, 1);
     break;
   }
 }
}
```

#### Update background color

The background color of the touch areas will change as follows: no active touches is `white`; one active touch is `yellow`; two simultaneous touches is `ping` and three or more simultaneous touches is `lightblue`.

```js
function update_background(ev) {
 // Change background color based on the number of simultaneous touches/pointers
 // currently down:
 //   white - target element has no touch points i.e. no pointers down
 //   yellow - one pointer down
 //   pink - two pointers down
 //   lightblue - three or more pointers down
 const evCache = get_cache(ev);
 switch (evCache.length) {
   case 0:
     // Target element has no touch points
     ev.target.style.background = "white";
     break;
   case 1:
     // Single touch point
     ev.target.style.background = "yellow";
     break;
   case 2:
     // Two simultaneous touch points
     ev.target.style.background = "pink";
     break;
   default:
     // Three or more simultaneous touches
     ev.target.style.background = "lightblue";
 }
}
```

#### Event logging

These functions are used send to event activity to the application window (to support debugging and learning about the event flow).

```js
// Log events flag
let logEvents = false;

function enableLog(ev) {
  logEvents = !logEvents;
}

function log(name, ev) {
  const o = document.getElementsByTagName('output')[0];
  const s = `${name}:<br>`
    + `  pointerID   = ${ev.pointerId}<br>`
    + `  pointerType = ${ev.pointerType}<br>`
    + `  isPrimary   = ${ev.isPrimary}`;
  o.innerHTML += `${s}<br>`;
}

function clearLog(event) {
 const o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
```
