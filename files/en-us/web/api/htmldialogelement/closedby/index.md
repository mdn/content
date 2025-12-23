---
title: "HTMLDialogElement: closedBy property"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.closedBy
---

{{ APIRef("HTML DOM") }}

The **`closedBy`** property of the
{{domxref("HTMLDialogElement")}} interface indicates the types of user actions that can be used to close the associated {{htmlelement("dialog")}} element. It sets or returns the dialog's [`closedby`](/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) attribute value.

## Value

A string; possible values are:

- `any`
  - : The dialog can be dismissed by a user initiated close request or clicks outside the dialog.
- `closerequest`
  - : The dialog can only be dismissed by a user initiated close request.
- `none`
  - : The dialog can only be dismissed with a developer-specified mechanism. User actions such as clicking outside the dialog have no effect.

### Default behaviour

If the `closedby` attribute is absent or invalid, it falls back to the **Auto** state. In the **Auto** state:

- when the `<dialog>` is opened with `showModal()`, it behaves as if: `closedby="closerequest"`
- when the `<dialog>` is opened by any other means, it behaves as if: `closedby="none"`

## Examples

### Basic `closedBy` usage

```html
<dialog closedby="any">
  <p>
    Closable using the <kbd>Esc</kbd> key, or by clicking outside the dialog
    ("light dismiss").
  </p>
</dialog>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.querySelector("dialog");
dialog.showModal();
log(`closedBy: ${dialog.closedBy}`);
```

### Result

{{ EmbedLiveSample('Basic `closedBy` usage', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
