---
title: UI Events
slug: Web/API/UI_Events
page-type: web-api-overview
spec-urls: https://w3c.github.io/uievents/
---

{{DefaultAPISidebar("UI Events")}}

## Concepts and Usage

The UI Events API defines a system for handling user interactions such as mouse and keyboard input. This includes:

- events that are fired on specific user actions such keypresses or mouse clicks. Most of these events fire on the {{domxref("Element")}} interface, but the events relating to loading and unloading resources fire on the {{domxref("Window")}} interface.
- event interfaces, which are passed into handlers for these events. These interfaces inherit from {{domxref("Event")}} and provide extra information specific to the type of user interaction: for example, the {{domxref("KeyboardEvent")}} is passed into a {{domxref("Element.keydown_event", "keydown")}} event handler and provides information about the key that was pressed.

## Interfaces

- {{domxref("CompositionEvent")}}
  - : Passed into handlers for composition events. Composition events enable a user to enter characters that might not be available on the physical keyboard.
- {{domxref("FocusEvent")}}
  - : Passed into handlers for focus events, which are associated with elements receiving or losing focus.
- {{domxref("InputEvent")}}
  - : Passed into handlers for input events, which are associated with the user entering some input; for example, using an {{HTMLElement("input")}} element.
- {{domxref("KeyboardEvent")}}
  - : Passed into handlers for keyboard up/down events.
- {{domxref("MouseEvent")}}
  - : Passed into event handlers for mouse events, including mouse move, mousing over and out, and mouse button up or down. Note that {{domxref("Element.auxclick_event", "auxclick")}}, {{domxref("Element.click_event", "click")}}, and {{domxref("Element.dblclick_event", "dblclick")}} events are passed {{domxref("PointerEvent")}} objects.
- {{domxref("MouseScrollEvent")}} {{deprecated_inline}}
  - : Deprecated, Firefox-only, non-standard interface for scroll events. Use {{domxref("WheelEvent")}} instead.
- {{domxref("MutationEvent")}} {{deprecated_inline}}
  - : Passed into mutation event handlers, which were designed to allow notifications of changes to the DOM. Now deprecated: use {{domxref("MutationObserver")}} instead.
- {{domxref("UIEvent")}}
  - : A base from which other UI events inherit, and also the event interface passed into some events such as {{domxref("Window.load_event", "load")}} and {{domxref("Window.unload_event", "unload")}}.
- {{domxref("WheelEvent")}}
  - : Passed into the handler for the {{domxref("Element.wheel_event", "wheel")}} event, which fires when the user rotates a mouse wheel or similar user interface component such as a touchpad.

## Events

- {{domxref("Window.abort_event", "abort")}}
  - : Fired when loading a resource has been aborted (for example, because the user canceled it).
- {{domxref("Element.auxclick_event", "auxclick")}}
  - : Fired when the user clicks the non-primary pointer button.
- {{domxref("Element.beforeinput_event", "beforeinput")}}
  - : Fired just before the DOM is about to be updated with some user input.
- {{domxref("Element.blur_event", "blur")}}
  - : Fired when an element has lost focus.
- {{domxref("Element.click_event", "click")}}
  - : Fired when the user clicks the primary pointer button.
- {{domxref("Element.compositionend_event", "compositionend")}}
  - : Fired when a text composition system (such as a speech-to-text processor) has finished its session; for example, because the user has closed it.
- {{domxref("Element.compositionstart_event", "compositionstart")}}
  - : Fired when the user has started a new session with a text composition system.
- {{domxref("Element.compositionupdate_event", "compositionupdate")}}
  - : Fired when a text composition system updates its text with a new character, reflected in an update to the `data` property of the {{domxref("CompositionEvent")}}.
- {{domxref("Element.contextmenu_event", "contextmenu")}}
  - : Fired just before a context menu is invoked.
- {{domxref("Element.dblclick_event", "dblclick")}}
  - : Fired when the user double-clicks the primary pointer button.
- {{domxref("Element.error_event", "error")}}
  - : Fired when a resource fails to load or can't be processed (for example, if an image is invalid or a script has an error).
- {{domxref("Element.focus_event", "focus")}}
  - : Fired when an element has received focus.
- {{domxref("Element.focusin_event", "focusin")}}
  - : Fired when an element is just about to receive focus.
- {{domxref("Element.focusout_event", "focusout")}}
  - : Fired when an element is just about to lose focus.
- {{domxref("Element.input_event", "input")}}
  - : Fired just after the DOM has been updated with some user input (for example, some text input).
- {{domxref("Element.keydown_event", "keydown")}}
  - : Fired when the user has pressed a key.
- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : Fired when the user has pressed a key, only if the key produces a character value. Use {{domxref("Element.keydown_event", "keydown")}} instead.
- {{domxref("Element.keyup_event", "keyup")}}
  - : Fired when the user has released a key.
- {{domxref("Window.load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
- {{domxref("Element.mousedown_event", "mousedown")}}
  - : Fired when the user presses a button on a mouse or other pointing device, while the pointer is over the element.
- {{domxref("Element.mouseenter_event", "mouseenter")}}
  - : Fired when a mouse or other pointing device is moved inside the boundary of the element or one of its descendants.
- {{domxref("Element.mouseleave_event", "mouseleave")}}
  - : Fired when a mouse or other pointing device is moved outside the boundary of the element and all of its descendants.
- {{domxref("Element.mousemove_event", "mousemove")}}
  - : Fired when a mouse or other pointing device is moved while over an element.
- {{domxref("Element.mouseout_event", "mouseout")}}
  - : Fired when a mouse or other pointing device is moved outside the boundary of the element.
- {{domxref("Element.mouseover_event", "mouseover")}}
  - : Fired when a mouse or other pointing device is moved outside the element.
- {{domxref("Element.mouseup_event", "mouseup")}}
  - : Fired when the user releases a button on a mouse or other pointing device, while the pointer is over the element.
- {{domxref("Window.unload_event", "unload")}}
  - : Fired when the document or a child resource are being unloaded.
- {{domxref("Element.wheel_event", "wheel")}}
  - : Fired when the user rotates a mouse wheel or similar user interface component such as a touchpad.

## Examples

### Mouse events

This example logs mouse events along with the X and Y coordinates at which the event was generated. Try moving the mouse into the yellow and red squares, and clicking or double-clicking.

#### HTML

```html
<div id="outer">
  <div id="inner"></div>
</div>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#outer {
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}

#inner {
  height: 100px;
  width: 100px;
  background-color: red;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

outer.addEventListener("click", (event) => {
  log(event);
});

outer.addEventListener("dblclick", (event) => {
  log(event);
});

outer.addEventListener("mouseover", (event) => {
  log(event);
});

outer.addEventListener("mouseout", (event) => {
  log(event);
});

outer.addEventListener("mouseenter", (event) => {
  log(event);
});

outer.addEventListener("mouseleave", (event) => {
  log(event);
});

function log(event) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  const line = `${event.type}(${event.clientX}, ${event.clientY})`;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### Result

{{EmbedLiveSample("Mouse events", 0, 250)}}

### Keyboard and input events

This example logs {{domxref("Element.keydown_event", "keydown")}}, {{domxref("Element.beforeinput_event", "beforeinput")}} and, {{domxref("Element.input_event", "input")}} events. Try typing into the text area. Note that keys like <kbd>Shift</kbd> produce `keydown` events but not `input` events.

#### HTML

```html
<textarea id="story" rows="5" cols="33"></textarea>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#story {
  padding: 0.5rem;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const story = document.querySelector("#story");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

story.addEventListener("keydown", (event) => {
  log(`${event.type}(${event.key})`);
});

story.addEventListener("beforeinput", (event) => {
  log(`${event.type}(${event.data})`);
});

story.addEventListener("input", (event) => {
  log(`${event.type}(${event.data})`);
});

function log(line) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### Result

{{EmbedLiveSample("Keyboard and input events", 0, 250)}}

## Specifications

{{Specifications}}

## See also

- [Pointer Events API](/en-US/docs/Web/API/Pointer_events)
- [Touch Events](/en-US/docs/Web/API/Touch_events)
