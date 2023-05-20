---
title: "WebTransportDatagramDuplexStream: maxDatagramSize property"
short-title: maxDatagramSize
slug: Web/API/WebTransportDatagramDuplexStream/maxDatagramSize
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.maxDatagramSize
---

{{APIRef("WebTransport API")}}

The **`maxDatagramSize`** read-only property of the {{domxref("WebTransportDatagramDuplexStream")}} interface returns the maximum allowable size of outgoing datagrams, in bytes, that can be written to {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}}.

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

  // get maxDatagramSize
  console.log(datagrams.maxDatagramSize);
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
