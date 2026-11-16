---
title: "TextEncoderStream: TextEncoderStream() constructor"
short-title: TextEncoderStream()
slug: Web/API/TextEncoderStream/TextEncoderStream
page-type: web-api-constructor
browser-compat: api.TextEncoderStream.TextEncoderStream
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`TextEncoderStream()`** constructor creates a new {{domxref("TextEncoderStream")}} object which is used to convert a stream of strings into bytes using UTF-8 encoding.

## Syntax

```js-nolint
new TextEncoderStream()
```

### Parameters

None.

## Examples

In this example a `TextEncoderStream` is created and used to upload a stream of text.

```js
const body = textStream.pipeThrough(new TextEncoderStream());
fetch("/dest", {
  method: "POST",
  body,
  headers: { "Content-Type": "text/plain; charset=UTF-8" },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
