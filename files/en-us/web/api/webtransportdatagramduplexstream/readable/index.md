---
title: "WebTransportDatagramDuplexStream: readable property"
short-title: readable
slug: Web/API/WebTransportDatagramDuplexStream/readable
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.readable
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`readable`** read-only property of the {{domxref("WebTransportDatagramDuplexStream")}} interface returns a {{domxref("ReadableStream")}} instance that can be used to unreliably read incoming datagrams from the stream.

"Unreliably" means that transmission of data is not guaranteed, nor is arrival in a specific order.
This is fine in some situations and provides very fast delivery.
For example, you might want to transmit regular game state updates where each message supersedes the last one that arrives, and order is not important.

## Value

A {{domxref("ReadableStream")}}.

By default this is a readable stream in which each chunk is a {{jsxref("Uint8Array")}} containing one datagram.
If the {{domxref("WebTransport")}} that provides this stream through its {{domxref("WebTransport.datagrams", "datagrams")}} property was constructed with the [`datagramsReadableType`](/en-US/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) option set to `bytes`, this is a [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).
A readable byte stream can also be read using a {{domxref("ReadableStreamBYOBReader")}}, which reads each datagram into a buffer that you supply.

## Examples

See the main {{domxref("WebTransportDatagramDuplexStream")}} interface page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
