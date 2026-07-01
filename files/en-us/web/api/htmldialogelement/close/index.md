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

The {{domxref("HTMLDialogElement.close_event", "close")}} event is fired after the dialog has closed.
Unlike when calling {{domxref("HTMLDialogElement.requestClose()")}}, the close operation cannot be cancelled.

## Syntax

```js-nolint
close()
close(returnValue)
```

### Parameters

- `returnValue` {{optional_inline}}
  - : A string that replaces the existing value of {{domxref("HTMLDialogElement.returnValue")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Closing a dialog

The following example shows a button that, when clicked, opens a {{htmlelement("dialog")}} via the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} method.
From there you can click the either _Close_ button to close the dialog (via the `close()` method).

The _Close_ button closes the dialog without a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}, while the _Close w/ return value_ button closes the dialog with a {{domxref("HTMLDialogElement.returnValue", "returnValue")}}.

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">Close</button>
  <button type="button" id="close-w-value">Close w/ return value</button>
</dialog>

<button id="open">Open dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const closeWithValueButton = document.getElementById("close-w-value");

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  // Reset the return value
  dialog.returnValue = "";
  // Show the dialog
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close button closes the dialog box with a return value
closeWithValueButton.addEventListener("click", () => {
  dialog.close(`Closed at ${new Date().toLocaleTimeString()}`);
});

// Form close button closes the dialog box
dialog.addEventListener("close", () => {
  log(`Dialog closed. Return value: "${dialog.returnValue}"`);
});
```

> [!NOTE]
>
> You know you can also automatically close a `<dialog>` by submitting a {{htmlelement("form")}} element with a [`method="dialog"`](/en-US/docs/Web/HTML/Reference/Elements/form#method) attribute.

### Result

{{ EmbedLiveSample('Closing a dialog', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
- The {{domxref("HTMLDialogElement.close_event", "close")}} event
- {{domxref("HTMLDialogElement.requestClose()")}}
