---
title: WebTransportSendGroup
slug: Web/API/WebTransportSendGroup
page-type: web-api-interface
browser-compat: api.WebTransportSendGroup
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportSendGroup`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a group of streams and datagrams whose relative send priority is prioritized as a set, based on the `sendOrder` value of each member.

`WebTransportSendGroup` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instance methods

- {{domxref("WebTransportSendGroup.getStats", "getStats()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with statistics aggregated across all of the streams and datagram writables currently associated with this group.

## Description

By default, the relative order in which a user agent sends queued bytes from different streams and datagrams is implementation-defined.

http://localhost:5042/en-US/docs/Web/API/WebTransportDatagramsWritable

A `WebTransportSendGroup` allows you to gropu

relative send order (within the group)

Associating two or more streams and/or datagrams with the same `WebTransportSendGroup`, and giving each a `sendOrder` value, allows their priorities to be compared directly: queued bytes belonging to the group member with the highest `sendOrder` are sent first, ahead of other members of the same group that have a lower value. The relative priority of streams and datagrams that belong to different groups (or that have no group at all) remains implementation-defined.

A `WebTransportSendGroup` is created using the `createSendGroup()` method of the {{domxref("WebTransport")}} interface. You can then associate it with a stream or datagram writable by passing it as the `sendGroup` option when the object is created — see {{domxref("WebTransport.createUnidirectionalStream()")}}, {{domxref("WebTransport.createBidirectionalStream()")}}, and {{domxref("WebTransportDatagramDuplexStream.createWritable()")}} — or by setting the object's `sendGroup` property afterwards, for example {{domxref("WebTransportDatagramsWritable.sendGroup")}}.

The **`WebTransportSendGroup`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a group of streams and datagrams whose relative send priority can be compared and prioritized as a set, based on the `sendOrder` value of each member.

## Examples

### Basic usage

The example below creates a send group, then associates a unidirectional stream and the connection's outgoing datagram stream with it, giving each a `sendOrder` so that their relative priority can be compared:

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

const datagrams = transport.datagrams.createWritable({
  sendGroup,
  sendOrder: 2,
});

// Queued bytes for datagrams are sent ahead of those for stream, as the
// two share a send group and datagrams has been given the higher sendOrder.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
