---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
page-type: web-api-interface
browser-compat: api.ReadableStreamBYOBRequest
---

{{APIRef("Streams")}}

The **`ReadableStreamBYOBRequest`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a "pull request" for data from an underlying source that will made as a zero-copy transfer to a consumer (bypassing the stream's internal queues).

`ReadableStreamBYOBRequest` objects are created in "BYOB mode" when a consumer makes a request for data and the stream's internal queue is _empty_.
(The stream will resolve the consumer's request directly if it already has buffered data).
An underlying byte source can access active BYOB requests through its controller's {{domxref("ReadableByteStreamController.byobRequest")}} property, which will be set to `null` if there is no outstanding request.

An underlying source that supports "BYOB mode" should check for {{domxref("ReadableByteStreamController.byobRequest")}} and must use it for transferring data, if present.
If data arrives from the underlying source when {{domxref("ReadableByteStreamController.byobRequest")}} is `null`, it can be queued using {{domxref("ReadableByteStreamController.enqueue()")}}.
This might happen when an underlying push source receives new data when the stream's internal buffers are not empty.

An underlying source uses the request by writing data to the BYOB request's [`view`](#readablestreambyobrequest.view) and then calling [`respond()`](#readablestreambyobrequest.respond), or by calling [`respondWithNewView()`](#readablestreambyobrequest.respondwithnewview) and passing a new view as an argument.
Note that the "new view" must actually be a view over the _same_ buffer as the original `view`, starting at the same offset.
This might be used to return a shorter buffer if the underlying source is unable to fill the entire original view.

Note that a {{domxref("ReadableByteStreamController")}} is only created for underlying sources when `type="bytes"` is specified for the source in the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#type).
"BYOB mode" is enabled when either [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) is specified in the [`ReadableController()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) or when using a {{domxref("ReadableStreamBYOBReader")}} (typically constructed by calling {{domxref("ReadableStream.getReader()")}} with the argument `{ mode: 'byob' }`).

## Constructor

None. `ReadableStreamBYOBRequest` instance is created automatically by `ReadableByteStreamController` as needed.

## Instance properties

- {{domxref("ReadableStreamBYOBRequest.view")}} {{ReadOnlyInline}}
  - : Returns the current view.
    This is a view on a buffer that will be transferred to the consumer when `ReadableStreamBYOBRequest.respond()` is called.

## Instance methods

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : Signals the associated readable byte stream that the specified number of bytes were written into the current [`view`](#readablestreambyobrequest.view), which then causes the pending request from the consumer to be resolved.
    Note that after this method is called the `view` is transferred and no longer modifiable.
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : Signals to the associated readable byte stream view passed as an argument should be transferred to the consumer of the readable byte stream.
    This new view must use the same buffer as the original [`view`](#readablestreambyobrequest.view), start at the same offset, and be the same length or shorter.
    Note that after this method is called the `view` is transferred and no longer modifiable.

## Examples

The following code is taken from the live example in [Using readable byte streams > Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream).

A push underlying byte source with data to transfer should first check that {{domxref("ReadableByteStreamController.byobRequest","controller.byobRequest")}} is non-`null`. Pul
A pull underlying byte source would only need this check if auto chunk allocation was not enabled and it was used with a default reader.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

There are two ways to read data into a `ReadableStreamBYOBRequest` and then transfer it.
The first is to write the data into the {{domxref("ReadableStreamBYOBRequest.view")}} property and then call {{domxref("ReadableStreamBYOBRequest.respond()")}} to indicate the amount of data to be transferred.
After the operation the `byobRequest.view` is detached and the request should be discarded.

The code below shows this case using a hypothetical `readInto()` method to copy data into the view:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

The other approach is to call {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} passing your own view on the same underlying backing data.
Note that this just another way of specifying the range of the underlying buffer/memory backing that is actually transferred.
The `respondWithNewView` equivalent to the code above would be:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
const newView = new Uint8Array(v.buffer, v.byteOffset, bytesRead);
controller.byobRequest.respondWithNewView(newView);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
