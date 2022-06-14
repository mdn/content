---
title: TextDecoderStream.fatal
slug: Web/API/TextDecoderStream/fatal
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - fatal
  - TextDecoderStream
browser-compat: api.TextDecoderStream.fatal
---
{{APIRef("Encoding API")}}

The **`fatal`** read-only property of the {{domxref("TextDecoderStream")}} interface is a {{jsxref("boolean")}} indicating if the error mode of the `TextDecoderStream` object is set to `fatal`.

The two possible values of error mode are `fatal` or `replacement`, the default being `replacement` which pushes a replacement character `U+FFFD` (�) to the output.

## Value

A {{jsxref("boolean")}} which will return `true` if the error mode is set to `fatal`. Otherwise it returns `false`.

## Examples

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
