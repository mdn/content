---
title: "TextDecoderStream: ignoreBOM property"
short-title: ignoreBOM
slug: Web/API/TextDecoderStream/ignoreBOM
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.ignoreBOM
---

{{APIRef("Encoding API")}}

The **`ignoreBOM`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{jsxref("boolean")}} indicating if the byte order mark (BOM) is to be ignored.

## Value

A {{jsxref("boolean")}}, initially `false`.

## Examples

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
