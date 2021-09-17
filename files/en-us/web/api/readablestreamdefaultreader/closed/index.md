---
title: ReadableStreamDefaultReader.closed
slug: Web/API/ReadableStreamDefaultReader/closed
tags:
  - API
  - Property
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - closed
browser-compat: api.ReadableStreamDefaultReader.closed
---
{{APIRef("Streams")}}

The **`closed`** read-only property of the
{{domxref("ReadableStreamDefaultReader")}} interface returns a
{{jsxref("Promise")}} that fulfills when the stream closes or the reader's lock
is released, or rejects if the stream throws an error. This property enables you
to write code that responds to an end to the streaming process.

## Syntax

```js
var closed = readableStreamDefaultReader.closed;
```

### Value

A {{jsxref("Promise")}}.

## Examples

In this snippet, a previously-created reader is queried to see if the stream has been
closed. When it is closed, the promise fulfills and the message is logged to the
console.

```js
reader.closed.then(() => {
  console.log('reader closed');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
