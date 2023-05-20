---
title: "WebTransportDatagramDuplexStream: writable property"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.writable
---

{{APIRef("WebTransport API")}}

The **`writable`** read-only property of the {{domxref("WebTransportDatagramDuplexStream")}} interface returns a {{domxref("WritableStream")}} instance that can be used to unreliably write outgoing datagrams to the stream.

"Unreliably" means that transmission of data is not guaranteed, nor is arrival in a specific order. This is fine in some situations and provides very fast delivery. For example, you might want to transmit regular game state updates where each message supersedes the last one that arrives, and order is not important.

{{AvailableInWorkers}}

## Value

A {{domxref("WritableStream")}}.

## Examples

See the main {{domxref("WebTransportDatagramDuplexStream")}} interface page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
