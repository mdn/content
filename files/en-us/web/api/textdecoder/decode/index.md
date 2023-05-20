---
title: "TextDecoder: decode() method"
short-title: decode()
slug: Web/API/TextDecoder/decode
page-type: web-api-instance-method
browser-compat: api.TextDecoder.decode
---

{{APIRef("Encoding API")}}

The **`TextDecoder.decode()`** method returns a string containing text decoded from the buffer passed as a parameter.

The decoding method is defined in the current {{domxref("TextDecoder")}} object.
This includes the expected encoding of the data, and how decoding errors are handled.

## Syntax

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### Parameters

- `buffer` {{Optional_Inline}}
  - : An [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} object containing the encoded text to decode.
- `options` {{Optional_Inline}}

  - : An object with the property:

    - `stream`
      - : A boolean flag indicating whether additional data will follow in subsequent calls to `decode()`.
        Set to `true` if processing the data in chunks, and `false` for the final chunk or if the data is not chunked.
        It defaults to `false`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if there is a decoding error when the property {{DOMxRef("TextDecoder.fatal")}} is `true`.

### Return value

A string.

## Examples

This example encodes and decodes the euro symbol, €.

### HTML

```html
<p>Encoded value: <span id="encoded-value"></span></p>
<p>Decoded value: <span id="decoded-value"></span></p>
```

### JavaScript

```js
const encoder = new TextEncoder();
const array = encoder.encode("€"); // Uint8Array(3) [226, 130, 172]
document.getElementById("encoded-value").textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById("decoded-value").textContent = str;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface it belongs to.
