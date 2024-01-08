---
title: "EditContext: characterboundsupdate event"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
page-type: web-api-event
browser-compat: api.EditContext.characterboundsupdate_event
---

{{APIRef("EditContext API")}}

The `characterboundsupdate` event fires when the operating system needs to know the bounds of certain characters within editable text region of the `EditContext` object.

This happens when the operating system needs to display a platform-specific editing-related UI surface such as an {{glossary("IME")}} (Input Method Editor) window.

When the `characterboundsupdate` event fires, you should calculate the character bounds for the text, and then call the {{domxref("EditContext.updateCharacterBounds()")}} method to give the operating system the information it needs.

See the documentation of the {{domxref("EditContext.updateCharacterBounds()", "updateCharacterBounds")}} method for more information about when and how to use the `characterboundsupdate` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("characterboundsupdate", (event) => {});

oncharacterboundsupdate = (event) => {};
```

## Example

This example shows how to use the `updateCharacterBounds` method to update the character bounds in the `EditContext` of a `canvas` element when the operating system indicates that it requires the information.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const FONT_SIZE = 40;
const FONT = `${FONT_SIZE}px Arial`;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = FONT;

const editContext = new EditContext();
canvas.editContext = editContext;

function computeCharacterBound(offset) {
  // Measure the width from the start of the text to the character.
  const widthBeforeChar = canvasCtx.measureText(editContext.text.substring(0, offset)).width;

  // Measure the character width.
  const charWidth = canvasCtx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // Return a DOMRect representing the character bounds.
  return DOMRect.fromRect({
    x: charX,
    y: charY - FONT_SIZE,
    width: charWidth,
    height: FONT_SIZE
  });
}

editContext.addEventListener("characterboundsupdate", e => {
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
