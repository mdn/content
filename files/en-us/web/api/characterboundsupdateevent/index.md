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

## Constructor

- {{domxref("CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent", "CharacterBoundsUpdateEvent()")}}
  - : Creates a new `CharacterBoundsUpdateEvent` object.

## Instance properties

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}}
  - : The offset of the first character within the editable region text for which the operating system needs the bounds.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}}
  - : The offset of the last character within the editable region text for which the operating system needs the bounds.

## Examples

### Updating the character bounds when needed

This example shows how to use the `characterboundsupdate` event and the `updateCharacterBounds` method together to inform the operating system of the character bounds it requires. Note that the event listener callback is only called when using an IME window, or another platform-specific editing UI surface, to compose text.

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

  console.log("The required character bounds are", charBounds);
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
