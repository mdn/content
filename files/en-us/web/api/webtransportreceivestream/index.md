---
title: WebTransportReceiveStream
slug: Web/API/WebTransportReceiveStream
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WebTransportReceiveStream
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}

The `WebTransportReceiveStream` interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} is a {{domxref("ReadableStream")}} that can be used to read from an incoming unidirectional or bidirectional {{domxref("WebTransport")}} stream from a server.

The stream is a [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) of [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), and can be consumed using either a BYOB reader ([`ReadableStreamBYOBReader`](/en-US/docs/Web/API/ReadableStreamBYOBReader)) or the default reader ([`ReadableStreamDefaultReader`](/en-US/docs/Web/API/ReadableStreamDefaultReader)).

Objects of this type are not constructed directly.
Instead they are obtained using the [`WebTransport.incomingUnidirectionalStream`](/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) property.

`WebTransportReceiveStream` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("ReadableStream")}}._

## Instance methods

_Also inherits properties from its parent interface, {{domxref("ReadableStream")}}._

- {{domxref("WebTransportReceiveStream.getStats()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with statistics related to this stream.

## Examples

See [`WebTransport.incomingUnidirectionalStreams`](/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) for an example of how to get a {{domxref("ReadableStream")}} of `WebTransportReceiveStream` objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
