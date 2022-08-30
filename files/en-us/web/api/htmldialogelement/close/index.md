---
title: HTMLDialogElement.close()
slug: Web/API/HTMLDialogElement/close
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLDialogElement
  - Method
  - Reference
  - close
browser-compat: api.HTMLDialogElement.close
---
{{ APIRef("HTML DOM") }}

The **`close()`** method of the {{domxref("HTMLDialogElement")}}
interface closes the dialog. An optional string may be passed as an
argument, updating the `returnValue` of the dialog.

## Syntax

```js
close()
close(returnValue)
```

### Parameters

- `returnValue` {{optional_inline}}
  - : A string representing an updated value for the
    {{domxref("HTMLDialogElement.returnValue")}} of the dialog.

### Return value

None ({{jsxref("undefined")}}).

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
