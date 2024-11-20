---
title: "EditContext: updateText() method"
short-title: updateText()
slug: Web/API/EditContext/updateText
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.updateText
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`updateText()`** method of the {{domxref("EditContext")}} interface updates the internal text content of an `EditContext` object.

This method doesn't need to be used when the user types text in the associated element. The `EditContext` object will automatically update its internal text content, and will fire {{domxref("EditContext.textupdate_event", "textupdate")}} events as needed.

This method can, however, be used when the user interacts with the text content in other ways, such as when pasting text from the clipboard.

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

## Examples

### Updating the editor when the user pastes text in it

This example shows how to use the `updateText` method to update the text content in the `EditContext` of a `<canvas>` element when the user presses the <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd> shortcut to paste some text.

The example also uses the {{domxref("Clipboard.readText()")}} method to read the text from the clipboard.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 0, 40);
}

editContext.addEventListener("textupdate", (e) => {
  render();
});

canvas.addEventListener("keydown", async (e) => {
  if (e.key == "v" && (e.ctrlKey || e.metaKey)) {
    const pastedText = await navigator.clipboard.readText();
    console.log(
      `The user pasted the text: ${pastedText}. Updating the EditContext text.`,
    );

    editContext.updateText(
      editContext.selectionStart,
      editContext.selectionEnd,
      pastedText,
    );

    editContext.updateSelection(
      editContext.selectionStart + pastedText.length,
      editContext.selectionStart + pastedText.length,
    );

    render();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
