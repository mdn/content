---
title: "HTMLDialogElement: close() method"
short-title: close()
slug: Web/API/HTMLDialogElement/close
page-type: web-api-instance-method
browser-compat: api.HTMLDialogElement.close
---

{{ APIRef("HTML DOM") }}

The **`close()`** method of the {{domxref("HTMLDialogElement")}} interface closes the {{htmlelement("dialog")}}.
An optional string may be passed as an argument, updating the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} of the dialog.

## Syntax

```js-nolint
close()
close(returnValue)
```

### Parameters

- `returnValue` {{optional_inline}}
  - : A string representing an updated value for the {{domxref("HTMLDialogElement.returnValue")}} of the dialog.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example shows a button that, when clicked, opens a {{htmlelement("dialog")}} via the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} method.
From there you can click the either _Close_ button to close the dialog (via the `close()` method).

The _Close_ button closes the dialog without a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}, while the _Close w/ return value_ button closes the dialog with a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}.

```html
<dialog id="dialog">
  <button type="button" id="close">Close</button>
  <button type="button" id="close-w-value">Close w/ return value</button>
</dialog>

<button id="open">Open dialog</button>

<p id="status-text"></p>
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const closeWithValueButton = document.getElementById("close-w-value");
const statusText = document.getElementById("status-text");

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  // Reset the return value
  dialog.returnValue = "";
  // Rhow the dialog
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close button closes the dialog box with a return value
closeWithReturnValueButton.addEventListener("click", () => {
  dialog.close("some value");
});

// Form close button closes the dialog box
dialog.addEventListener("close", () => {
  statusText.innerHTML = `Dialog closed. Return value: "<code>${dialog.returnValue}</code>"`;
});
```

> [!NOTE]
>
> You know you can also automatically close a `<dialog>` by submitting a {{htmlelement("form")}} element with a [`method="dialog"`](/en-US/docs/Web/HTML/Reference/Elements/form#method) attribute.

### Result

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
