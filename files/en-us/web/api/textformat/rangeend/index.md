---
title: "TextFormat: rangeEnd property"
short-title: rangeEnd
slug: Web/API/TextFormat/rangeEnd
page-type: web-api-instance-property
browser-compat: api.TextFormat.rangeEnd
---

{{APIRef("EditContext API")}}

The **`rangeEnd`** property of the {{domxref("TextFormat")}} interface indicates the end position of the text range that needs to be formatted with the given text format.

## Value

A {{jsxref("Number")}}.

## Examples

### Reading the range of text that needs to be formatted

The following example shows how to use the `textformatupdate` event's `rangeStart` and `rangeEnd` properties to determine the range of text that needs to be formatted.

```js
editContext.addEventListener("textformatupdate", (event) => {
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
