---
title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
tags:
  - API
  - Constructor
  - Experimental
  - ReadableStreamBYOBReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamBYOBReader.ReadableStreamBYOBReader
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`ReadableStreamBYOBReader()`**
constructor creates and returns a `ReadableStreamBYOBReader` object instance.

> **Note:** You generally wouldn't use this constructor manually; instead,
> you'd use the {{domxref("ReadableStream.getReader()")}} method.

## Syntax

```js
var readableStreamBYOBReader = new ReadableStreamBYOBReader(stream);
```

### Parameters

- stream
  - : The {{domxref("ReadableStream")}} to be read.

### Return value

An instance of the {{domxref("ReadableStreamBYOBReader")}} object.

### Exceptions

- TypeError
  - : The supplied `stream` parameter is not a {{domxref("ReadableStream")}},
    or it is already locked for reading by another reader, or its stream controller is not
    a {{domxref("ReadableByteStreamController")}}.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
