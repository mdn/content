---
title: GlobalEventHandlers.onpointerdown
slug: Web/API/GlobalEventHandlers/onpointerdown
tags:
  - API
  - Document
  - Element
  - GlobalEventHandlers
  - HTML DOM
  - Pointer Events
  - Pointer Events API
  - PointerEvent
  - Property
  - Reference
  - Window
browser-compat: api.GlobalEventHandlers.onpointerdown
---
{{APIRef("HTML DOM")}}

The {{domxref("GlobalEventHandlers")}} event handler
**`onpointerdown`** is used to specify the event handler for the
{{event("pointerdown")}} event, which is fired when the pointing device is initially
pressed. This event can be sent to {{domxref("Window")}}, {{domxref("Document")}}, and
{{domxref("Element")}} objects.

This is functionally equivalent to the {{event("mousedown")}} event when generated due
to user activity with a mouse or mouse-compatible device. If the
`pointerdown` event isn't canceled through a call to
{{domxref("Event.preventDefault", "preventDefault()")}}, most user agents will fire a
`mousedown` event, so that sites not using pointer events will work.

You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to
add a listener for `pointerdown` events.

## Syntax

```js
target.onpointerdown = downHandler;

var downHandler = target.onpointerdown;
```

### Value

A {{jsxref("Function")}} to handle the `pointerdown` event for the
`target` {{domxref("Element")}}, {{domxref("Document")}}, or
{{domxref("Window")}}. It receives as input the {{domxref("PointerEvent")}} describing
the `pointerdown` event.

## Example

### Responding to pointer down events

This example demonstrates how to watch for and act upon `pointerdown` events
using `onpointerdown`. You could also use `addEventListener()`, of
course.

#### HTML

```html
<div id="target">
    Tap me, click me, or touch me!
</div>
```

#### CSS

The CSS sets up the appearance of the target, and doesn't affect its functionality at all.

```css
#target {
  width: 400px;
  height: 30px;
  text-align: center;
  font: 16px "Open Sans", "Helvetica", sans-serif;
  color: white;
  background-color: blue;
  border: 2px solid darkblue;
  cursor: pointer;
  user-select: none;
}
```

#### JavaScript

```js
var targetBox = document.getElementById("target");

targetBox.onpointerdown = handleDown;

function handleDown(evt) {
  var action;

  switch(evt.pointerType) {
    case "mouse":
      action = "clicking";
      break;
    case "pen":
      action = "tapping";
      break;
    case "touch":
      action = "touching";
      break;
    default:
      action = "interacting with";
      break;
  }

  targetBox.textContent = `Thanks for ${action} me!`;
  evt.preventDefault();
}
```

This uses `onpointerdown` to establish the function
`handleDown()` as the event handler for pointer down events.

The `handleDown()` function, in turn, looks at the value of
{{domxref("PointerEvent.pointerType", "pointerType")}} to determine what kind of
pointing device was used, then uses that information to customize a string to replace
the contents of the target box.

Then the event's {{domxref("Event.preventDefault", "preventDefault()")}} method is
called to ensure that the `mousedown` event isn't triggered, potentially
causing events to be handled twice if we had a handler for those events in case Pointer
Event support is missing.

We also have a handler for {{event("pointerup")}} events:

```js
targetBox.onpointerup = handleUp;

function handleUp(evt) {
  targetBox.textContent = "Tap me, click me, or touch me!";
  evt.preventDefault();
}
```

This code restores the original text into the target box after the
user's interaction with the element ends (for example, when they release the mouse
button, or when they lift the stylus or finger from the screen).

In addition, the event's {{domxref("Event.preventDefault", "preventDefault()")}} method
is called to ensure that the `mouseup` event isn't triggered unnecessarily.

#### Result

The resulting output is shown below. Try tapping, clicking, or touching the box and see
what happens. For full effect, try it with a variety of pointer types.

{{EmbedLiveSample("Responding_to_pointer_down_events", 450, 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pointer events](/en-US/docs/Web/API/Pointer_events)
- [Using Pointer
  Events](/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events)
- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_View/Coordinate_systems)
- [`Document: pointerdown`](/en-US/docs/Web/API/Document/pointerdown_event)
  event
- [`HTMLElement: pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
  event
