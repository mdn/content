---
title: "EditContext: updateSelection() method"
short-title: updateSelection()
slug: Web/API/EditContext/updateSelection
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.updateSelection
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`updateSelection()`** method of the {{domxref("EditContext")}} interface updates the internal state of the selection within the editable text context. This method is used to update the selection state when the user interacts with the text rendering in the `EditContext`'s associated element, such as by clicking or dragging the mouse, or by using the keyboard.

## Syntax

```js-nolint
updateSelection(start, end)
```

### Parameters

- `start`
  - : A number representing the new selection start.
- `end`
  - : A number representing the new selection end.

If the `start` and `end` values are the same, the selection is equivalent to a caret.

### Exceptions

- If only one argument is provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- If either argument is not a non-negative number, a {{domxref("DOMException")}} is thrown.

## Examples

### Updating the selection when the user interacts with the text

This example shows how to use the `updateSelection` method to update the selection in the `EditContext` of a `canvas` element when the arrow keys are used to move the caret or select text in the editable region.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

canvas.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    const newPosition = Math.max(editContext.selectionStart - 1, 0);

    if (e.shiftKey) {
      editContext.updateSelection(newPosition, editContext.selectionEnd);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  } else if (e.key == "ArrowRight") {
    const newPosition = Math.min(
      editContext.selectionEnd + 1,
      editContext.text.length,
    );

    if (e.shiftKey) {
      editContext.updateSelection(editContext.selectionStart, newPosition);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  }

  console.log(
    `The new EditContext selection is ${editContext.selectionStart}, ${editContext.selectionEnd}`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
