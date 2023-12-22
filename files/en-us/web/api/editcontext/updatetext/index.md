---
title: "EditContext: updateText() method"
short-title: updateText()
slug: Web/API/EditContext/updateText
page-type: web-api-instance-method
browser-compat: api.EditContext.updateText
---

{{APIRef("EditContext API")}}

The **`updateText()`** method of the {{domxref("EditContext")}} interface updates the internal text content of an `EditContext` object.

This method doesn't need to be used when the user types text in the associated element. The `EditContext` object will automatically update its internal text content, and will fire {{domxref("EditContext.textupdate_event", "textupdate")}} events as needed.

This method can, however, be used when the user interacts with the text content in other ways, such as when deleting text using the backspace or Delete keys, or when pasting text from the clipboard.

## Syntax

```js-nolint
updateText(rangeStart, rangeEnd, text)
```

### Parameters

- `rangeStart`
  - : A number representing the start of the range of text to replace.
- `rangeEnd`
  - : A number representing the end of the range of text to replace.
- `text`
  - : A string representing the new text content.

### Exceptions

- If less than three arguments are provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- if `rangeStart` is greater than `rangeEnd`, a {{domxref("DOMException")}} is thrown.

## Example

This example shows how to use the `updateText` method to update the text content in the `EditContext` of a `canvas` element when the user presses the Delete key.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

canvas.addEventListener("keydown", e => {
  if (e.key == "Backspace" && editContext.selectionStart > 0) {
    if (editContext.selectionStart === editContext.selectionEnd) {
      editContext.updateText(
        editContext.selectionStart - 1,
        editContext.selectionStart,
        ""
      );
      editContext.updateSelection(
        editContext.selectionStart - 1,
        editContext.selectionStart - 1
      );
    } else {
      editContext.updateText(
        editContext.selectionStart,
        editContext.selectionEnd,
        ""
      );
      editContext.updateSelection(
        editContext.selectionStart,
        editContext.selectionStart
      );
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
