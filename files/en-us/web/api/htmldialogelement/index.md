---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
page-type: web-api-interface
browser-compat: api.HTMLDialogElement
---

{{APIRef("HTML DOM")}}

The **`HTMLDialogElement`** interface provides methods to manipulate {{HTMLElement("dialog")}} elements. It inherits properties and methods from the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.open")}}
  - : A boolean value reflecting the [`open`](/en-US/docs/Web/HTML/Element/dialog#open) HTML attribute, indicating whether the dialog is available for interaction.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : A string that sets or returns the return value for the dialog.

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Closes the dialog. An optional string may be passed as an argument, updating the `returnValue` of the dialog.
- {{domxref("HTMLDialogElement.show()")}}
  - : Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Displays the dialog as a modal, over the top of any other dialogs that might be present. Everything outside the dialog are [inert](/en-US/docs/Web/API/HTMLElement/inert) with interactions outside the dialog being blocked.

## Events

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : Fired when the user dismisses the current open dialog with the escape key.
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Fired when the dialog is closed, whether with the escape key, the `HTMLDialogElement.close()` method, or via submitting a form within the dialog with [`method="dialog"`](/en-US/docs/Web/HTML/Element/form#method).

## Examples

### Opening a modal dialog

The following example shows a button that, when clicked, opens a modal {{htmlelement("dialog")}} containing a form via the {{domxref("HTMLDialogElement.showModal()")}} function. While open, everything other than the modal dialog's contents is inert. From there you can click the _Cancel_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} function), or submit the form via the submit button. Selecting the cancel button closes the dialog, creating a {{domxref("HTMLDialogElement/close_event", "close")}} event, not a {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event.

#### HTML

```html
<!-- pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### Result

{{EmbedLiveSample("Opening a modal dialog")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
