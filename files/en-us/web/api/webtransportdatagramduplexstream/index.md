---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
page-type: web-api-interface
browser-compat: api.WebTransportDatagramDuplexStream
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportDatagramDuplexStream`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a duplex stream that can be used for unreliable transport of datagrams between client and server. Provides access to a {{domxref("ReadableStream")}} for reading incoming datagrams, a {{domxref("WritableStream")}} for writing outgoing datagrams, and various settings and statistics related to the stream.

This is accessed via the {{domxref("WebTransport.datagrams")}} property.

"Unreliable" means that transmission of data is not guaranteed, nor is arrival in a specific order. This is fine in some situations and provides very fast delivery. For example, you might want to transmit regular game state updates where each message supersedes the last one that arrives, and order is not important.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}} {{deprecated_inline}}
  - : Gets or sets the high water mark for incoming chunks of data — this is the maximum size, in chunks, that the incoming {{domxref("ReadableStream")}}'s internal queue can reach before it is considered full. See [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) for more information.
- {{domxref("WebTransportDatagramDuplexStream.incomingMaxAge", "incomingMaxAge")}}
  - : Gets or sets the maximum age for incoming datagrams, in milliseconds. Returns `null` if no maximum age has been set.
- {{domxref("WebTransportDatagramDuplexStream.maxDatagramSize", "maxDatagramSize")}} {{ReadOnlyInline}}
  - : Returns the maximum allowable size of outgoing datagrams, in bytes, that can be written to a {{domxref("WebTransportDatagramsWritable")}} obtained via {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}}, or the deprecated {{domxref("WebTransportDatagramDuplexStream/writable", "writable")}} property.
- {{domxref("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}} {{deprecated_inline}}
  - : Gets or sets the high water mark for outgoing chunks of data — this is the maximum size, in chunks, that the outgoing {{domxref("WritableStream")}}'s internal queue can reach before it is considered full. See [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) for more information.
- {{domxref("WebTransportDatagramDuplexStream.outgoingMaxAge", "outgoingMaxAge")}}
  - : Gets or sets the maximum age for outgoing datagrams, in milliseconds. Returns `null` if no maximum age has been set.
- {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ReadableStream")}} instance that can be used to read incoming datagrams from the stream.
- {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Returns a {{domxref("WritableStream")}} instance that can be used to write outgoing datagrams to the stream.

## Instance methods

- {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} {{experimental_inline}}
  - : Returns a {{domxref("WebTransportDatagramsWritable")}} instance that can be used to write outgoing datagrams to the stream.

## Examples

### Writing outgoing datagrams

This code uses the {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} method, if it is supported, to get a {{domxref("WebTransportDatagramsWritable")}} instance that can be used for writing data to the transport.
Otherwise, it falls back to the {{domxref("WebTransportDatagramDuplexStream/writable", "writable")}} property {{deprecated_inline}} {{non-standard_inline}}, which returns a {{domxref("WritableStream")}} object that you can write data to using a writer instead:

```js
const writableStream =
  typeof transport.datagrams.createWritable === "function"
    ? transport.datagrams.createWritable()
    : transport.datagrams.writable; // Deprecated and non-standard

const writer = writableStream.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
await writer.ready;
writer.write(data1);
await writer.ready;
writer.write(data2);
```

### Reading incoming datagrams

The {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} property returns a {{domxref("ReadableStream")}} object that you can use to receive data from the server:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
