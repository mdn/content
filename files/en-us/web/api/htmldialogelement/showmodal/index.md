---
title: "HTMLDialogElement: showModal() method"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
page-type: web-api-instance-method
browser-compat: api.HTMLDialogElement.showModal
---

{{ APIRef("HTML DOM") }}

The **`showModal()`** method of the
{{domxref("HTMLDialogElement")}} interface displays the dialog as a modal, over the top
of any other dialogs that might be present. It displays in the {{glossary("top layer")}}, along with a
{{cssxref('::backdrop')}} pseudo-element. Interaction outside the dialog is blocked and
the content outside it is rendered inert.

## Syntax

```js-nolint
showModal()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the dialog is already open (i.e. if the `open` attribute is already set on the {{htmlelement("dialog")}} element), or if the dialog is also a [popover](/en-US/docs/Web/API/Popover_API) that is already being shown.

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
