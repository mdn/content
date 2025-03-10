---
title: TextUpdateEvent
slug: Web/API/TextUpdateEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.TextUpdateEvent
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`TextUpdateEvent`** interface is a [DOM event](/en-US/docs/Web/API/Event) that represents a text or selection update in an editable text region that's attached to an {{domxref("EditContext")}} instance.

This interface inherits properties from {{domxref("Event")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("TextUpdateEvent.TextUpdateEvent", "TextUpdateEvent()")}} {{experimental_inline}}
  - : Creates a new `TextUpdateEvent` object.

## Instance properties

- {{domxref('TextUpdateEvent.updateRangeStart')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the index of the first character in the range of text that was updated.
- {{domxref('TextUpdateEvent.updateRangeEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the index of the last character in the range of text that was updated.
- {{domxref('TextUpdateEvent.text')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the text that was inserted in the updated range.
- {{domxref('TextUpdateEvent.selectionStart')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the index of the first character in the new selection range, after the update.
- {{domxref('TextUpdateEvent.selectionEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the index of the last character in the new selection range, after the update.

## Examples

### Rendering the updated text in an editable canvas

In the following example, the EditContext API is used to render editable text in a `<canvas>` element, and the `textupdate` event is used to render the text when the user is typing.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the text.
  ctx.fillText(editContext.text, 10, 10);
}

editContext.addEventListener("textupdate", (e) => {
  // Re-render the editor view when the user is entering text.
  render();

  console.log(
    `The user entered ${e.text}. Rendering the entire text: ${editContext.text}`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
