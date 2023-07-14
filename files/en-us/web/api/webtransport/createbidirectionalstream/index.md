---
title: "WebTransport: createBidirectionalStream() method"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
page-type: web-api-instance-method
browser-compat: api.WebTransport.createBidirectionalStream
---

{{APIRef("WebTransport API")}}

The **`createBidirectionalStream()`** method of the {{domxref("WebTransport")}} interface asynchronously opens and returns a bidirectional stream.

The method returns a {{jsxref("Promise")}} that resolves to a {{domxref("WebTransportBidirectionalStream")}} object, which has `readable` and `writable` properties that can be used to reliably read from and write to the server.
"Reliable" means that transmission and order of data are guaranteed.
This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

<!-- sendOrder is pending https://bugzilla.mozilla.org/show_bug.cgi?id=1816925

The relative order in which queued bytes are emptied from created streams can be specified using the send-order option.
If set, queued bytes in streams with a higher send order are guaranteed to be sent before queued bytes for streams with a lower send order.
If the order number is not set then the order in which bytes are sent is implementation dependent.
Note however that even though bytes from higher send-order streams are sent first, they may not arrive first.
-->

{{AvailableInWorkers}}

## Syntax

```js-nolint
createBidirectionalStream()
```

<!-- createBidirectionalStream({sendOrder: "596996858"}) -->

### Parameters

None

<!-- sendOrder is pending https://bugzilla.mozilla.org/show_bug.cgi?id=1816925

- `options` {{optional_inline}}

  - : An object that may have the following properties:

    - `sendOrder` {{optional_inline}}
      - : A integer value specifying the send priority of this stream relative to other streams for which the value has been set.
        Queued bytes are sent first for streams that have a higher value.
        If not set, the send order depends on the implementation.
-->

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("WebTransportBidirectionalStream")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `createBidirectionalStream()` is invoked while the `WebTransport` is closed or failed.

## Examples

An initial function is used to get references to the {{domxref("WebTransportBidirectionalStream.readable")}} and {{domxref("WebTransportBidirectionalStream.writable")}} properties. These are references to `ReadableStream` and `WritableStream` instances, which can be used to read from and write to the server.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a ReadableStream
  const readable = stream.readable;
  // stream.writable is a WritableStream
  const writable = stream.writable;

  ...
}
```

Reading from the `ReadableStream` can then be done as follows:

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

And writing to the `WritableStream` can be done like this:

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

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
