---
title: "WritableStreamDefaultWriter: releaseLock() method"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
page-type: web-api-instance-method
browser-compat: api.WritableStreamDefaultWriter.releaseLock
---

{{APIRef("Streams")}}

The **`releaseLock()`** method of the
{{domxref("WritableStreamDefaultWriter")}} interface releases the writer's lock on the
corresponding stream. After the lock is released, the writer is no longer active. If the
associated stream is errored when the lock is released, the writer will appear errored
in the same way from now on; otherwise, the writer will appear closed.

## Syntax

```js-nolint
releaseLock()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

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

// ...

// release writer's lock on the stream when desired
writer.releaseLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
