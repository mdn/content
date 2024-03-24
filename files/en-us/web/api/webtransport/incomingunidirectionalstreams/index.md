---
title: "WebTransport: incomingUnidirectionalStreams property"
short-title: incomingUnidirectionalStreams
slug: Web/API/WebTransport/incomingUnidirectionalStreams
page-type: web-api-instance-property
browser-compat: api.WebTransport.incomingUnidirectionalStreams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`incomingUnidirectionalStreams`** read-only property of the {{domxref("WebTransport")}} interface represents one or more unidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportReceiveStream")}} objects. Each one can be used to reliably read data from the server.

"Reliable" means that transmission and order of data are guaranteed. This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

## Value

A {{domxref("ReadableStream")}} of {{domxref("WebTransportReceiveStream")}} objects.

## Examples

An initial function is used to read the {{domxref("WebTransportReceiveStream")}} objects from the {{domxref("ReadableStream")}}. Each object is then passed to another function to read from those streams.

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportReceiveStream
    await readData(value);
  }
}

async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array
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
