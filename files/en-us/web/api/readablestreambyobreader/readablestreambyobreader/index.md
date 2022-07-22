---
title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - ReadableStreamBYOBReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamBYOBReader.ReadableStreamBYOBReader
---
{{APIRef("Streams")}}

The **`ReadableStreamBYOBReader()`** constructor creates and returns a `ReadableStreamBYOBReader` object instance.

> **Note:** You generally wouldn't use this constructor manually;
> instead, you'd use the {{domxref("ReadableStream.getReader()")}} method with the argument `"byob"`.

## Syntax

```js
new ReadableStreamBYOBReader(stream)
```

### Parameters

- `stream`
  - : The {{domxref("ReadableStream")}} to be read.

### Return value

An instance of the {{domxref("ReadableStreamBYOBReader")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the supplied `stream` parameter is not a {{domxref("ReadableStream")}}, or it is already locked for reading by another reader, or its stream controller is not a {{domxref("ReadableByteStreamController")}}.

## Examples

The constructor is rarely called directly.
Instead call {{domxref("ReadableStream.getReader()")}} as shown:

```js
const reader = stream.getReader({mode: "byob"});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
