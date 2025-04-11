---
title: "HTMLDialogElement: closedBy property"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
page-type: web-api-instance-property
browser-compat: api.HTMLDialogElement.closedBy
---

{{ APIRef("HTML DOM") }}

The **`closedBy`** property of the
{{domxref("HTMLDialogElement")}} interface indicates the types of user actions that can be used to close it.

## Value

A string; possible values are:

- `none`

  - : No user actions can be used to close the `<dialog>` element, only developer-specified mechanisms such as a JavaScript-powered "Close" {{htmlelement("button")}} or a {{htmlelement("form")}} submission.

- `closerequest`

  - : The `<dialog>` element can be closed via relevant platform-specific close requests, such as pressing the <kbd>Esc</kbd> key on desktop platforms, or a "back" or "dismiss" gesture on mobile platforms.

- `any`

  - : The `<dialog>` element can be closed via relevant platform-specific close requests, or by pressing outside the `<dialog>`. This is equivalent to the ["light dismiss" behavior of "auto" state popovers](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).

> [!NOTE]
> If the `<dialog>` element does not have a `closedby` value specified, or it is specified with an invalid value, it behaves as if the value was `closerequest` if the `<dialog>` was shown via {{domxref("HTMLDialogElement.showModal()", "showModal()")}}, or `none` if it was not.

## Examples

```js
const dialogElem = document.querySelector("dialog");

dialogElem.closedBy;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("dialog") }}
