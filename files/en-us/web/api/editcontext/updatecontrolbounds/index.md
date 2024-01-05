---
title: "EditContext: updateControlBounds() method"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
page-type: web-api-instance-method
browser-compat: api.EditContext.updateControlBounds
---

{{APIRef("EditContext API")}}

The **`EditContext.updateControlBounds()`** method of the {{domxref("EditContext")}} interface is used to inform the operating system about the position and size of the editable text region of the `EditContext` object.

TODO: WHAT DOES CALLING THIS METHOD DO? WHY AND WHEN DOES EDITCONTEXT NEED IT?

## Syntax

```js-nolint
updateControlBounds(controlBounds)
```

### Parameters

- `controlBounds`
  - : A {{jsxref("DOMRect")}} object representing the new control bounds.

### Exceptions

- If no argument is provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- If the provided argument is not a {{jsxref("DOMRect")}} a `TypeError` {{domxref("DOMException")}} is thrown.

## Example

...

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
