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
<dialog id="termsDialog">
  <p>Do you agree to the Terms of Service (link)?</p>
  <button id="declineButton" value="declined">Decline</button>
  <button id="acceptButton" value="accepted">Accept</button>
</dialog>
<p>
  <button id="openDialogButton">Review ToS</button>
</p>
<p id="statusText"></p>
```

#### JavaScript

```js
const dialog = document.getElementById("termsDialog");
const statusText = document.getElementById("statusText");

const openDialogButton = document.getElementById("openDialogButton");
const declineButton = document.getElementById("declineButton");
const acceptButton = document.getElementById("acceptButton");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

dialog.addEventListener("close", () => {
  statusText.innerText = dialog.returnValue
    ? `Return value: ${dialog.returnValue}`
    : "There was no return value";
});
```

#### Result

Try clicking "Review ToS", then choosing the "Accept" or "Decline" buttons in the dialog, or dismissing the dialog by pressing the <kbd>Esc</kbd> key, and observe the different status updates.

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
