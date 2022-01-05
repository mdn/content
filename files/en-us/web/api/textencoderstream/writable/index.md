---
title: TextEncoderStream.writable
slug: Web/API/TextEncoderStream/writable
tags:
  - API
  - Property
  - Reference
  - writable
  - TextEncoderStream
  - Read-only
browser-compat: api.TextEncoderStream.writable
---
{{APIRef("Encoding API")}}

The **`writable`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a {{domxref("WritableStream")}}.

## Syntax

```js
var writable = TextEncoderStream.writable;
```

### Value

A {{domxref("WritableStream")}}.

## Examples

The following example demonstrates how to return a `WritableStream` from a `TextEncoderStream` object.

```js
stream = new TextEncoderStream();
console.log(stream.writeable); //a WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
