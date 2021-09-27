---
title: WritableStreamDefaultWriter.abort()
slug: Web/API/WritableStreamDefaultWriter/abort
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - abort
browser-compat: api.WritableStreamDefaultWriter.abort
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`abort()`** method of the
{{domxref("WritableStreamDefaultWriter")}} interface aborts the stream, signaling that
the producer can no longer successfully write to the stream and it is to be immediately
moved to an error state, with any queued writes discarded.

If the writer is active, the `abort()` method behaves the same as that for
the associated stream ({{domxref("WritableStream.abort()")}}). If not, it returns a
rejected promise.

## Syntax

```js
var promise = writableStreamDefaultWriter.abort(reason);
```

### Parameters

- reason {{optional_inline}}
  - : A {{domxref("DOMString")}} representing a human-readable reason for the abort.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason`
parameter.

### Exceptions

- TypeError
  - : The stream you are trying to abort is not a {{domxref("WritableStream")}}, or it is
    locked.

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

// abort the stream when desired
writer.abort.then((reason) => {
  console.log(reason);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
