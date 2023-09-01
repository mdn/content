---
title: "WritableStream: locked property"
short-title: locked
slug: Web/API/WritableStream/locked
page-type: web-api-instance-property
browser-compat: api.WritableStream.locked
---

{{APIRef("Streams")}}

The **`locked`** read-only property of the {{domxref("WritableStream")}} interface returns a boolean indicating whether the `WritableStream` is locked to a writer.

## Value

A boolean value indicating whether or not the writable stream is locked.

## Examples

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // ...
    },
    close() {
      // ...
    },
    abort(err) {
      // ...
    },
  },
  queuingStrategy,
);

// ...

const writer = writableStream.getWriter();

writableStream.locked;
// should return true, as the stream has been locked to a writer
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
