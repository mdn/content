---
title: "TextFormat: underlineStyle property"
short-title: underlineStyle
slug: Web/API/TextFormat/underlineStyle
page-type: web-api-instance-property
browser-compat: api.TextFormat.underlineStyle
---

{{APIRef("EditContext API")}}

The **`underlineStyle`** property of the {{domxref("TextFormat")}} interface indicates the style of the underline that needs to be applied to the text range that is being formatted.

## Value

A {{jsxref("String")}} that is one of the following values:

- `"none"`: No underline.
- `"solid"`: A solid underline.
- `"double"`: A double underline.
- `"dotted"`: A dotted underline.
- `"dashed"`: A dashed underline.
- `"wavy"`: A wavy underline.

## Example

```js-nolint
editContext.addEventListener("textformatupdate", (event) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(`IME wants to apply a ${format.underlineStyle} underline between ${format.rangeStart} and ${format.rangeEnd}.`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
