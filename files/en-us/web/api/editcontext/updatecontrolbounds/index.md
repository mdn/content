---
title: "EditContext: updateControlBounds() method"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
page-type: web-api-instance-method
browser-compat: api.EditContext.updateControlBounds
---

{{APIRef("EditContext API")}}

The **`EditContext.updateControlBounds()`** method of the {{domxref("EditContext")}} interface is used to inform the operating system about the position and size of the editable text region of the `EditContext` object.

Call this method to tell the operating system the bounds of the current editable region. You should call it when initializing the EditContext, and whenever the editable region's bounds change such as when the webpage is resized. These bounds are used to position platform-specific editing-related UI surfaces such as an {{glossary("IME")}} (Input Method Editor) window.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
