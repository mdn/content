---
title: WebTransportBidirectionalStream
slug: Web/API/WebTransportBidirectionalStream
page-type: web-api-interface
browser-compat: api.WebTransportBidirectionalStream
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportBidirectionalStream`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a bidirectional stream created by a server or a client that can be used for reliable transport. Provides access to a {{domxref("WebTransportReceiveStream")}} for reading incoming data, and a {{domxref("WebTransportSendStream")}} for writing outgoing data.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("WebTransportBidirectionalStream.readable", "readable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WebTransportReceiveStream")}} instance that can be used to read incoming data.
- {{domxref("WebTransportBidirectionalStream.writable", "writable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WebTransportSendStream")}} instance that can be used to write outgoing data.

## Examples

### Bidirectional transmission initiated by the user agent

To open a bidirectional stream from a user agent, you use the {{domxref("WebTransport.createBidirectionalStream()")}} method to get a reference to a `WebTransportBidirectionalStream`. The `readable` and `writable` properties return references to `WebTransportReceiveStream` and `WebTransportSendStream` instances.
These inherit from `ReadableStream` and `WritableStream` respectively, and can be used to read from and write to the server.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  ...
}
```

Reading from the `WebTransportReceiveStream` can be done in the same way as you would read a `ReadableStream`:

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

### Bidirectional transmission initiated by the server

If the server opens a bidirectional stream to transmit data to and receive it from the client, this can be accessed via the {{domxref("WebTransport.incomingBidirectionalStreams")}} property, which returns a {{domxref("ReadableStream")}} of `WebTransportBidirectionalStream` objects. Each one can be used to read and write {{jsxref("Uint8Array")}} instances as shown above. However, you need an initial function to read the bidirectional stream in the first place:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
