---
title: "ReadableStreamBYOBReader: releaseLock() method"
short-title: releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
page-type: web-api-instance-method
browser-compat: api.ReadableStreamBYOBReader.releaseLock
---

{{APIRef("Streams")}}

The **`releaseLock()`** method of the {{domxref("ReadableStreamBYOBReader")}} interface releases the reader's lock on the stream.
After the lock is released, the reader is no longer active.

The reader will appear errored if the associated stream is errored when the lock is released; otherwise, the reader will appear closed.

If the reader's lock is released while it still has pending read requests then the promises returned by the reader's {{domxref("ReadableStreamBYOBReader.read()")}} method are immediately rejected with a `TypeError`.
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
  - : Thrown if the source object is not a `ReadableStreamBYOBReader`.

## Examples

A trivial examples is shown below.
A lock is created as soon as the reader is created on the stream.

```js
const reader = stream.getReader({ mode: "byob" });
reader.releaseLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} constructor
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
