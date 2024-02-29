---
title: "EditContext: updateControlBounds() method"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.updateControlBounds
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`EditContext.updateControlBounds()`** method of the {{domxref("EditContext")}} interface is used to inform the operating system about the position and size of the editable text region of the `EditContext` object.

Call this method to tell the operating system the bounds of the current editable region. You should call it when initializing the EditContext, and whenever the editable region's bounds change such as when the webpage is resized. These bounds are used to position platform-specific editing-related UI surfaces such as an {{glossary("Input Method Editor")}} (IME) window.

## Syntax

```js-nolint
updateControlBounds(controlBounds)
```

### Parameters

- `controlBounds`
  - : A {{domxref("DOMRect")}} object representing the new control bounds.

### Exceptions

- If no argument is provided, a `TypeError` {{domxref("DOMException")}} is thrown.
- If the provided argument is not a {{domxref("DOMRect")}} a `TypeError` {{domxref("DOMException")}} is thrown.

## Examples

### Updating the control bounds when the editor is initialized and on window resize

This example shows how to use the `updateControlBounds()` method to tell the platform where the editable region is at all times.

```css
#editor {
  border: 1px solid black;
  height: 50vw;
  width: 50vh;
}
```

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

function updateControlBounds() {
  const editorBounds = editorEl.getBoundingClientRect();
  editContext.updateControlBounds(editorBounds);
  console.log(
    `Updated control bounds to ${editorBounds.x}, ${editorBounds.y}, ${editorBounds.width}, ${editorBounds.height}`,
  );
}

// Update the control bounds now.
updateControlBounds();
// And when the page is resized.
window.addEventListener("resize", updateControlBounds);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
