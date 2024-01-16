---
title: "TextFormat: underlineThickness property"
short-title: underlineThickness
slug: Web/API/TextFormat/underlineThickness
page-type: web-api-instance-property
browser-compat: api.TextFormat.underlineThickness
---

{{APIRef("EditContext API")}}

The **`underlineThickness`** property of the {{domxref("TextFormat")}} interface indicates the thickness of the underline that needs to be applied to the text range that is being formatted.

## Value

A {{jsxref("String")}} that is one of the following values:

- `"none"`: No underline.
- `"thin"`: A thin underline.
- `"thick"`: A thick underline.

## Examples

### Reading the underline thickness that needs to be applied

```js
editContext.addEventListener("textformatupdate", (event) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(
      `IME wants to apply a ${format.underlineThickness} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
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
