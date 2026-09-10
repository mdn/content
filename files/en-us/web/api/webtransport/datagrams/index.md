---
title: "WebTransport: datagrams property"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
page-type: web-api-instance-property
browser-compat: api.WebTransport.datagrams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`datagrams`** read-only property of the {{domxref("WebTransport")}} interface returns a {{domxref("WebTransportDatagramDuplexStream")}} instance that can be used to send and receive datagrams — unreliable data transmission.

"Unreliable" means that transmission of data is not guaranteed, nor is arrival in a specific order. This is fine in some situations and provides very fast delivery. For example, you might want to transmit regular game state updates where each message supersedes the last one that arrives, and order is not important.

## Value

A {{domxref("WebTransportDatagramDuplexStream")}} object.

## Examples

### Writing an outgoing datagram

This code uses the {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} method, if it is supported, to get a {{domxref("WebTransportDatagramsWritable")}} instance that can be used for writing data to the transport.
Otherwise, it falls back to the {{domxref("WebTransportDatagramDuplexStream/writable", "writable")}} property {{deprecated_inline}} {{non-standard_inline}}, which returns a {{domxref("WritableStream")}} object that you can write data to using a writer, for transmission to the server:

```js
const writableStream =
  typeof transport.datagrams.createWritable === "function"
    ? transport.datagrams.createWritable()
    : transport.datagrams.writable; // Deprecated and non-standard.

const writer = writableStream.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
await writer.ready;
writer.write(data1);
await writer.ready;
writer.write(data2);
```

### Reading an incoming datagram

The {{domxref("WebTransportDatagramDuplexStream.readable")}} property returns a {{domxref("ReadableStream")}} object that you can use to receive data from the server:

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
