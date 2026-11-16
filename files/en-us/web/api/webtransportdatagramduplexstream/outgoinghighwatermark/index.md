---
title: "WebTransportDatagramDuplexStream: outgoingHighWaterMark property"
short-title: outgoingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.WebTransportDatagramDuplexStream.outgoingHighWaterMark
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

The **`outgoingHighWaterMark`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface represents the maximum number of outgoing datagrams that can be queued for sending before [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) is applied.
Queued datagrams are not dropped because the queue is full, though they can still expire if {{domxref("WebTransportDatagramDuplexStream.outgoingMaxAge", "outgoingMaxAge")}} is set.

This property has been replaced in the specification by {{domxref("WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams", "outgoingMaxBufferedDatagrams")}}, which should be used instead if supported (see its [browser compatibility](/en-US/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams#browser_compatibility) table).

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

  // set outgoingHighWaterMark
  datagrams.outgoingHighWaterMark = 20000;

  // get outgoingHighWaterMark
  console.log(datagrams.outgoingHighWaterMark);
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
