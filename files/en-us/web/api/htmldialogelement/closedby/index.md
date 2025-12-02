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
  - : The dialog can be dismissed by a [close request](https://html.spec.whatwg.org/multipage/interaction.html#close-request) or clicks outside the dialog.
- `closerequest`
  - : The dialog can only be dismissed by a [close request](https://html.spec.whatwg.org/multipage/interaction.html#close-request).
- `none`
  - : No user actions automatically close the dialog. The dialog can only be dismissed with a developer-specified mechanism.

### Default behaviour

If the `closedby` attribute is absent or invalid, it falls back to the **Auto** state. In the **Auto** state:

- when the `<dialog>` is opened with `showModal()`, it behaves as if: `closedby="closerequest"`
- when the `<dialog>` is opened by any other means, it behaves as if: `closedby="none"`

## Examples

### Basic `closedBy` usage

```html
<dialog open closedby="any">
  <h2>My dialog</h2>
  <p>
    Closable using the <kbd>Esc</kbd> key, or by clicking outside the dialog ("light dismiss").
  </p>
</dialog>
```

```js
const dialog = document.querySelector("dialog");

// Logs "any" to the console
console.log(dialogElem.closedBy);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("dialog") }}
