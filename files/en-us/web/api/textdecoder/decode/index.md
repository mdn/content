---
title: TextDecoder.prototype.decode()
slug: Web/API/TextDecoder/decode
tags:
  - API
  - Encoding
  - Experimental
  - Method
  - TextDecoder
browser-compat: api.TextDecoder.decode
---
{{APIRef("Encoding API")}}{{SeeCompatTable}}

The **`TextDecoder.prototype.decode()`** method returns a
{{DOMxRef("DOMString")}} containing the text, given in parameters, decoded with the
specific method for that `TextDecoder` object.

## Syntax

```js
b1 = decoder.decode(buffer, options);
b2 = decoder.decode(buffer);
b3 = decoder.decode();
```

### Parameters

- `buffer` {{Optional_Inline}}
  - : Is either an
    [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    or an [`ArrayBufferView`](/en-US/docs/Web/API/ArrayBufferView)
    containing the text to decode.
- `options` {{Optional_Inline}}

  - : Is a `TextDecodeOptions` dictionary with the property:

    - `stream`
      - : A boolean flag indicating that additional data will follow in
        subsequent calls to decode(). Set to true if processing the data in chunks, and
        false for the final chunk or if the data is not chunked. It defaults to false.

## Example

This example encodes and decodes the euro symbol, €.

### HTML

```html
<p>Encoded value: <span id="encoded-value"></span></p>
<p>Decoded value: <span id="decoded-value"></span></p>
```

### JavaScript

```js
const encoder = new TextEncoder();
const array = encoder.encode('€'); // Uint8Array(3) [226, 130, 172]
document.getElementById('encoded-value').textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById('decoded-value').textContent = str;
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface it belongs to.
