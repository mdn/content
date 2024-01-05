---
title: "TextUpdateEvent: selectionStart property"
short-title: selectionStart
slug: Web/API/TextUpdateEvent/selectionStart
page-type: web-api-instance-property
browser-compat: api.TextUpdateEvent.selectionStart
---

{{APIRef("EditContext API")}}

The **`TextUpdateEvent.selectionStart`** read-only property indicates the position of the end of the selection (or caret) within the text content of the editable region attached to the {{domxref("EditContext")}} object.

## Value

A {{jsxref("Number")}}.

## Examples

This example shows how to use the `selectionStart` property to render the selected text within a {{domxref("EditContext/textupdate_event", "textupdate")}} event handler.

```js-nolint
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("textupdate", e => {
  // Clear the current content.
  editorElement.innerHTML = "";

  const text = editContext.text;
  const { selectionStart, selectionEnd } = e;

  if (selectionStart !== selectionEnd) {
    // Render selected text.
    const textBefore = document.createElement("span");
    textBefore.textContent = text.substring(0, selectionStart);

    const textSelected = document.createElement("span");
    textSelected.classList.add("selection");
    textSelected.textContent = text.substring(selectionStart, selectionEnd);

    const textAfter = document.createElement("span");
    textAfter.textContent = text.substring(selectionEnd);

    // Append the text nodes to the editor element.
    editorElement.appendChild(textBefore);
    editorElement.appendChild(textSelected);
    editorElement.appendChild(textAfter);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
