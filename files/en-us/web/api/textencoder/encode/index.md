---
title: TextEncoder.prototype.encode()
slug: Web/API/TextEncoder/encode
tags:
  - API
  - Encoding
  - Method
  - Reference
  - TextEncoder
  - encode
browser-compat: api.TextEncoder.encode
---
{{APIRef("Encoding API")}}

The **`TextEncoder.prototype.encode()`** method takes a
{{domxref("USVString")}} as input, and returns a {{jsxref("Global_Objects/Uint8Array",
  "Uint8Array")}} containing the text given in parameters encoded with the specific method
for that `TextEncoder` object.

## Syntax

```js
b1 = encoder.encode(string);
```

### Parameters

- `string`
  - : Is a {{DOMxRef("USVString")}} containing the text to encode.

### Return value

A {{jsxref("Uint8Array")}} object.

## Examples

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result: </p>
```

```js
const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextEncoder")}} interface it belongs to.
