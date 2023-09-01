---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
page-type: web-api-interface
browser-compat: api.ReadableByteStreamController
---

{{APIRef("Streams")}}

The **`ReadableByteStreamController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller for a [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).
It allows control of the state and internal queue of a {{domxref("ReadableStream")}} with an underlying byte source, and enables efficient zero-copy transfer of data from the underlying source to a consumer when the stream's internal queue is empty.

An instance of this controller type is created if an `underlyingSource` object with the property `type="bytes"` is passed as an argument to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#type).
The `underlyingSource` object may also define [`start()`](/en-US/docs/Web/API/ReadableStream/ReadableStream#start) and [`pull()`](/en-US/docs/Web/API/ReadableStream/ReadableStream#pull) callback functions.
These are called with the controller as a parameter, in order to setup the underlying source, and request data when needed.

The underlying source uses the controller to supply data to the stream via its [`byobRequest`](#readablebytestreamcontroller.byobrequest) property or [`enqueue()`](#readablebytestreamcontroller.enqueue) method.
[`byobRequest`](#readablebytestreamcontroller.byobrequest) is a {{domxref("ReadableStreamBYOBRequest")}} object that represents a pending request from a consumer to make a zero-copy transfer of data direct to a consumer.
`byobRequest` must be used to copy data if it exists (do not use `enqueue()` in this case)!
If the underlying source needs to pass data to the stream and `byobRequest` is `null` then the source can call [`enqueue()`](#readablebytestreamcontroller.enqueue) to add the data to the stream's internal queues.

Note that the [`byobRequest`](#readablebytestreamcontroller.byobrequest) is only created in "BYOB mode" when there is a request from a reader and the stream's internal queue is empty.
"BYOB mode" is enabled when using a {{domxref("ReadableStreamBYOBReader")}} (typically constructed by calling {{domxref("ReadableStream.getReader()")}} with the argument `{ mode: 'byob' }`).
It is also enabled when using a default reader and [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) is specified in the [`ReadableController()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize).

An underlying byte source can also use the controller to [`close()`](#readablebytestreamcontroller.close) the stream when all the data has been sent and report errors from the underlying source using [`error()`](#readablebytestreamcontroller.error).
The controller's [`desiredSize`](#readablebytestreamcontroller.desiredsize) property is used to apply "backpressure", informing the underlying source of the size of the internal queue (small values indicate that the queue is filling up, hinting to the underlying source that it is be desirable to pause or throttle the inflow).

Note that even though the controller is primarily used by the underlying byte source, there is no reason it cannot be stored used by other parts of the system to signal the stream.

## Constructor

None. `ReadableByteStreamController` instances are automatically created if an `underlyingSource` with the property `type="bytes"` is passed to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#type).

## Instance properties

- {{domxref("ReadableByteStreamController.byobRequest")}} {{ReadOnlyInline}}
  - : Returns the current BYOB pull request, or `null` if there no outstanding request.
- {{domxref("ReadableByteStreamController.desiredSize")}} {{ReadOnlyInline}}
  - : Returns the desired size required to fill the stream's internal queue.

## Instance methods

- {{domxref("ReadableByteStreamController.close()")}}
  - : Closes the associated stream.
- {{domxref("ReadableByteStreamController.enqueue()")}}
  - : Enqueues a given chunk in the associated stream.
- {{domxref("ReadableByteStreamController.error()")}}
  - : Causes any future interactions with the associated stream to error.

## Examples

The controller is used by an underlying source to transfer or enqueue data, to signal that the stream has no more data (has closed) or has errored. It is also used to signal the underlying source from "upstream" of the desired data rate, using {{domxref("ReadableByteStreamController.desiredSize","desiredSize")}}.

The example in [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams), in particular [Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), show most of these cases.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Streams API concepts](/en-US/docs/Web/API/Streams_API)
- [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
