---
title: "TextDecoderStream: fatal property"
short-title: fatal
slug: Web/API/TextDecoderStream/fatal
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.fatal
---

{{APIRef("Encoding API")}}

The **`fatal`** read-only property of the {{domxref("TextDecoderStream")}} interface is a {{jsxref("boolean")}} indicating if the error mode of the `TextDecoderStream` object is set to `fatal`.

If the property is `true` then a decoder will throw a {{jsxref("TypeError")}} if it encounters malformed data while decoding.
If `false` the decoder will substitute the invalid data with the replacement character `U+FFFD` (�).
The value of the property is set in the [`TextDecoderStream()` constructor](/en-US/docs/Web/API/TextDecoderStream/TextDecoderStream).

## Value

A {{jsxref("boolean")}} which will return `true` if the error mode is set to "fatal".
Otherwise it returns `false`, indicating that the error mode is "replacement".

## Examples

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
