---
title: "EditContext: characterboundsupdate event"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.EditContext.characterboundsupdate_event
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The `characterboundsupdate` event fires when the operating system needs to know the bounds of certain characters within editable text region of the `EditContext` object.

This happens when the operating system needs to display a platform-specific editing-related UI surface such as an {{glossary("Input Method Editor")}} (IME) window.

When the `characterboundsupdate` event fires, you should calculate the character bounds for the text, and then call the {{domxref("EditContext.updateCharacterBounds()")}} method to give the operating system the information it needs.

See the documentation of the {{domxref("EditContext.updateCharacterBounds()", "updateCharacterBounds")}} method for more information about when and how to use the `characterboundsupdate` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("characterboundsupdate", (event) => {});

oncharacterboundsupdate = (event) => {};
```

## Event type

A {{domxref("CharacterBoundsUpdateEvent")}}. Inherits from {{domxref("Event")}}.

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}}
  - : The offset of the first character within the editable region text for which the operating system needs the bounds.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}}
  - : The offset of the last character within the editable region text for which the operating system needs the bounds.

## Examples

### Updating the character bounds when needed

This example shows how to use the `updateCharacterBounds` method to update the character bounds in the `EditContext` of a `canvas` element when the operating system indicates that it requires the information. Note that the event listener callback is only called when using an IME window, or other platform-specific editing UI surfaces, to compose text.

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
