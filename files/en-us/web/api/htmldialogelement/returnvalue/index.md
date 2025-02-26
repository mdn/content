---
title: "HTMLDialogElement: returnValue property"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.returnValue
---

{{ APIRef("HTML DOM") }}

The **`returnValue`** property of the {{domxref("HTMLDialogElement")}} interface gets or sets the return value for the {{htmlelement("dialog")}}, usually to indicate which button the user pressed to close it.

## Value

A string representing the `returnValue` of the dialog.

## Examples

The following example displays a button to open a {{htmlelement("dialog")}} containing a form via the `showModal()` method.
The script assigns the `returnValue` an initial value of `initialValue`.
The confirm button (`confirmBtn`) submits the form with validation and the "X" button submits the form without validation. Submitting a form with a `method="dialog"` closes the dialog and sets the return value to the `value`, if any, of the `button` or `input` elements of `type=submit`.
The reset button has an event handler that closes the dialog; it has no impact on the `returnValue`. Neither does closing the dialog with the <kbd>Esc</kbd> key.

```html
<!-- Simple pop-up dialog box containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <input
      type="submit"
      aria-label="close"
      value="X"
      name="x-button"
      formnovalidate />
    <p>
      <label
        >Favorite animal:
        <select name="favAnimal" required>
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <menu>
      <button type="reset" value="resetBtn">Reset</button>
      <button type="submit" value="confirmBtn">Confirm</button>
    </menu>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="text"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("favDialog");
    const text = document.getElementById("text");
    const reset = document.querySelector("[type='reset']");
    dialog.returnValue = "initialValue";

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    function handleUserInput(returnValue) {
      if (!returnValue) {
        text.innerText += ". There was no return value";
      } else {
        text.innerText += ". Return value: " + returnValue;
      }
    }

    // "Open Dialog" button opens the <dialog> modally
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });

    reset.addEventListener("click", () => {
      dialog.close();
    });

    // when the dialog is closed, no matter how it is closed
    dialog.addEventListener("close", () => {
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });
  })();
</script>
<style>
  [aria-label="close"] {
    appearance: none;
    border-radius: 50%;
    border: 1px solid;
    float: right;
  }
</style>
```

### Result

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
