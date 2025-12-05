---
title: "HTMLDialogElement: show() method"
short-title: show()
slug: Web/API/HTMLDialogElement/show
page-type: web-api-instance-method
browser-compat: api.HTMLDialogElement.show
---

{{ APIRef("HTML DOM") }}

The **`show()`** method of the {{domxref("HTMLDialogElement")}} interface displays the dialog modelessly, i.e., still allowing interaction with content outside of the dialog.

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

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} via the `show()` method.
From there you can click the _Close dialog_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()", "close()")}} method).

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">Close dialog</button>
</dialog>

<button id="open">Open dialog</button>
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

// Open button opens a modeless dialog
openButton.addEventListener("click", () => {
  dialog.show();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Results

{{EmbedLiveSample("Basic usage",100, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
