---
title: WritableStreamDefaultWriter.closed
slug: Web/API/WritableStreamDefaultWriter/closed
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - closed
browser-compat: api.WritableStreamDefaultWriter.closed
---
{{APIRef("Streams")}}

The **`closed`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns a
{{jsxref("Promise")}} that fulfills if the stream becomes closed, or rejects if
the stream errors or the writer's lock is released.

## Value

A {{jsxref("Promise")}}.

## Examples

```js
const writableStream = new WritableStream({
  start(controller) {
  },
  write(chunk, controller) {
    // ...
  },
  close(controller) {
    // ...
  },
  abort(err) {
    // ...
  }
}, queuingStrategy);

// ...

const writer = writableStream.getWriter();

// ..

// check if the stream is closed
writer.closed.then(() => {
  console.log('writer closed');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
