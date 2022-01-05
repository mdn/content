---
title: TextEncoderStream.readable
slug: Web/API/TextEncoderStream/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - TextEncoderStream
  - Read-only
browser-compat: api.TextEncoderStream.readable
---
{{APIRef("Encoding API")}}

The **`readable`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a {{domxref("ReadableStream")}}.

## Syntax

```js
var readable = TextEncoderStream.readable;
```

### Value

A {{domxref("ReadableStream")}}.

## Examples

The following example demonstrates how to return a `ReadableStream` from a `TextEncoderStream` object.

```js
stream = new TextEncoderStream();
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
