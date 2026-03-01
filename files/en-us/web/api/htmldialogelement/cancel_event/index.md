---
title: "HTMLDialogElement: cancel event"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
page-type: web-api-event
browser-compat: api.HTMLDialogElement.cancel_event
---

{{APIRef("HTML DOM")}}

The **`cancel`** event fires on a {{HTMLElement("dialog")}} element when the user triggers a close request.

The `cancel` event handler can be used to override the default behavior on receiving a close request, and prevent the dialog from closing.
If the default behavior is not prevented, the dialog will close and fire a {{domxref("HTMLDialogElement/close_event", "close")}} event.

Close requests might be triggered by:

- Pressing the <kbd>Esc</kbd> key on desktop platforms
- Calling the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method
- The back button on mobile platforms

This event is cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Canceling a dialog

The following example shows a button that, when clicked, opens a {{htmlelement("dialog")}} using the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} method.

You can trigger the `cancel` event by either clicking the _Request Close_ button to close the dialog (via the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method) or by pressing the <kbd>Esc</kbd> key.

Note that the `cancel` event handler logs the event and then returns, allowing the dialog to close (which in turn causes the `close` event to be emitted).
You can uncomment the line containing `event.preventDefault()` to cancel the event.

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="request-close">Request Close</button>
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

#### JavaScript

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

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const requestCloseButton = document.getElementById("request-close");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  log("open button click event fired", true);
  log("dialog showModal() called");
  dialog.showModal();
});

// Request close
requestCloseButton.addEventListener("click", () => {
  log("request close button click event fired");
  log("dialog requestClose() called");
  // Triggers the cancel event
  dialog.requestClose();
});

// Fired when requestClose() is called
// Prevent the dialog from closing by calling event.preventDefault()
dialog.addEventListener("cancel", (event) => {
  log("dialog cancel event fired");
  // Uncomment the next two lines to prevent the dialog from closing
  // log("dialog close cancelled");
  // event.preventDefault();
});

dialog.addEventListener("close", (event) => {
  log("dialog close event fired");
});
```

#### Result

{{ EmbedLiveSample('Canceling a dialog', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
