---
title: "WebTransportDatagramDuplexStream: incomingMaxAge property"
short-title: incomingMaxAge
slug: Web/API/WebTransportDatagramDuplexStream/incomingMaxAge
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.incomingMaxAge
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`incomingMaxAge`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface gets or sets the maximum age for incoming datagrams, in milliseconds.

## Value

A number, or `null` if no maximum age has been set.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set incomingMaxAge
  datagrams.incomingMaxAge = 2000;

  // get incomingMaxAge
  console.log(datagrams.incomingMaxAge);
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
