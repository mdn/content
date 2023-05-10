---
title: "ReadableStreamDefaultReader: releaseLock() method"
short-title: releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
page-type: web-api-instance-method
browser-compat: api.ReadableStreamDefaultReader.releaseLock
---

{{APIRef("Streams")}}

The **`releaseLock()`** method of the {{domxref("ReadableStreamDefaultReader")}} interface releases the reader's lock on the stream.

If the associated stream is errored when the lock is released, the reader will appear errored in that same way subsequently; otherwise, the reader will appear closed.

If the reader's lock is released while it still has pending read requests then the promises returned by the reader's {{domxref("ReadableStreamDefaultReader.read()")}} method are immediately rejected with a `TypeError`.
Unread chunks remain in the stream's internal queue and can be read later by acquiring a new reader.

## Syntax

```js-nolint
releaseLock()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableStreamDefaultReader`.

## Examples

```js
function fetchStream() {
  const reader = stream.getReader();

  // ...

  reader.releaseLock();

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} constructor
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
