---
title: "HTMLElement: beforetoggle event"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef("HTML DOM")}}

The **`beforetoggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} or {{htmlelement("dialog")}} element just before it is shown or hidden.

- If the element is transitioning from hidden to showing, the [`event.oldState`](/en-US/docs/Web/API/ToggleEvent/oldState) property will be set to `closed` and the [`event.newState`](/en-US/docs/Web/API/ToggleEvent/newState) property will be set to `open`.
- If the element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

This event is [cancelable](/en-US/docs/Web/API/Event/cancelable) when an element is toggled to open ("show") but not when the element is closing.

Among other things, this event can be used to:

- prevent an element from being shown.
- add or remove classes or properties from the element or associated elements, for example to control the animation behavior of a dialog as it is opened and closed.
- clear the state of the element before it is opened or after it is hidden, for example to reset a dialog form and return value to an empty state, or hide any nested manual popovers when reopening a popup.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Event type

A {{domxref("ToggleEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Examples

The examples below demonstrates how the `beforetoggle` event might be used for a {{domxref("Popover_API", "popover", "", "nocode")}} or {{htmlelement("dialog")}} element.
The same examples would work similarly on the other element types.

### Basic example

This example shows how to listen for the `beforetoggle` event and log the result.

#### HTML

The HTML consists of a popover and a button for toggling it open and closed.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code gets adds an event listener for the `beforetoggle` event and logs the state.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    log("Popover is about to be shown");
  } else {
    log("Popover is about to be hidden");
  }
});
```

#### Result

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Prevent a popover opening

The `beforetoggle` event is cancelable if fired when opening an element.

Below we show how a popover that might first check if it is allowed to open, and if not, call {{domxref("Event.preventDefault()")}} to cancel the event.
In this example we use a button to set whether the popover can open or not: in a more "full featured" example this might depend on the application state, or the data in the popover being ready to display.

#### HTML

The HTML consists of a popover, a button for toggling it open and closed, and a button for setting whether the button can be opened.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<button id="allow_button"></button>
<div id="mypopover" popover>Popover content</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

First we set up the code to simulate a state where we don't want to allow the popover to open.
This is represented by the variable `allowOpen`, which is toggled when the associated button is clicked.

```js
const allowButton = document.getElementById("allow_button");

let allowOpen = true;

function toggleState() {
  allowOpen = !allowOpen;
  allowButton.innerText = allowOpen ? "Open Allowed" : "Open Prevented";
}

toggleState();

allowButton.addEventListener("click", (event) => {
  toggleState();
});
```

The code gets adds an event listener for the `beforetoggle` event.
If `allowOpen` is false then `preventDefault()` is called, which stops the popup from opening.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    if (allowOpen) {
      log("Popover is about to be shown");
    } else {
      log("Popover opening prevented");
      event.preventDefault();
    }
  } else {
    log("Popover is about to be hidden");
  }
});
```

#### Result

{{EmbedLiveSample("Prevent a popover opening", '100%', "250px")}}

### A note on beforetoggle event coalescing

If multiple `beforetoggle` events are fired before the event loop has a chance to cycle, only a single event will be fired.
This is referred to as "event coalescing".

For example:

```js
popover.addEventListener("beforetoggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

### Other examples

- [Opening a modal dialog](/en-US/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) example in `HTMLDialogElement`

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
- Related event: [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event)
