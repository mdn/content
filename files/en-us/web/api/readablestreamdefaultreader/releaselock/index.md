---
title: ReadableStreamDefaultReader.releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
tags:
  - API
  - Method
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - releaseLock
browser-compat: api.ReadableStreamDefaultReader.releaseLock
---
{{APIRef("Streams")}}

The **`releaseLock()`** method of the
{{domxref("ReadableStreamDefaultReader")}} interface releases the reader's lock on the
stream.

If the associated stream is errored when the lock is released, the reader will appear
errored in that same way subsequently; otherwise, the reader will appear closed.

A reader’s lock cannot be released while it still has a pending read request, i.e., if
a promise returned by the reader’s {{domxref("ReadableStreamDefaultReader.read()")}}
method has not finished. This will result in a `TypeError` being thrown.

## Syntax

```js
readableStreamDefaultReader.releaseLock();
```

### Parameters

None.

### Return value

`undefined`.

### Exceptions

- TypeError
  - : The source object is not a `ReadableStreamDefaultReader`, or a read
    request is pending.

## Examples

```js
function fetchStream() {
  const reader = stream.getReader();

  ...

  reader.releaseLock()

  ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
