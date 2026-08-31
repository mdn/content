---
title: WebTransportSendGroup
slug: Web/API/WebTransportSendGroup
page-type: web-api-interface
browser-compat: api.WebTransportSendGroup
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportSendGroup`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents a group of streams and datagrams, within which relative send priority is determined by the `sendOrder` value of each member.

`WebTransportSendGroup` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instance methods

- {{domxref("WebTransportSendGroup.getStats", "getStats()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object containing statistics aggregated across all of the {{domxref("WebTransportSendStream")}} and {{domxref("WebTransportDatagramsWritable")}} objects currently associated with this group.

## Description

Unlike for {{domxref("WritableStream")}} instances, for which the priority at which bytes are sent on different streams is implementation-dependent, a {{domxref("WebTransportDatagramsWritable")}} or {{domxref("WebTransportSendStream")}} allows you to set the priority at which bytes will be sent on each instance relative to others in the same `sendGroup`.
A send group is created using the {{domxref("WebTransport.createSendGroup", "createSendGroup()")}} method, and the relative priority is defined by the `sendOrder` property of `WebTransportDatagramsWritable` or `WebTransportSendStream` instances.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

A `WebTransportSendGroup` is created using the `createSendGroup()` method of the {{domxref("WebTransport")}} interface.
You can then associate it with a `WebTransportDatagramsWritable` or `WebTransportSendStream` by:

- Passing it as the `sendGroup` option when the object is created — see {{domxref("WebTransport.createUnidirectionalStream()")}}, {{domxref("WebTransport.createBidirectionalStream()")}}, and {{domxref("WebTransportDatagramDuplexStream.createWritable()")}}.
- Setting the object's `sendGroup` property afterwards, for example using {{domxref("WebTransportDatagramsWritable.sendGroup")}}.

## Examples

### Basic usage

The example below creates a send group, then associates a unidirectional stream and the connection's outgoing datagram stream with it, giving each a `sendOrder`.
Bytes on the datagram stream will be prioritized ahead of any bytes on the unidirectional stream, because they are both in the same `sendGroup` and the datagram stream has a higher `sendOrder`.

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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
