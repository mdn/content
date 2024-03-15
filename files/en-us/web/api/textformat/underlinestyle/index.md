---
title: "TextFormat: underlineStyle property"
short-title: underlineStyle
slug: Web/API/TextFormat/underlineStyle
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TextFormat.underlineStyle
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`underlineStyle`** property of the {{domxref("TextFormat")}} interface indicates the style of the underline that needs to be applied to the text range that is being formatted.

## Value

A {{jsxref("String")}} that is one of the following values:

- `"none"`: No underline.
- `"solid"`: A solid underline.
- `"double"`: A double underline.
- `"dotted"`: A dotted underline.
- `"dashed"`: A dashed underline.
- `"wavy"`: A wavy underline.

## Examples

### Reading the underline style that needs to be applied

The following example shows how to use the `textformatupdate` event's `underlineStyle` property to determine the underline style that needs to be applied to the text being formatted. Note that the event listener callback in this example is only called when using an IME window to compose text.

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
      `IME wants to apply a ${format.underlineStyle} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
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
