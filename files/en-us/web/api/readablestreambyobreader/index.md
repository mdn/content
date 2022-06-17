---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamBYOBReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamBYOBReader
---
{{APIRef("Streams")}}

The `ReadableStreamBYOBReader` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) defines a reader for a {{domxref("ReadableStream")}} that supports zero-copy reading from an underlying byte source.
It is used for efficient copying from underlying sources where the data is delivered as an "anonymous" sequence of bytes, such as files.

An instance of this reader type should usually be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
The readable stream must have an _underlying byte source_. In other words, it must have been [constructed](/en-US/docs/Web/API/ReadableStream/ReadableStream) specifying an underlying source with [`type: "bytes"`](/en-US/docs/Web/API/ReadableStream/ReadableStream#type)).

Using this kind of reader, a [`read()`](#readablestreambyobreader.read) request when the readable stream's internal queues are empty will result in a zero copy transfer from the underlying source (bypassing the stream's internal queues).
If the internal queues are not empty, a `read()` will satisfy the request from the buffered data.

Note that the methods and properties are the same as for the default reader ({{domxref("ReadableStreamDefaultReader")}}), and it is used in the same way.

## Constructor

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : Creates and returns a `ReadableStreamBYOBReader` object instance.

## Properties

- {{domxref("ReadableStreamBYOBReader.closed")}} {{readonlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills when the stream closes, or rejects if the stream throws an error or the reader's lock is released. This property enables you to write code that responds to an end to the streaming process.

## Methods

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with the next chunk in the stream or rejects with an indication that the stream is closed or has errored.
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : Releases the reader's lock on the stream.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
