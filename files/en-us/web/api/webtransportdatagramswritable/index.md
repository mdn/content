---
title: WebTransportDatagramsWritable
slug: Web/API/WebTransportDatagramsWritable
page-type: web-api-interface
browser-compat: api.WebTransportDatagramsWritable
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportDatagramsWritable`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} is a specialized {{domxref("WritableStream")}} that can be used to write outgoing datagrams to a {{domxref("WebTransport")}} connection.

`WebTransportDatagramsWritable` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("WritableStream")}}._

- {{domxref("WebTransportDatagramsWritable.sendGroup")}}
  - : Gets or sets a {{domxref("WebTransportSendGroup")}} that the stream's datagrams are grouped under for the purposes of `sendOrder` prioritization.
- {{domxref("WebTransportDatagramsWritable.sendOrder")}}
  - : Gets or sets an integer indicating the priority of this stream relative to other streams and datagrams in the same `sendGroup`.

## Instance methods

_Inherits methods from its parent interface, {{domxref("WritableStream")}}._

## Description

In addition to the functionality of a standard `WritableStream`, the interface provides the `sendGroup` property that indicates the group of streams and datagrams that this stream belongs to, and the `sendOrder` property that indicates the relative priority of this stream within that group.
Within a group, bytes queued on higher-priority streams and datagrams are sent before any bytes from lower-priority ones.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

Objects of this type are not constructed directly.
Instead, an instance is returned by the {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} method of {{domxref("WebTransportDatagramDuplexStream")}}, which can be accessed using the {{domxref("WebTransport.datagrams")}} property.

The transmission is unreliable, meaning while you can define the priority order, there is no guarantee that every datagram will be sent, or that they will arrive in any particular order.

## Examples

See {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} for an example showing how to create a `WebTransportDatagramsWritable` and use it to write outgoing datagrams.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
