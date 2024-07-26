---
title: "EditContext: text property"
short-title: text
slug: Web/API/EditContext/text
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.EditContext.text
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`text`** read-only property of the {{domxref("EditContext")}} interface represents the editable content of the element.

## Value

A string containing the current editable content of the element that's attached to the `EditContext` object. Its initial value is the empty string.

This string may or may not be equal to the value of the {{domxref("Node.textContent", "textContent")}} property of the DOM element that's associated to the `EditContext`. The associated element might, for example, be a `<canvas>` element, which doesn't have a `textContent` property. Or, the associated element might be a `<div>` element that contains text that's different than the `EditContext.text` value, for more advanced rendering.

The `text` property of the `EditContext` object can be used as the model for the editable text region. Other properties of the `EditContext` object, such as `selectionStart` and `selectionEnd` refer to offsets within the `text` string.

## Examples

### Using `text` to render the text in an editable canvas

In the following example, the EditContext API is used to render the text a user enters in a `<canvas>` element.

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
    `The user entered the text: ${e.text}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
