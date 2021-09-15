---
title: TextEncoderStream()
slug: Web/API/TextEncoderStream/TextEncoderStream
tags:
  - API
  - Constructor
  - Reference
  - TextEncoderStream
browser-compat: api.TextEncoderStream.TextEncoderStream
---
{{APIRef("Encoding API")}}

The **`TextEncoderStream()`** constructor creates a new {{domxref("TextEncoderStream")}} object which is used to convert a stream of strings into bytes using UTF-8 encoding.

## Syntax

    var TextEncoderStream = new TextEncoderStream();

## Examples

In this example a `TextEncoderStream` is created and used to upload a stream of text.

```js
const body = textStream.pipeThrough(new TextEncoderStream());
fetch('/dest', { method: 'POST', body, headers: {'Content-Type': 'text/plain; charset=UTF-8'} });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
