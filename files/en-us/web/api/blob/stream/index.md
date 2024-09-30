---
title: "Blob: stream() method"
short-title: stream()
slug: Web/API/Blob/stream
page-type: web-api-instance-method
browser-compat: api.Blob.stream
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`stream()`** method of the {{domxref("Blob")}} interface returns a {{domxref("ReadableStream")}} which upon reading returns the data contained within the `Blob`.

## Syntax

```js-nolint
stream()
```

### Parameters

None.

### Return value

A {{domxref("ReadableStream")}} which, upon reading, returns the contents of the
`Blob`.

## Usage notes

With `stream()` and the returned {{domxref("ReadableStream")}}, you gain
several interesting capabilities:

- Call {{domxref("ReadableStream.getReader", "getReader()")}} on the returned stream
  to get an object to use to read the data from the blob using methods such as the
  {{domxref("ReadableStreamDefaultReader")}} interface's
  {{domxref("ReadableStreamDefaultReader.read", "read()")}} method.
- Call the returned stream's {{domxref("ReadableStream.pipeTo", "pipeTo()")}} method
  to pipe the blob's data to a writable stream.
- Call the returned stream's {{domxref("ReadableStream.tee", "tee()")}} method to
  **tee** the readable stream. This returns an array containing two new
  `ReadableStream` objects, each of which returns the contents of the
  `Blob`.
- Call the returned stream's {{domxref("ReadableStream.pipeThrough", "pipeThrough()")}} method to pipe the stream through a {{domxref("TransformStream")}} or any other readable and writable pair.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.body")}}
- [Streams API](/en-US/docs/Web/API/Streams_API)
