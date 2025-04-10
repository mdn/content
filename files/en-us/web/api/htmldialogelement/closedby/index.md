---
title: "HTMLDialogElement: closedBy property"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLDialogElement.closedBy
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

The **`closedBy`** property of the
{{domxref("HTMLDialogElement")}} interface is a string value reflecting the
[`closedby`](/en-US/docs/Web/HTML/Element/dialog#closedby) HTML attribute, indicating what mechanisms can close
the {{htmlelement("dialog")}}.

## Value

A string value representing the state of the [`closedby`](/en-US/docs/Web/HTML/Element/dialog#closedby) HTML attribute.

- `"none"`: The dialog is not closed by close requests (e.g. the <kbd>Esc</kbd> key) or light dismiss.
- `"closerequest"`: The dialog is closed by close requests only.
- `"any"`: The dialog is closed by close requests and light dismiss.

The property is not read only — it is possible to set the value to programmatically
to change the enabled mechanisms.

## Examples

The following example shows a simple button that, when clicked, opens a
{{htmlelement("dialog")}} containing a form via the `showModal()` method.
From there you can click the _Cancel_ button to close the dialog (via the
{{domxref("HTMLDialogElement.close()")}} method), or submit the form via the submit
button.

```html
<dialog id="dialog">
  <p id="content"></p>
  <button id="close">Manually Close</button>
</dialog>

<p>
  <button id="openDialogNone">
    Open Modal Dialog without user close mechanisms
  </button>
  <button id="openDialog">Open Modal Dialog</button>
  <button id="openDialogLightDismiss">
    Open Modal Dialog with light dismiss
  </button>
</p>

<script>
  (() => {
    const openDialogNone = document.getElementById("openDialogNone");
    const openDialog = document.getElementById("openDialog");
    const openDialogLightDismiss = document.getElementById(
      "openDialogLightDismiss",
    );
    const dialog = document.getElementById("dialog");
    const close = document.getElementById("close");

    // Button opens a modal dialog
    openDialogNone.addEventListener("click", () => {
      dialog.closedBy = "none";
      dialog.firstElementChild.textContent =
        "This dialog cannot be closed by pressing the Escape key or clicking outside of it.";
      dialog.showModal();
    });
    openDialog.addEventListener("click", () => {
      dialog.firstElementChild.textContent =
        "This dialog can be closed by pressing the Escape key.";
      dialog.closedBy = "closerequest"; // The default for modal dialogs
      dialog.showModal();
    });
    openDialogLightDismiss.addEventListener("click", () => {
      dialog.firstElementChild.textContent =
        "This dialog can be closed by pressing the Escape key or clicking outside of it.";
      dialog.closedBy = "any";
      dialog.showModal();
    });

    close.addEventListener("click", () => {
      dialog.close();
    });
  })();
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
- {{ domxref("CloseWatcher") }}
