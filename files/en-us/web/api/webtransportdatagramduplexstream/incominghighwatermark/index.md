---
title: "WebTransportDatagramDuplexStream: incomingHighWaterMark property"
short-title: incomingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.WebTransportDatagramDuplexStream.incomingHighWaterMark
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

The **`incomingHighWaterMark`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface represents the maximum number of incoming datagrams that can be queued while waiting to be read from the {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} stream.
If more datagrams arrive than the queue can hold, the oldest datagrams in the queue are dropped.
The number of datagrams dropped this way is reported in the [`droppedIncoming`](/en-US/docs/Web/API/WebTransport/getStats#droppedincoming) property of the datagram statistics returned by {{domxref("WebTransport.getStats()")}}.

This property has been replaced in the specification by {{domxref("WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams", "incomingMaxBufferedDatagrams")}}, which should be used instead if supported (see its [browser compatibility](/en-US/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams#browser_compatibility) table).

## Value

A number.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set incomingHighWaterMark
  datagrams.incomingHighWaterMark = 20000;

  // get incomingHighWaterMark
  console.log(datagrams.incomingHighWaterMark);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransport.getStats()")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
