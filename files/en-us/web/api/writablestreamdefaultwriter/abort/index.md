---
title: "WritableStreamDefaultWriter: abort() method"
short-title: abort()
slug: Web/API/WritableStreamDefaultWriter/abort
page-type: web-api-instance-method
browser-compat: api.WritableStreamDefaultWriter.abort
---

{{APIRef("Streams")}}

The **`abort()`** method of the
{{domxref("WritableStreamDefaultWriter")}} interface aborts the stream, signaling that
the producer can no longer successfully write to the stream and it is to be immediately
moved to an error state, with any queued writes discarded.

If the writer is active, the `abort()` method behaves the same as that for
the associated stream ({{domxref("WritableStream.abort()")}}). If not, it returns a
rejected promise.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameters

- `reason` {{optional_inline}}
  - : A string representing a human-readable reason for the abort.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason`
parameter.

### Exceptions

- {{jsxref("TypeError")}}
  - : The stream you are trying to abort is not a {{domxref("WritableStream")}}, or it is
    locked.

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

// abort the stream when desired
writer.abort.then((reason) => {
  console.log(reason);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
