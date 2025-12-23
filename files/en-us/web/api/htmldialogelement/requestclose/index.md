---
title: "HTMLDialogElement: requestClose() method"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
page-type: web-api-instance-method
browser-compat: api.HTMLDialogElement.requestClose
---

{{ APIRef("HTML DOM") }}

The **`requestClose()`** method of the {{domxref("HTMLDialogElement")}} interface requests to close the {{htmlelement("dialog")}}.
An optional string may be passed as an argument, updating the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} of the dialog.

This method differs from the {{domxref("HTMLDialogElement.close()", "close()")}} method in that it fires a {{domxref("HTMLDialogElement.cancel_event", "cancel")}} event before firing the {{domxref("HTMLDialogElement.close_event", "close")}} event.
Authors can call {{domxref("Event.preventDefault()")}} in the handler for the {{domxref("HTMLDialogElement.cancel_event", "cancel")}} event to prevent the dialog from closing.

This method exposes the same behavior as the dialog's internal close watcher.

## Syntax

```js-nolint
requestClose()
requestClose(returnValue)
```

### Parameters

- `returnValue` {{optional_inline}}
  - : A string representing an updated value for the {{domxref("HTMLDialogElement.returnValue")}} of the dialog.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using requestClose()

The following example shows a button that, when clicked, opens a {{htmlelement("dialog")}} via the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} method.
From there you can click the either _Close_ button to close the dialog (via the `requestClose()` method).

The _Close_ button closes the dialog without a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}, while the _Close w/ return value_ button closes the dialog with a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}.

Preventing the dialog from closing is demonstrated with a checkbox.

#### HTML

```html
<dialog id="dialog">
  <div>
    <label><input type="checkbox" id="prevent-close" /> Cancel close</label>
  </div>
  <button type="button" id="close">Close</button>
  <button type="button" id="close-w-value">Close w/ return value</button>
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
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const closeWithValueButton = document.getElementById("close-w-value");
const preventCloseInput = document.getElementById("prevent-close");

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  // Reset the return value
  dialog.returnValue = "";
  // Show the dialog
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.requestClose();
});

// Close button closes the dialog box with a return value
closeWithValueButton.addEventListener("click", () => {
  dialog.requestClose("some value");
});

// Fired when requestClose() is called
// Prevent the dialog from closing by calling event.preventDefault()
dialog.addEventListener("cancel", (event) => {
  if (preventCloseInput.checked) {
    log("Dialog close cancelled");
    event.preventDefault();
  }
});

// cancel event is not prevented, dialog will close
dialog.addEventListener("close", () => {
  log(`Dialog closed. Return value: "${dialog.returnValue}"`);
});
```

#### Result

{{ EmbedLiveSample('Examples', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
- The {{domxref("HTMLDialogElement.cancel_event", "cancel")}} event
