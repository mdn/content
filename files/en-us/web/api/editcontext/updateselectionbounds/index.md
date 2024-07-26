---
title: "EditContext: updateSelectionBounds() method"
short-title: updateSelectionBounds()
slug: Web/API/EditContext/updateSelectionBounds
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.updateSelectionBounds
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`EditContext.updateSelectionBounds()`** method of the {{domxref("EditContext")}} interface is used to inform the operating system about the bounds of the text selection within the editable region that's associated with the `EditContext` object.

Call this method to tell the operating system the bounds of the user's current selection. You should call the method whenever the user's selection changes in the editable region. The selection bounds are used by the operating system to help position the IME window or any other platform-specific editing-related UI surfaces.

## Syntax

```js-nolint
updateSelectionBounds(selectionBounds)
```

### Parameters

- `selectionBounds`
  - : A {{domxref("DOMRect")}} object representing the new selection bounds.

### Exceptions

- If no argument is provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- If the provided argument is not a {{domxref("DOMRect")}} a `TypeError` {{domxref("DOMException")}} is thrown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
