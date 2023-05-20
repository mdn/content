---
title: "TextDecoder: TextDecoder() constructor"
short-title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
page-type: web-api-constructor
browser-compat: api.TextDecoder.TextDecoder
---

{{APIRef("Encoding API")}}

The **`TextDecoder()`** constructor returns a newly created {{DOMxRef("TextDecoder")}} object for the encoding specified in parameter.

## Syntax

```js-nolint
new TextDecoder()
new TextDecoder(label)
new TextDecoder(label, options)
```

### Parameters

- `label` {{optional_inline}}
  - : A string, defaulting to `"utf-8"`.
    This may be [any valid label](/en-US/docs/Web/API/Encoding_API/Encodings).
- `options` {{optional_inline}}

  - : An object with the property:

    - `fatal`

      - : A boolean value indicating if the {{DOMxRef("TextDecoder.decode()")}} method must throw a {{jsxref("TypeError")}} when decoding invalid data.
        It defaults to `false`, which means that the decoder will substitute malformed data with a replacement character.

    - `ignoreBOM`
      - : A boolean value indicating whether the [byte order mark](https://www.w3.org/International/questions/qa-byte-order-mark) is ignored.
        It defaults to `false`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the value of `label` is unknown, or is one of the values leading to a `'replacement'` decoding algorithm (`"iso-2022-cn"` or `"iso-2022-cn-ext"`).

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
