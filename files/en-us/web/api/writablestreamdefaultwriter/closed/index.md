---
title: WritableStreamDefaultWriter.closed
slug: Web/API/WritableStreamDefaultWriter/closed
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - closed
browser-compat: api.WritableStreamDefaultWriter.closed
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`closed`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns a promise that fulfills if
the stream becomes closed or the writer's lock is released, or rejects if the stream
errors.

## Syntax

```js
var closed = writableStreamDefaultWriter.closed;
```

### Value

A {{jsxref("Promise")}}.

## Examples

```js
const writableStream = new WritableStream({
  start(controller) {
  },
  write(chunk, controller) {
    ...
  },
  close(controller) {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

..

// check if the stream is closed
writer.closed.then(() => {
  console.log('writer closed');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
