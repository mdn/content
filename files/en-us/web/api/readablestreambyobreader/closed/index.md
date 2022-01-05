---
title: ReadableStreamBYOBReader.closed
slug: Web/API/ReadableStreamBYOBReader/closed
tags:
  - API
  - Experimental
  - Property
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - closed
browser-compat: api.ReadableStreamBYOBReader.closed
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`closed`** read-only property
of the {{domxref("ReadableStreamBYOBReader")}} interface returns a
{{jsxref("Promise")}} that fulfills when the stream closes or the reader's lock
is released, or rejects if the stream throws an error. This property enables you
to write code that responds to an end to the streaming process.

## Syntax

```js
var closed = readableStreamBYOBReader.closed;
```

### Value

A {{jsxref("Promise")}}.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
