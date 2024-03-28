---
title: "EditContext: updateCharacterBounds() method"
short-title: updateCharacterBounds()
slug: Web/API/EditContext/updateCharacterBounds
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.updateCharacterBounds
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`EditContext.updateCharacterBounds()`** method of the {{domxref("EditContext")}} interface should be called as response to a {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} event to inform the operating system about the position and size of the characters in the `EditContext` object.

The `characterboundsupdate` event is the only time you need to call the `updateCharacterBounds()` method.

The character bounds information is then used by the operating system to correctly position the {{glossary("Input Method Editor")}} (IME) window when needed. This is especially important in situations where the operating system can't automatically detect the position and size of the characters, such as when rendering text in a `<canvas>` element.

### Avoid sudden jumps in the IME window position

Calculating the character bounds and calling `updateCharacterBounds` synchronously, within the `characterboundsupdate` event ensures that the operating system has the information it needs when it displays the IME window. If you don't call `updateCharacterBounds()` synchronously within the event handler, users may observe the IME window being displayed in the wrong position before being moved to the correct position.

### Which characters to include

The `updateCharacterBounds()` method should only be called when the operating system indicates that it requires the information, and only for the characters that are included in the current IME composition.

The event object passed to the `characterboundsupdate` event handler contains a `rangeStart` and `rangeEnd` properties that indicate the range of characters that are currently being composed. The `updateCharacterBounds()` method should only be called for the characters in this range.

## Syntax

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### Parameters

- `rangeStart`
  - : A number representing the start of the range of text for which character bounds are provided.
- `characterBounds`
  - : An {{jsxref("Array")}} containing {{domxref("DOMRect")}} objects representing the character bounds.

### Exceptions

- If less than two arguments are provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- if `rangeStart` is not a number or `characterBounds` is not iterable, a `TypeError` {{domxref("DOMException")}} is thrown.

## Examples

### Updating the character bounds when needed

This example shows how to use the `updateCharacterBounds` method to update the character bounds in the `EditContext` of a `<canvas>` element when the operating system indicates that it requires the information. Note that the `characterboundsupdate` event listener callback in this example is only called when using an IME window, or other platform-specific editing UI surfaces, to compose text.

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
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // Measure the character width.
  const charWidth = ctx.measureText(editContext.text[offset]).width;

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

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
