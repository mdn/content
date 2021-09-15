---
title: TextDecoderStream.readable
slug: Web/API/TextDecoderStream/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - TextDecoderStream
browser-compat: api.TextDecoderStream.readable
---
{{APIRef("Encoding API")}}

The **`readable`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{domxref("ReadableStream")}}.

## Syntax

    var readable = TextDecoderStream.readable;

### Value

A {{domxref("ReadableStream")}}.

## Examples

This example shows how to return a {{domxref("ReadableStream")}} from a `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
