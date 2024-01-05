---
title: "TextFormat: rangeStart property"
short-title: rangeStart
slug: Web/API/TextFormat/rangeStart
page-type: web-api-instance-property
browser-compat: api.TextFormat.rangeStart
---

{{APIRef("EditContext API")}}

The **`rangeStart`** property of the {{domxref("TextFormat")}} interface indicates the start position of the text range that needs to be formatted with the given text format.

## Value

A {{jsxref("Number")}}.

## Example

```js-nolint
editContext.addEventListener("textformatupdate", (event) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(`IME wants to apply formatting between ${format.rangeStart} and ${format.rangeEnd}.`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
