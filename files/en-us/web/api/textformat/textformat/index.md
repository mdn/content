---
title: "TextFormat: TextFormat() constructor"
short-title: TextFormat()
slug: Web/API/TextFormat/TextFormat
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.TextFormat.TextFormat
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`TextFormat()`** constructor returns a new {{DOMxRef("TextFormat")}} object.

## Syntax

```js-nolint
new TextFormat()
new TextFormat(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An optional object with the following properties:
    - `rangeStart`
      - : A number representing the start position of the text range that needs to be formatted.
    - `rangeEnd`
      - : A number representing the end position of the text range that needs to be formatted.
    - `underlineStyle`
      - : A string representing the underline style of the text range that needs to be formatted.
    - `underlineThickness`
      - : A string representing the underline thickness of the text range that needs to be formatted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextFormat")}} interface it belongs to.
