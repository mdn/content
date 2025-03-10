---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CharacterBoundsUpdateEvent
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`CharacterBoundsUpdateEvent`** interface is a [DOM event](/en-US/docs/Web/API/Event) that represents a request from the operating system to know the bounds of certain characters within an editable region that's attached to an {{domxref("EditContext")}} instance.

This interface inherits properties from {{domxref("Event")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent", "CharacterBoundsUpdateEvent()")}} {{experimental_inline}}
  - : Creates a new `CharacterBoundsUpdateEvent` object.

## Instance properties

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}} {{experimental_inline}}
  - : The offset of the first character within the editable region text for which the operating system needs the bounds.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : The offset of the last character within the editable region text for which the operating system needs the bounds.

## Examples

### Updating the character bounds when needed

This example shows how to use the `characterboundsupdate` event and the `updateCharacterBounds` method to inform the operating system of the character bounds it requires. Note that the event listener callback is only called when using an IME window, or other platform-specific editing UI surfaces, to compose text.

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

  // Update the character bounds in the EditContext instance.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);

  console.log(
    "The required character bounds are",
    charBounds
      .map((bound) => {
        return `(x: ${bound.x}, y: ${bound.y}, width: ${bound.width}, height: ${bound.height})`;
      })
      .join(", "),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
