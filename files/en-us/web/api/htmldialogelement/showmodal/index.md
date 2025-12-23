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
{{cssxref('::backdrop')}} pseudo-element. Elements inside the same document as the dialog, except the dialog and its descendants, become _inert_ (as if the [`inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) attribute is specified). Only the containing document becomes blocked; if the dialog is rendered inside an iframe, the rest of the page remains interactive.

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
  - : Thrown if the dialog is already open and non-modal (i.e., if the dialog has already been opened with {{domxref("HTMLDialogElement.show()")}}).

## Examples

### Basic usage

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} via the `showModal()` method.

When the dialog is open, you cannot interact with the rest of the page, including clicking the _Click me_ button that triggers an alert.

From there you can click the _Close dialog_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} method).

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">Close dialog</button>
</dialog>

<p><button id="open">Open dialog</button></p>
<p><button id="alert">Trigger alert</button></p>
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const alertButton = document.getElementById("alert");

// Open button opens a modeless dialog
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// Alert button triggers an alert
alertButton.addEventListener("click", () => {
  alert("you clicked me!");
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Basic usage", '100%', "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
