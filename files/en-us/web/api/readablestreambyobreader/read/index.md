---
title: ReadableStreamBYOBReader.read()
slug: Web/API/ReadableStreamBYOBReader/read
tags:
  - API
  - Experimental
  - Method
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - read
browser-compat: api.ReadableStreamBYOBReader.read
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`read()`** method of the
{{domxref("ReadableStreamBYOBReader")}} interface returns a {{jsxref("Promise")}} that resolves with an obect representing the next chunk in the stream's queue.

## Syntax

```js
var promise = readableStreamBYOBReader.read(view);
```

### Parameters

- view
  - : The view to be read into.

### Return value

A {{jsxref("Promise")}}, which fulfills/rejects with a result depending on the state of
the stream. The following are possible:

- If a chunk is available, the promise fulfills with an object of the form
  `{ value: theChunk, done: false }`.
- If the stream is closed, the promise fulfills with an object of the
  form `{ value: undefined, done: true }`.
- If the stream throws an error, the promise rejects with the relevant error.

### Exceptions

- TypeError
  - : The source object is not a `ReadableStreamBYOBReader`, the stream has no
    owner, the view is not an object or has become detached, or the view's length is 0.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
