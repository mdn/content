---
title: HTMLDialogElement.returnValue
slug: Web/API/HTMLDialogElement/returnValue
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLDialogElement
  - Property
  - Reference
  - returnValue
browser-compat: api.HTMLDialogElement.returnValue
---
{{ APIRef("HTML DOM") }}

The **`returnValue`** property of the
{{domxref("HTMLDialogElement")}} interface gets or sets the return value for the
`<dialog>`, usually to indicate which button the user pressed to
close it.

## Value

A string representing the `returnValue` of the dialog.

## Examples

The following example displays a button to open a {{htmlelement("dialog")}} containing
a form via the `showModal()` method. From there, either button will close the
dialog.

```html
  <!-- Simple pop-up dialog box containing a form -->
  <dialog id="favDialog">
    <form method="dialog">
      <p><label>Favorite animal:
        <select name="favAnimal" required>
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label></p>
      <menu>
        <button>Cancel</button>
        <button>Confirm</button>
      </menu>
    </form>
  </dialog>

  <menu>
    <button id="updateDetails">Update details</button>
  </menu>

  <script>
    (() => {
      const updateButton = document.getElementById('updateDetails');
      const dialog = document.getElementById('favDialog');
      dialog.returnValue = 'favAnimal';

      function openCheck(dialog) {
        if (dialog.open) {
          console.log('Dialog open');
        } else {
          console.log('Dialog closed');
        }
      }

      function handleUserInput(returnValue) {
        if (!returnValue || returnValue === 'Cancel') {
          // User canceled the dialog, do nothing
        } else if (returnValue === 'Confirm') {
          // User chose a favorite animal, do something with it
        }
      }

      // "Update details" button opens the <dialog> modally
      updateButton.addEventListener('click', () => {
        dialog.showModal();
        openCheck(dialog);
        handleUserInput(dialog.returnValue);
      });
    })();
  </script>
```

> **Note:** You can find this example on GitHub as [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/main/htmldialogelement-basic/index.html)
> ([see it live also](https://mdn.github.io/dom-examples/htmldialogelement-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
