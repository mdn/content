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

  - : The `<dialog>` element can be closed by:

    - Clicking or tapping outside the `<dialog>`.
    - Relevant platform-specific user actions such as pressing the <kbd>Esc</kbd> key on desktop platforms, or a "back" or "dismiss" gesture on mobile platforms.
    - Developer-specified mechanisms such as a {{htmlelement("button")}} with a [`click`](/en-US/docs/Web/API/Element/click_event) handler that invokes {{domxref("HTMLDialogElement.close()")}} or a {{htmlelement("form")}} submission.

    This is equivalent to the ["light dismiss" behavior of "auto" state popovers](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).

- `closerequest`

  - : The `<dialog>` element can be closed via relevant platform-specific user actions or developer-specified mechanisms.

- `none`

  - : The `<dialog>` element can only be closed via developer-specified mechanisms.

If the `<dialog>` element does not have a valid `closedby` value specified, then

- if it was opened using {{domxref("HTMLDialogElement.showModal()", "showModal()")}}, it behaves as if the value was `"closerequest"`
- otherwise, it behaves as if the value was `"none"`.

## Examples

### Basic `closedBy` usage

In this example, we'll declare a `<dialog>` element, then access its `closedby` attribute value via JavaScript.

#### HTML

We first declare an open `<dialog>` element with a `closedby` value of `any`:

```html
<dialog open closedby="any">
  <h2>My dialog</h2>
  <p>
    Closable using the Esc key, or by clicking outside the dialog. "Light
    dismiss" behavior.
  </p>
</dialog>
```

#### JavaScript

We then grab a reference to the `<dialog>` element in JavaScript and log its `closedby` value to the console, accessing it via the `closedBy` property:

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
