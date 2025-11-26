---
title: "HTMLDialogElement: returnValue property"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.returnValue
---

{{ APIRef("HTML DOM") }}

The **`returnValue`** property of the {{domxref("HTMLDialogElement")}} interface is a string representing the return value for a {{htmlelement("dialog")}} element when it's closed.
You can set the value directly (`dialog.returnValue = "result"`) or by providing the value as a string argument to {{domxref("HTMLDialogElement.close()", "close()")}} or {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}}.

## Value

A string representing the `returnValue` of the dialog.
Defaults to an empty string (`""`).

## Examples

### Checking the return value

The following example displays a button to open a dialog. The dialog asks the user if they want to accept a Terms of Service prompt.

The dialog contains "Accept" or "Decline" buttons: when the user clicks one of the buttons, the button's click handler closes the dialog, passing their choice into the {{domxref("HTMLDialogElement.close()", "close()")}} function. This assigns the choice to the dialog's `returnValue` property.

In the dialog's {{domxref("HTMLDialogElement.close_event", "close")}} event handler, the example updates the main page's status text to record the `returnValue`.

If the user dismisses the dialog without clicking a button (for example, by pressing the <kbd>Esc</kbd> key), then the return value is not set.

#### HTML

```html
<dialog id="dialog">
  <p>Do you agree to the Terms of Service (link)?</p>
  <button id="decline" value="declined">Decline</button>
  <button id="accept" value="accepted">Accept</button>
</dialog>
<button id="open">Review ToS</button>
<p id="status-text"></p>
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");
const statusText = document.getElementById("status-text");

openButton.addEventListener("click", () => {
  // Reset the return value on each open
  dialog.returnValue = "";
  updateReturnValue();
  // Show the dialog
  dialog.showModal();
});

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

function updateReturnValue() {
  statusText.innerHTML = `Return value: "<code>${dialog.returnValue}</code>"`;
}

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

dialog.addEventListener("close", updateReturnValue);
```

#### Result

Try clicking "Review ToS", then choosing the "Accept" or "Decline" buttons in the dialog, or dismissing the dialog by pressing the <kbd>Esc</kbd> key, and observe the different status updates.

{{ EmbedLiveSample('Checking the return value', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
