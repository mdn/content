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
From there you can click the _Close dialog_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} method).

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">Close dialog</button>
</dialog>

<button id="open">Open dialog</button>
```

#### JavaScript

```js
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const dialog = document.getElementById("dialog");

// Open button opens a modeless dialog
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Opening a modal dialog")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
