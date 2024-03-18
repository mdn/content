---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WebTransportSendStream
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

The `WebTransportSendStream` interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} is a specialized {{domxref("WritableStream")}} that is used to send outbound data in both unidirectional or bidirectional {{domxref("WebTransport")}} streams.

The send stream is a [writable stream](/en-US/docs/Web/API/Streams_API/Using_writable_streams) of [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), that can be written to in order to send data to a server.
It additionally provides streaming features such as setting the send order, and getting stream statistics.

Objects of this type are not constructed directly.
When creating a unidirectional stream the {{domxref("WebTransport.createUnidirectionalStream()")}} returns an object of this type for sending data.
When creating a bidirectional stream using {{domxref("WebTransport.createBidirectionalStream()")}}, the method returns a {{domxref("WebTransportBidirectionalStream")}}, and the send stream object can be obtained from its {{domxref("WebTransportBidirectionalStream.writable", "writable")}} property.
When a bidirectional stream is initiated by the remote end, an object of this type can similarly be obtained using {{domxref("WebTransport.incomingBidirectionalStreams")}}.

`WebTransportSendStream` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("WritableStream")}}._

- {{domxref("WebTransportSendStream.getStats()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with statistics related to this stream.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("WritableStream")}}._

<!-- WebTransportSendStream.sendGroup not implemented in any browser -->

- {{domxref("WebTransportSendStream.sendOrder")}} {{Experimental_Inline}}
  - : Indicates the send priority of this stream relative to other streams for which the value has been set.

## Examples

See [`WebTransport.incomingUnidirectionalStreams`](/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) for an example of how to get a {{domxref("ReadableStream")}} of `WebTransportSendStream` objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
