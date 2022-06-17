---
title: Using readable byte streams
slug: Web/API/Streams_API/Using_readable_byte_streams
tags:
  - API
  - Controller
  - Fetch
  - Guide
  - ReadableStreams
  - Streams
  - pipe chains
  - readable streams
  - readable byte streams
  - reader
  - tee
---
{{apiref("Streams")}}

Readable _byte streams_ are [readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams) that have an underlying byte source of `type: "bytes"`, and which support efficient zero-copy transfer of data from the underlying source to a consumer (bypassing the stream's internal queues).
They are intended for use cases where data might be supplied or requested in arbitrary sized and potentially very large chunks, and hence where avoiding making copies is likely to improve efficiency.

This article explains how readable byte streams differ from normal "default" streams, and how you create and consume them.

> **Note:** Readable byte streams are almost identical to "normal" readable streams and almost all of the concepts are the same.
> This article assumes that you already understand those concepts and will only be covering them superficially (if at all).
> If you're not familiar with the relevent concepts, please first read: [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage), and [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts).

## Overview

Readable streams provides a consistent interface for streaming data from some "underlying source", like a file or socket, to a consumer, such as a reader, transform stream or writeable stream.
In a normal readable stream, data from the underlying source always passes to a consumer through the internal queues.
A readable byte stream differs in that if the internal queues are empty, the underlying source can write directly to the consumer (an efficient zero-copy transfer).

A readable byte stream is created by specifying `type: "bytes"` in the `underlyingSource` object that may be passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
With this value set, the stream is created with a {{domxref("ReadableByteStreamController")}} (instead of {{domxref("ReadableStreamDefaultController")}}), and this is the object that is passed to the underlying source when the `start(controller)` and `pull(controller)` callback functions are invoked.

The main difference between {{domxref("ReadableByteStreamController")}} and the default controller is that it has an additional property {{domxref("ReadableByteStreamController.byobRequest")}} of type {{domxref("ReadableStreamBYOBRequest")}}.
This represents a pending read request from a consumer, which will resolve when satisfied as a zero-copy transfer from the underlying source.
The property will be `null` if there is such pending request.

A `byobRequest` is only made available when a read request is made on a readable byte stream and there is no data in the stream's internal queues (if there is data then the request is satisfied from those queues).

In addition, `byobRequest` instances are only created in the controller when automatic buffer allocation is enabled.
This is always true when using a {{domxref("ReadableStreamBYOBReader")}} to read data from a byte stream.
If using a {{domxref("ReadableStreamDefaultReader")}} automatic buffer allocation must be explicitly enabled, by specifying the [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) property in the `underlyingSource` parameter definition.

An underlying byte source that needs to transfer data must check the `byobRequest` property and use it a request is available.
If the property is `null`, incoming data should be added to the stream using {{domxref("ReadableByteStreamController.enqueue()")}}.
This adds data to the stream's internal queues (this is the only way to add data to the stream in default streams).

The {{domxref("ReadableStreamBYOBRequest")}} has a {{domxref("ReadableStreamBYOBRequest.view","view")}} property, which is a view on the buffer allocated for transfer (the size of this buffer may be set using [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) if desired).
Data from an underlying source should be written into this property, and then the underlying source must call {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} indicating the number of bytes written.
This signals that the data should be transferred, and the pending read request resolved.
After calling the `respond()` the `view` can no longer be written.

There is also an additional method {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} to which an underlying source can pass a "new" view containing data to be transferred.
Note however that this new view must be over the _same_ memory buffer as the original, and from the same starting offset.
In other words, this method gives developers another way to send less than the full allocated buffer size (the other way being to specify the length in `respond()`).

Readable byte streams are normally read using a {{domxref("ReadableStreamBYOBReader")}}, which can be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
The stream can also be read using a default reader ({{domxref("ReadableStreamDefaultReader")}}), but as noted above, `byobRequest` objects are only created for default readers when the underlying source has set [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize).
If this is not specified, the default reader will still "work" but all data will be transferred through the stream's internal queues.

Other than the differences outlined above, the controller and underlying source have the same methods, callbacks and properties, are used [in same way as for default streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams).

