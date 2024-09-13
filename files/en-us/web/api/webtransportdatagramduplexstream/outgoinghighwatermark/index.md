---
title: "WebTransportDatagramDuplexStream: outgoingHighWaterMark property"
short-title: outgoingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.outgoingHighWaterMark
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`outgoingHighWaterMark`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface gets or sets the high water mark for outgoing chunks of data — this is the maximum size, in chunks, that the outgoing {{domxref("WritableStream")}}'s internal queue can reach before it is considered full. See [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) for more information.

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
