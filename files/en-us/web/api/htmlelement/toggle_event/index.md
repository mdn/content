---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.toggle_event
---

{{APIRef("HTML DOM")}}

The **`toggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} element, {{htmlelement("dialog")}} element, or {{htmlelement("details")}} element just after it is shown or hidden.

- If the element is transitioning from hidden to showing, the [`event.oldState`](/en-US/docs/Web/API/ToggleEvent/oldState) property will be set to `closed` and the [`event.newState`](/en-US/docs/Web/API/ToggleEvent/newState) property will be set to `open`.
- If the element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

This event is not [cancelable](/en-US/docs/Web/API/Event/cancelable).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Event type

A {{domxref("ToggleEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Examples

The example code below demonstrates how the `toggle` event might be used for {{domxref("Popover_API", "popover", "", "nocode")}}.
The same code is might be used for a {{htmlelement("dialog")}} or {{htmlelement("details")}} elements in the same way.

### Basic example

This example shows how to listen for the `toggle` event and log the result.

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

The code adds an event listener for the `toggle` event and logs the state.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

#### Result

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### A note on toggle event coalescing

If multiple `toggle` events are fired before the event loop has a chance to cycle, only a single event will be fired.
This is referred to as "event coalescing".

For example:

```js
popover.addEventListener("toggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
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
- Related event: [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)
