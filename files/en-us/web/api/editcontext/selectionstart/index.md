---
title: "EditContext: selectionStart property"
short-title: selectionStart
slug: Web/API/EditContext/selectionStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.EditContext.selectionStart
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`selectionStart`** read-only property of the {{domxref("EditContext")}} refers to the offset, within the editable text content, of the start of the current selection.

## Value

A {{jsxref("Number")}}

## Examples

### Using `selectionStart` to render the user selection in an editable canvas

This example shows how to use the `selectionStart` and `selectionEnd` properties to draw the current selection in a `<canvas>` element that's associated to an `EditContext`.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const ANCHOR_X = 10;
const ANCHOR_Y = 30;
const FONT_SIZE = 20;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = `${FONT_SIZE}px Arial`;

const editContext = new EditContext({
  text: "Hello world!",
  selectionStart: 6,
  selectionEnd: 11,
});
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the entire text content first.
  ctx.fillStyle = "black";
  ctx.fillText(editContext.text, ANCHOR_X, ANCHOR_Y);

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

  // Draw a rectangle on top of the text to represent the selection.
  ctx.fillStyle = "blue";
  ctx.fillRect(
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y - FONT_SIZE,
    selectionWidth.width,
    FONT_SIZE,
  );

  // Re-render just the selected text in white, over the rectangle.
  ctx.fillStyle = "white";
  ctx.fillText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y,
  );
}

render();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
