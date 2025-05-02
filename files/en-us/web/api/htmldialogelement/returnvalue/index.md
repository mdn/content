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

The following example displays a button to open a dialog containing a Terms of Service prompt via the `showModal()` method.
The script handles the user's input by assigning the `returnValue` when the Accept or Decline button is clicked.
The "Decline" button sets the `returnValue` to "declined", while the "Accept" button sets it to "accepted". Additionally, closing the dialog (e.g., using the close event) updates the status text with the dialog's `returnValue`.
Closing the dialog with the <kbd>Esc</kbd> key does not set the `returnValue`.

```html
<!-- Simple pop-up dialog box -->
<dialog id="termsDialog">
  <p>Do you agree to the Terms of Service(link)?</p>
  <button id="declineButton" value="declined">Decline</button>
  <button id="acceptButton" value="accepted">Accept</button>
</dialog>
<p>
  <button id="openDialog">Review ToS</button>
</p>
<p id="statusText"></p>

<script>
  const dialog = document.getElementById("termsDialog");
  const openDialog = document.getElementById("openDialog");
  const statusText = document.getElementById("statusText");
  const declineButton = document.getElementById("declineButton");
  const acceptButton = document.getElementById("acceptButton");

  function handleUserInput(returnValue) {
    if (returnValue === "") {
      statusText.innerText = "There was no return value";
    } else {
      statusText.innerText = "Return value: " + returnValue;
    }
  }

  openDialog.addEventListener("click", () => {
    dialog.showModal();
    handleUserInput(dialog.returnValue);
  });

  declineButton.addEventListener("click", closeDialog);
  acceptButton.addEventListener("click", closeDialog);

  function closeDialog(event) {
    const button = event.target;
    const returnValue = button.value;
    dialog.close(returnValue);
    handleUserInput(dialog.returnValue);
  }

  dialog.addEventListener("close", () => {
    handleUserInput(dialog.returnValue);
  });
</script>
```

### Result

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
