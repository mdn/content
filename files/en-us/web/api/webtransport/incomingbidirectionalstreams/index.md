---
title: "WebTransport: incomingBidirectionalStreams property"
short-title: incomingBidirectionalStreams
slug: Web/API/WebTransport/incomingBidirectionalStreams
page-type: web-api-instance-property
browser-compat: api.WebTransport.incomingBidirectionalStreams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`incomingBidirectionalStreams`** read-only property of the {{domxref("WebTransport")}} interface represents one or more bidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportBidirectionalStream")}} objects. Each one can be used to reliably read data from the server and write data back to it.

"Reliable" means that transmission and order of data are guaranteed. This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

## Value

A {{domxref("ReadableStream")}} of {{domxref("WebTransportBidirectionalStream")}} objects.

## Examples

An initial function is used to read the {{domxref("WebTransportBidirectionalStream")}} objects from the {{domxref("ReadableStream")}}. For each one, the {{domxref("WebTransportBidirectionalStream.readable")}} and {{domxref("WebTransportBidirectionalStream.writable")}} values are passed to other functions to read from and write to those streams.

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
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
