---
title: "TextEncoder: encode() method"
short-title: encode()
slug: Web/API/TextEncoder/encode
page-type: web-api-instance-method
browser-compat: api.TextEncoder.encode
---

{{APIRef("Encoding API")}}

The **`TextEncoder.encode()`** method takes a string as input, and returns a {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} containing the text given in parameters encoded with the specific method for that {{domxref("TextEncoder")}} object.

## Syntax

```js-nolint
encode(string)
```

### Parameters

- `string`
  - : A string containing the text to encode.

### Return value

A {{jsxref("Uint8Array")}} object.

## Examples

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result:</p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
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
