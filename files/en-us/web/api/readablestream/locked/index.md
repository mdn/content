---
title: ReadableStream.locked
slug: Web/API/ReadableStream/locked
tags:
  - API
  - Property
  - ReadableStream
  - Reference
  - Streams
  - locked
browser-compat: api.ReadableStream.locked
---
{{APIRef("Streams")}}

The **`locked`** read-only property of the
{{domxref("ReadableStream")}} interface returns whether or not the readable stream is [locked
to a reader](https://streams.spec.whatwg.org/#lock).

## Syntax

```js
var locked = readableStream.locked;
```

### Value

A boolean value indicating whether or not the readable stream is locked.

## Examples

```js
const stream = new ReadableStream({
  ...
});

const reader = stream.getReader();

stream.locked
// should return true, as the stream has been locked to a reader
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
