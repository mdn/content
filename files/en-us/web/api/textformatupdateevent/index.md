---
title: TextFormatUpdateEvent
slug: Web/API/TextFormatUpdateEvent
page-type: web-api-interface
browser-compat: api.TextFormatUpdateEvent
---

{{APIRef("EditContext API")}}

The **`TextFormatUpdateEvent`** interface is a {{domxref("Event","DOM event")}} that represents a list of text formats that an {{glossary("Input Method Editor")}} (IME) window wants to apply to the text being composed in an editable region that's attached to an {{domxref("EditContext")}} instance.

This interface inherits properties from {{domxref("Event")}}.

{{InheritanceDiagram}}

## Instance methods

- {{domxref('TextFormatUpdateEvent.getTextFormats')}}
  - : Returns an {{jsxref("Array")}} of {{domxref("TextFormat")}} objects that represent the formats that the IME window wants to apply to the text.

## Examples

### Styling IME-composed text

In the following example, the `textformatupdate` event is used to update the formatting of the text in the editable region.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const TEXT_X = 10;
const TEXT_Y = 10;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textformatupdate", (event) => {
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the text.
  ctx.fillText(editContext.text, TEXT_X, TEXT_Y);

  // Get the text formats that the IME window wants to apply.
  const formats = e.getTextFormats();

  // Iterate over the text formats
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // For brevity, this example only draws a simple underline.
    // Use underlineStyle and underlineThickness to draw the correct underline.

    ctx.beginPath();
    ctx.moveTo(TEXT_X + underlineXStart, underlineY);
    ctx.lineTo(TEXT_X + underlineXEnd, underlineY);
    ctx.stroke();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
