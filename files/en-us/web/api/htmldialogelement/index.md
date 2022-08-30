---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLDialogElement
  - Interface
  - Reference
browser-compat: api.HTMLDialogElement
---
{{APIRef("HTML DOM")}}

The **`HTMLDialogElement`** interface provides methods to manipulate {{HTMLElement("dialog")}} elements. It inherits properties and methods from the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.open")}}
  - : A boolean value reflecting the {{htmlattrxref("open", "dialog")}} HTML attribute, indicating whether the dialog is available for interaction.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : A string that sets or returns the return value for the dialog.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Closes the dialog. An optional string may be passed as an argument, updating the `returnValue` of the dialog.
- {{domxref("HTMLDialogElement.show()")}}
  - : Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Displays the dialog as a modal, over the top of any other dialogs that might be present. Interaction outside the dialog is blocked.

## Events

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : Fired when the user instructs the browser that they wish to dismiss the current open dialog.
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Fired when the dialog is closed.

## Examples

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} containing a form via the {{domxref("HTMLDialogElement.showModal()")}} function. From there you can click the _Cancel_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} function), or submit the form via the submit button.

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

> **Note:** You can find this example on GitHub as [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/main/htmldialogelement-basic/index.html) ([see it live also](https://mdn.github.io/dom-examples/htmldialogelement-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
