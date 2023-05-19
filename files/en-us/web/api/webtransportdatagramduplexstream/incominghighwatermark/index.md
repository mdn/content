---
title: "WebTransportDatagramDuplexStream: incomingHighWaterMark property"
short-title: incomingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.incomingHighWaterMark
---

{{APIRef("WebTransport API")}}

The **`incomingHighWaterMark`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface gets or sets the high water mark for incoming chunks of data — this is the maximum size, in chunks, that the incoming {{domxref("ReadableStream")}}'s internal queue can reach before it is considered full. See [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) for more information.

{{AvailableInWorkers}}

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

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
