---
title: "HTMLDialogElement: requestClose() method"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HTMLDialogElement.requestClose
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

The **`requestClose()`** method of the {{domxref("HTMLDialogElement")}} interface requests to close the {{htmlelement("dialog")}}.
An optional string may be passed as an argument, updating the `returnValue` of the dialog.

This method differs from the `HTMLDialogElement.close()` method by firing a `cancel` event before firing the `close` event. This allows
authors to prevent the dialog from closing. This method exposes the same behavior as the dialog's internal close watcher.

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

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} containing a form, via the `showModal()` method.
From there you can click the _X_ button to request to close the dialog (via the `HTMLDialogElement.requestClose()` method), or submit the form via the submit button.

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button id="close" aria-label="close" formnovalidate>X</button>
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <button type="reset">Reset</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<script>
  (() => {
    const updateButton = document.getElementById("updateDetails");
    const closeButton = document.getElementById("close");
    const dialog = document.getElementById("favDialog");

    // Update button opens a modal dialog
    updateButton.addEventListener("click", () => {
      dialog.showModal();
    });

    // Form close button requests to close the dialog box
    closeButton.addEventListener("click", () => {
      dialog.requestClose("animalNotChosen");
    });

    function dialogShouldNotClose() {
      // Add logic to decide whether to prevent the dialog from closing
    }

    dialog.addEventListener("cancel", (event) => {
      if (!event.cancelable) return;
      if (dialogShouldNotClose()) event.preventDefault();
    });
  })();
</script>
```

If the "X" button was of `type="submit"`, the dialog would have closed without requiring JavaScript.
A form submission closes the `<dialog>` it is nested within if the [form's method is `dialog`](/en-US/docs/Web/HTML/Element/form#method), so no "close" button is required.

### Result

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
