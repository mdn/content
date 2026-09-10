---
title: "WritableStreamDefaultWriter: desiredSize property"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
page-type: web-api-instance-property
browser-compat: api.WritableStreamDefaultWriter.desiredSize
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`desiredSize`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns the desired size required
to fill the stream's internal queue.

## Value

A number, or `null`.

The number can be negative if the queue is over-full. When a custom queuing strategy is used, its chunk sizes can cause the number to have a fractional component. The value is `null` if the stream is erroring or errored, and `0` if it is closed.

### Exceptions

- {{jsxref("TypeError")}}
  - : The writer's lock is released.

## Examples

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      // …
    },
  },
  queuingStrategy,
);

// …

const writer = writableStream.getWriter();

// …

// return stream's desired size
const size = writer.desiredSize;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
