---
title: HTMLDialogElement.showModal()
slug: Web/API/HTMLDialogElement/showModal
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLDialogElement
  - Method
  - Reference
  - showModal
browser-compat: api.HTMLDialogElement.showModal
---
{{ APIRef("HTML DOM") }}

The **`showModal()`** method of the
{{domxref("HTMLDialogElement")}} interface displays the dialog as a modal, over the top
of any other dialogs that might be present. It displays into the top layer, along with a
{{cssxref('::backdrop')}} pseudo-element. Interaction outside the dialog is blocked and
the content outside it is rendered inert.

## Syntax

```js
showModal()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError`  {{domxref("DOMException")}}
  - : Thrown if the dialog is already open (i.e. if the `open` attribute is already set on the {{htmlelement("dialog")}} element).

## Examples

The following example shows a simple button that, when clicked, opens a
{{htmlelement("dialog")}} containing a form via the `showModal()` method.
From there you can click the _Cancel_ button to close the dialog (via the
{{domxref("HTMLDialogElement.close()")}} method), or submit the form via the submit
button.

```html
  <!-- Simple pop-up dialog box, containing a form -->
  <dialog id="favDialog">
    <form method="dialog">
      <section>
        <p><label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select></p>
      </section>
      <menu>
        <button id="cancel" type="reset">Cancel</button>
        <button type="submit">Confirm</button>
      </menu>
    </form>
  </dialog>

  <menu>
    <button id="updateDetails">Update details</button>
  </menu>

  <script>
    (() => {
      const updateButton = document.getElementById('updateDetails');
      const cancelButton = document.getElementById('cancel');
      const dialog = document.getElementById('favDialog');
      dialog.returnValue = 'favAnimal';

      function openCheck(dialog) {
        if (dialog.open) {
          console.log('Dialog open');
        } else {
          console.log('Dialog closed');
        }
      }

      // Update button opens a modal dialog
      updateButton.addEventListener('click', () => {
        dialog.showModal();
        openCheck(dialog);
      });

      // Form cancel button closes the dialog box
      cancelButton.addEventListener('click', () => {
        dialog.close('animalNotChosen');
        openCheck(dialog);
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
