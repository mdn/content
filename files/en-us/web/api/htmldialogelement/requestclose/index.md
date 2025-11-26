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
    <label><input type="checkbox" id="preventClose" /> Cancel close</label>
  </div>
  <button type="button" id="close">Close</button>
  <button type="button" id="closeWithValue">Close w/ return value</button>
</dialog>

<button id="open">Open dialog</button>

<p id="statusText"></p>
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const closeWithValueButton = document.getElementById("closeWithValue");
const preventCloseInput = document.getElementById("preventClose");
const statusText = document.getElementById("statusText");

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
  if (cancelCloseInput.checked) {
    statusText.innerText = "Dialog close cancelled";
    event.preventDefault();
  }
});

// cancel event is not prevented, dialog will close
dialog.addEventListener("close", () => {
  statusText.innerHTML = `Dialog closed. Return value: "<code>${dialog.returnValue}</code>"`;
});
```

#### Result

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
