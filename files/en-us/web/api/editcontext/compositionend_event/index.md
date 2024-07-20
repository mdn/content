---
title: "EditContext: compositionend event"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.EditContext.compositionend_event
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The `compositionend` event of the {{domxref("EditContext")}} interface fires when composition using a {{glossary("Input Method Editor")}} (IME) window ends.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("compositionend", (event) => {});

oncompositionend = (event) => {};
```

## Examples

### Using `compositionend` to change the editable region's border

In the following example, the editable region's border is set to red when the `compositionstart` event fires, and back to black when the `compositionend` event fires. Note that the event listener callbacks in this example are only called when using an IME window, or other platform-specific editing UI surfaces, to compose text.

```css
#text-editor {
  border: 1px solid black;
}
#text-editor.is-composing {
  border-color: red;
}
```

```html
<div id="text-editor"></div>
```

```js
const editorElement = document.getElementById("text-editor");
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("compositionstart", (event) => {
  editorElement.classList.add("is-composing");
});

editContext.addEventListener("compositionend", (event) => {
  editorElement.classList.remove("is-composing");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
