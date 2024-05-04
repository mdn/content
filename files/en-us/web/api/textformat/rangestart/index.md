---
title: "TextFormat: rangeStart property"
short-title: rangeStart
slug: Web/API/TextFormat/rangeStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TextFormat.rangeStart
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`rangeStart`** property of the {{domxref("TextFormat")}} interface indicates the start position of the text range that needs to be formatted with the given text format.

## Value

A {{jsxref("Number")}}.

## Examples

### Reading the range of text that needs to be formatted

The following example shows how to use the `textformatupdate` event's `rangeStart` and `rangeEnd` properties to determine the range of text that needs to be formatted. Note that the event listener callback in this example is only called when using an IME window to compose text.

```html
<div id="editor" style="height:200px;background:#eee;"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext(editorEl);
editorEl.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(
      `IME wants to apply formatting between ${format.rangeStart} and ${format.rangeEnd}.`,
    );
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextFormat")}} interface it belongs to.
