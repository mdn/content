---
title: "WebTransport: createBidirectionalStream() method"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransport.createBidirectionalStream
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`createBidirectionalStream()`** method of the {{domxref("WebTransport")}} interface opens a bidirectional stream; it returns a {{domxref("WebTransportBidirectionalStream")}} object containing `readable` and `writable` properties, which can be used to reliably read from and write to the server.

"Reliable" means that transmission and order of data are guaranteed. This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

{{AvailableInWorkers}}

## Syntax

```js
createBidirectionalStream();
```

### Parameters

None.

### Return value

A {{domxref("WebTransportBidirectionalStream")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `createBidirectionalStream()` is invoked while the WebTransport is closed or failed.

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
