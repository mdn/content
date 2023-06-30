---
title: "TextDecoderStream: TextDecoderStream() constructor"
short-title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
page-type: web-api-constructor
browser-compat: api.TextDecoderStream.TextDecoderStream
---

{{APIRef("Encoding API")}}

The **`TextDecoderStream()`** constructor creates a new {{domxref("TextDecoderStream")}} object which is used to convert a stream of text in a binary encoding into strings.

## Syntax

```js-nolint
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### Parameters

- `label`
  - : A string defaulting to `utf-8`.
    This may be [any valid label](/en-US/docs/Web/API/Encoding_API/Encodings).
- `options` {{optional_inline}}

  - : An object with the property:

    - `fatal`
      - : A boolean value indicating if this object must throw a {{jsxref("TypeError")}} when decoding invalid data.
        It defaults to `false`, which means that the decoder will substitute malformed data with a replacement character.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the value of `label` is unknown, or is one of the values leading to a `'replacement'` decoding algorithm (`"iso-2022-cn"` or `"iso-2022-cn-ext"`).

## Examples

The following example demonstrates how to decode binary data retrieved from a {{domxref("fetch()")}} call.
The data will be interpreted as UTF-8, as no `label` has been passed.

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
