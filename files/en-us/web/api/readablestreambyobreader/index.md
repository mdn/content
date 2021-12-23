---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
tags:
  - API
  - Experimental
  - Fetch
  - Interface
  - ReadableStreamBYOBReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamBYOBReader
---
{{APIRef("Streams")}}{{SeeCompatTable}}

The `ReadableStreamBYOBReader` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a BYOB ("bring your own buffer") reader that can be used to read stream data supplied by the developer (e.g. a custom {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} constructor).

## Constructor

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : Creates and returns a `ReadableStreamBYOBReader` object instance.

## Properties

- {{domxref("ReadableStreamBYOBReader.closed")}} {{readonlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills when the stream closes or the reader's lock is released, or rejects if the stream throws an error. This property enables you to write code that responds to an end to the streaming process.

## Methods

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object indicating the state of the stream: either the next chunk in the stream or an indication that the stream is closed.
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : Releases the reader's lock on the stream.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
