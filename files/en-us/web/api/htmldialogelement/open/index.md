---
title: "HTMLDialogElement: open property"
short-title: open
slug: Web/API/HTMLDialogElement/open
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.open
---

{{ APIRef("HTML DOM") }}

The **`open`** property of the
{{domxref("HTMLDialogElement")}} interface is a boolean value reflecting the
[`open`](/en-US/docs/Web/HTML/Element/dialog#open) HTML attribute, indicating whether the {{htmlelement("dialog")}} is
available for interaction.

## Value

A boolean value representing the state of the [`open`](/en-US/docs/Web/HTML/Element/dialog#open) HTML attribute. `true` means it is set, and therefore the dialog
is shown. `false` means it not set, and therefore the dialog is not shown.

The property is not read only — it is possible to set the value to programmatically
show or hide the dialog.

## Examples

The following example shows a simple button that, when clicked, opens a
{{htmlelement("dialog")}} containing a form via the `showModal()` method.
From there you can click the _Cancel_ button to close the dialog (via the
{{domxref("HTMLDialogElement.close()")}} method), or submit the form via the submit
button.

```html
<!-- Simple pop-up dialog box -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close</button>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="dialogStatus"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("dialog");
    const text = document.getElementById("dialogStatus");

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    // Update button opens a modal dialog
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
    });

    dialog.addEventListener("close", () => {
      openCheck(dialog);
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
