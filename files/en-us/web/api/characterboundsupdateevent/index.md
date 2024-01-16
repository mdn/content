---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
page-type: web-api-interface
browser-compat: api.CharacterBoundsUpdateEvent
---

{{APIRef("EditContext API")}}

The **`CharacterBoundsUpdateEvent`** interface is a {{domxref("Event", "DOM event")}} that represents a request from the operating system to know the bounds of certain characters within an editable region that's attached to an {{domxref("EditContext")}} instance.

This interface inherits properties from {{domxref("Event")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}}
  - : The offset of the first character within the editable region text for which the operating system needs the bounds.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}}
  - : The offset of the last character within the editable region text for which the operating system needs the bounds.

## Examples

### Updating the character bounds when needed

This example shows how to use the `updateCharacterBounds` method to update the character bounds in the `EditContext` of a `canvas` element when the operating system indicates that it requires the information.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const FONT_SIZE = 40;
const FONT = `${FONT_SIZE}px Arial`;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = FONT;

const editContext = new EditContext();
canvas.editContext = editContext;

function computeCharacterBound(offset) {
  // Measure the width from the start of the text to the character.
  const widthBeforeChar = canvasCtx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // Measure the character width.
  const charWidth = canvasCtx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // Return a DOMRect representing the character bounds.
  return DOMRect.fromRect({
    x: charX,
    y: charY - FONT_SIZE,
    width: charWidth,
    height: FONT_SIZE,
  });
}

editContext.addEventListener("characterboundsupdate", (e) => {
  const charBounds = [];
  for (let offset = e.rangeStart; offset < e.rangeEnd; offset++) {
    charBounds.push(computeCharacterBound(offset));
  }

  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
