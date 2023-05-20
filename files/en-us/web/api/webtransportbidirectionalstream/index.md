---
title: WebTransportBidirectionalStream
slug: Web/API/WebTransportBidirectionalStream
page-type: web-api-interface
browser-compat: api.WebTransportBidirectionalStream
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}}

The **`WebTransportBidirectionalStream`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a bidirectional stream created by a server or a client that can be used for reliable transport. Provides access to a {{domxref("ReadableStream")}} for reading incoming data, and a {{domxref("WritableStream")}} for writing outgoing data.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Instance properties

- {{domxref("WebTransportBidirectionalStream.readable", "readable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ReadableStream")}} instance that can be used to read incoming data.
- {{domxref("WebTransportBidirectionalStream.writable", "writable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WritableStream")}} instance that can be used to write outgoing data.

## Examples

### Bidirectional transmission initiated by the user agent

To open a bidirectional stream from a user agent, you use the {{domxref("WebTransport.createBidirectionalStream()")}} method to get a reference to a {{domxref("WebTransportBidirectionalStream")}}. The `readable` and `writable` properties return references to `ReadableStream` and `WritableStream` instances, which can be used to read from and write to the server.

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

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
