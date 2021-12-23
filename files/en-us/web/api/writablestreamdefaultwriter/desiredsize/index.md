---
title: WritableStreamDefaultWriter.desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - desiredSize
browser-compat: api.WritableStreamDefaultWriter.desiredSize
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`desiredSize`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns the desired size required
to fill the stream's internal queue.

## Syntax

```js
var desiredSize = writableStreamDefaultWriter.desiredSize;
```

### Value

An integer. Note that this can be negative if the queue is over-full.

The value will be `null` if the stream cannot be successfully written to
(due to either being errored, or having an abort queued up), and zero if the stream is
closed.

### Exceptions

- TypeError
  - : The writer’s lock is released.

## Examples

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

...

// return stream's desired size
let size = writer.desiredSize;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
