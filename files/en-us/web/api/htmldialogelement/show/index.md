---
title: "HTMLDialogElement: show() method"
short-title: show()
slug: Web/API/HTMLDialogElement/show
page-type: web-api-instance-method
browser-compat: api.HTMLDialogElement.show
---

{{ APIRef("HTML DOM") }}

The **`show()`** method of the {{domxref("HTMLDialogElement")}} interface displays the dialog as a non-modal dialog.

A non-modal dialog is one where users can interact with content outside/behind the open dialog.

## Syntax

```js-nolint
show()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the dialog is already open and modal (i.e., if the dialog has already been opened with {{domxref("HTMLDialogElement.showModal()")}}).

## Examples

### Basic usage

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} using the `show()` method.

When the dialog is open, you can still interact with the rest of the page, including clicking the _Click me_ button that triggers an alert.

You can click the _Close dialog_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()", "close()")}} method).

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
  dialog.show();
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
- {{domxref("HTMLDialogElement.showModal()")}}
