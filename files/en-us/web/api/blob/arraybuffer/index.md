---
title: Blob.arrayBuffer()
slug: Web/API/Blob/arrayBuffer
page-type: web-api-instance-method
tags:
  - API
  - Blob
  - File API
  - Method
  - Reference
browser-compat: api.Blob.arrayBuffer
---
{{APIRef("File API")}}

The **`arrayBuffer()`** method in the {{domxref("Blob")}}
interface returns a {{jsxref("Promise")}} that resolves with the contents of the blob as
binary data contained in an {{jsxref("ArrayBuffer")}}.

## Syntax

```js
arrayBuffer()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("ArrayBuffer")}} that contains the blob's
data in binary form.

### Exceptions

While this method doesn't throw exceptions, it may reject the promise. This can happen,
for example, if the reader used to fetch the blob's data throws an exception. Any
exceptions thrown while getting the data will be converted into rejections.

## Usage notes

While similar to the {{domxref("FileReader.readAsArrayBuffer()")}} method,
`arrayBuffer()` returns a promise rather than being an event-based API, as is
the case with the `FileReader` interface's method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.arrayBuffer()")}}
- [Streams API](/en-US/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
