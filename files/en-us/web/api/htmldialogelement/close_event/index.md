---
title: "HTMLDialogElement: close event"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
page-type: web-api-event
browser-compat: api.HTMLDialogElement.close_event
---

{{APIRef("HTML DOM")}}

The `close` event is fired on an `HTMLDialogElement` object when the {{htmlelement("dialog")}} it represents has been closed.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling `close` events

This example demonstrates how to listen for `close` events triggered by different methods of closing a dialog:

1. calling the {{domxref("HTMLDialogElement.close()", "close()")}} method
2. a form with `method="dialog"`. Submitting the form closes the `dialog` and causes a {{domxref("HTMLFormElement/submit_event", "submit")}} event to be fired, without submitting data or clearing the form.
3. the <kbd>Esc</kbd> key. See: {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event

#### HTML

```html
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close via method="dialog"</button>
  </form>
  <p><button id="close">Close via .close() method</button></p>
  <p>Or hit the <kbd>Esc</kbd> key</p>
</dialog>

<button id="open">Open dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text, clear = false) {
  if (clear) {
    logElement.innerText = "";
  }
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  log("open button click event fired", true);
  log("dialog showModal() called");
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  log("close button click event fired");
  log("dialog close() called");
  dialog.close();
});

dialog.addEventListener("close", (event) => {
  log("dialog close event fired");
});
```

#### Result

{{ EmbedLiveSample('Handling `close` events', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
- The [`Event`](/en-US/docs/Web/API/Event) interface
