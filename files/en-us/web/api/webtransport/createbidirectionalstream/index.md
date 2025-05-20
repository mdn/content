---
title: "WebTransport: createBidirectionalStream() method"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
page-type: web-api-instance-method
browser-compat: api.WebTransport.createBidirectionalStream
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`createBidirectionalStream()`** method of the {{domxref("WebTransport")}} interface asynchronously opens and returns a bidirectional stream.

The method returns a {{jsxref("Promise")}} that resolves to a {{domxref("WebTransportBidirectionalStream")}} object, which has `readable` and `writable` properties that can be used to reliably read from and write to the server.
"Reliable" means that transmission and order of data are guaranteed.
This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

The relative order in which queued bytes are emptied from created streams can be specified using the `sendOrder` option.
If set, queued bytes in streams with a higher send order are guaranteed to be sent before queued bytes for streams with a lower send order.
If the order number is not set then the order in which bytes are sent is implementation dependent.
Note however that even though bytes from higher send-order streams are sent first, they may not arrive first.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that may have the following properties:

    - `sendOrder` {{optional_inline}}
      - : A integer value specifying the send priority of this stream relative to other streams for which the value has been set.
        Queued bytes are sent first for streams that have a higher value.
        If not set, the send order depends on the implementation.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("WebTransportBidirectionalStream")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `createBidirectionalStream()` is invoked while the `WebTransport` is closed or failed.

## Examples

An initial function is used to get references to the {{domxref("WebTransportBidirectionalStream.readable")}} and {{domxref("WebTransportBidirectionalStream.writable")}} properties. These are references to `WebTransportReceiveStream` and `WebTransportSendStream` instances, which are readable and writable streams that can be used to read from and write to the server.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream({
    sendOrder: "596996858",
  });
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a ReadableStream
  const readable = stream.readable;
  // stream.writable is a WritableStream
  const writable = stream.writable;

  // …
}
```

Reading from the `WebTransportReceiveStream` can then be done as follows:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

And writing to the `WebTransportSendStream` can be done like this:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebTransport.createUnidirectionalStream()")}}
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
