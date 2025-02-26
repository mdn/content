---
title: "EditContext: textupdate event"
short-title: textupdate
slug: Web/API/EditContext/textupdate_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.EditContext.textupdate_event
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The `textupdate` event of the {{domxref("EditContext")}} interface fires when the user has made changes to the text or selection of an editable region that's attached to an `EditContext` instance.

This event makes it possible to render the updated text and selection in the UI, in response to user input.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("textupdate", (event) => {});

ontextupdate = (event) => {};
```

## Event type

A {{domxref("TextUpdateEvent")}}. Inherits from {{domxref("Event")}}.

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('TextUpdateEvent.updateRangeStart')}} {{readonlyinline}}
  - : Returns the index of the first character in the range of text that was updated.
- {{domxref('TextUpdateEvent.updateRangeEnd')}} {{readonlyinline}}
  - : Returns the index of the last character in the range of text that was updated.
- {{domxref('TextUpdateEvent.text')}} {{readonlyinline}}
  - : Returns the text that was inserted in the updated range.
- {{domxref('TextUpdateEvent.selectionStart')}} {{readonlyinline}}
  - : Returns the index of the first character in the new selection range, after the update.
- {{domxref('TextUpdateEvent.selectionEnd')}} {{readonlyinline}}
  - : Returns the index of the last character in the new selection range, after the update.

## Examples

### Rendering the updated text on `textupdate`

In the following example, the `textupdate` event of the EditContext API is used to render the text a user enters in an editable `<canvas>` element.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // When the user has focus on the <canvas> and enters text,
  // this event is fired, and we use it to re-render the text.
  console.log(
    `The user entered the text: ${e.text} at ${e.updateRangeStart}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
