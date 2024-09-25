---
title: "TextDecoderStream: ignoreBOM property"
short-title: ignoreBOM
slug: Web/API/TextDecoderStream/ignoreBOM
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.ignoreBOM
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`ignoreBOM`** read-only property of the {{domxref("TextDecoderStream")}} interface is a {{jsxref('Boolean')}} indicating whether the [byte order mark](https://www.w3.org/International/questions/qa-byte-order-mark) will be included in the output or skipped over.

## Value

`true` if the [byte order mark](https://www.w3.org/International/questions/qa-byte-order-mark) will be included in the decoded text; `false` if it will be skipped over when decoding and omitted.

## Examples

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
