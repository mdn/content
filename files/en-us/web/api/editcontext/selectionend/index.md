---
title: "EditContext: selectionEnd property"
short-title: selectionEnd
slug: Web/API/EditContext/selectionEnd
page-type: web-api-instance-property
browser-compat: api.EditContext.selectionEnd
---

{{APIRef("EditContext API")}}

The **`selectionEnd`** read-only property of the {{domxref("EditContext")}} refers to the offset, within the editable text content, of the end of the current selection.

## Value

A {{jsxref("Number")}}

## Examples

### Using `selectionEnd` to render the user selection in an editable canvas

This example shows how to use the `selectionStart` and `selectionEnd` properties to draw the current selection in a `<canvas>` element that's associated to an `EditContext`.

For brevity, the code snippet doesn't include the code that sets the selection when the user clicks and drag on the canvas, or uses the keyboard to move the selection.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the text content.
  ctx.fillStyle = "black";
  ctx.fillText(editContext.text, 0, 50);

  // Get the width from the start of the text to the start of the selection.
  const selectionStartX = ctx.measureText(
    editContext.text.substring(0, editContext.selectionStart),
  );

  // Get the width of the selection.
  const selectionWidth = ctx.measureText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
  );

  // Draw a rectangle to represent the selection.
  ctx.fillRect(selectionStartX, 50, selectionWidth, 20);

  // Re-render just the selection text in white, over the rectangle.
  ctx.fillStyle = "white";
  ctx.fillText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
    selectionStartX,
    50,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
