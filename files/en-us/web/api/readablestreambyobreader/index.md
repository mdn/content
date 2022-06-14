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

The `ReadableStreamBYOBReader` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) defines a reader for a {{domxref("ReadableStream")}} that supports zero-copy reading from an underlying byte source when its internal queues are empty.
It is used for efficient copying from byte-sources, such as files.

An instance of this reader type should usually be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying the mode as `"byob"` (in other words: `stream.getReader("byob")`).
The readable stream must have been [constructed](/en-US/docs/Web/API/ReadableStream/ReadableStream) specifying an underlying source of [`type="bytes"`](/en-US/docs/Web/API/ReadableStream/ReadableStream#type)).

Note that the methods and properties are the same as for the default reader ({{domxref("ReadableStreamDefaultReader")}}), and it is used in the same way.
The difference is that a normal stream will always satisfy a pending [`read()`](#readablestreambyobreader.read) request from its internal queue (which is kept supplied by the underlying source) while a byte stream will tranfer data directly from the underlying source if there is request for data when the internal queue is empty.

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
