---
title: "HTMLDialogElement: cancel event"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
page-type: web-api-event
browser-compat: api.HTMLDialogElement.cancel_event
---

{{APIRef("HTML DOM")}}

The **`cancel`** event fires on a {{HTMLElement("dialog")}} element when the user sends a [close request](https://html.spec.whatwg.org/multipage/interaction.html#close-request) to the user agent.

Examples of close requests are:

- Pressing the <kbd>ESC</kbd> key on desktop platforms
- Calling the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method.
- The back button on mobile platforms

This event is cancelable but can not bubble.

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

The following example shows a button that, when clicked, opens a {{htmlelement("dialog")}} via the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} method.

From there you can will trigger the `cancel` event by either clicking _Request Close_ button to close the dialog (via the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method) or press the <kbd>ESC</kbd> key.

Preventing the dialog from closing is demonstrated with a checkbox.

#### HTML

```html
<dialog id="dialog">
  <div>
    <label><input type="checkbox" id="preventClose" /> prevent close</label>
  </div>
  <button type="button" id="requestClose">Request Close</button>
</dialog>

<button id="open">Open dialog</button>

<p id="statusText"></p>
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const requestCloseButton = document.getElementById("requestClose");
const preventCloseInput = document.getElementById("preventClose");
const statusText = document.getElementById("statusText");

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// Request close
requestCloseButton.addEventListener("click", () => {
  // Triggers the cancel event
  dialog.requestClose();
});

// Fired when requestClose() is called
// Prevent the dialog from closing by calling event.preventDefault()
dialog.addEventListener("cancel", (event) => {
  if (preventClose.checked) {
    statusText.innerText = "Dialog close cancelled";
    event.preventDefault();
  }
});

dialog.addEventListener("close", (event) => {
  statusText.innerText = "Dialog closed";
});
```

#### Result

{{ EmbedLiveSample('Canceling a dialog', '100%', '100px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
