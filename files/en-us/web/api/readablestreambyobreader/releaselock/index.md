---
title: ReadableStreamBYOBReader.releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
tags:
  - API
  - Experimental
  - Method
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - releaseLock
browser-compat: api.ReadableStreamBYOBReader.releaseLock
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`releaseLock()`** method of the
{{domxref("ReadableStreamBYOBReader")}} interface releases the reader's lock on the
stream. After the lock is released, the reader is no longer active.

If the associated stream is errored when the lock is released, the reader will appear
errored in that same way subsequently; otherwise, the reader will appear closed.

A reader’s lock cannot be released while it still has a pending read request, i.e., if
a promise returned by the reader’s {{domxref("ReadableStreamBYOBReader.read()")}} method
has not finished. This will result in a `TypeError` being thrown.

## Syntax

```js
readableStreamBYOBReader.releaseLock();
```

### Parameters

None.

### Return value

`undefined`.

### Exceptions

- TypeError
  - : The source object is not a `ReadableStreamBYOBReader`, or a read request
    is pending.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
