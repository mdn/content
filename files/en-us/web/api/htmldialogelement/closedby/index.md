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
  - : The dialog can be dismissed with a light dismiss user action, a platform-specific user action, or a developer-specified mechanism.
- `closerequest`
  - : The dialog can be dismissed with a platform-specific user action or a developer-specified mechanism.
- `none`
  - : The dialog can only be dismissed with a developer-specified mechanism.

## Examples

### Basic `closedBy` usage

```html
<dialog open closedby="any">
  <h2>My dialog</h2>
  <p>
    Closable using the Esc key, or by clicking outside the dialog. "Light
    dismiss" behavior.
  </p>
</dialog>
```

```js
const dialogElem = document.querySelector("dialog");

// Logs "any" to the console
console.log(dialogElem.closedBy);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("dialog") }}
