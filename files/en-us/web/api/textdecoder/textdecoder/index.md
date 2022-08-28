---
title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Encoding
  - Reference
  - TextDecoder
browser-compat: api.TextDecoder.TextDecoder
---
{{APIRef("Encoding API")}}

The **`TextDecoder()`** constructor returns a newly created
{{DOMxRef("TextDecoder")}} object for the encoding specified in parameter.

If the value for _utfLabel_ is unknown, or is one of the two values leading to a `'replacement'` decoding algorithm (`"iso-2022-cn"` or `"iso-2022-cn-ext"`), a {{jsxref("RangeError")}} is thrown.

## Syntax

```js
new TextDecoder()
new TextDecoder(utfLabel)
new TextDecoder(utfLabel, options)
```

### Parameters

- `utfLabel` {{optional_inline}}
  - : A string, defaulting to `"utf-8"`, containing the
    _label_ of the encoder. This may be [any valid label](/en-US/docs/Web/API/Encoding_API/Encodings).
- `options` {{optional_inline}}

  - : A `TextDecoderOptions` dictionary with the property:

    - `fatal`
      - : A [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
        flag indicating if the {{DOMxRef("TextDecoder.decode()")}} method must throw a
        {{jsxref("TypeError")}} when an coding error is found. It defaults to `false`.

## Examples

```js
const textDecoder1 = new TextDecoder("iso-8859-2");
const textDecoder2 = new TextDecoder();
const textDecoder3 = new TextDecoder("csiso2022kr", { fatal: true }); // Allows TypeError exception to be thrown.
const textDecoder4 = new TextDecoder("iso-2022-cn"); // Throw a RangeError exception.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface it belongs to.
