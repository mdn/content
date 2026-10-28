---
title: "WebTransportSendStream: sendGroup property"
short-title: sendGroup
slug: Web/API/WebTransportSendStream/sendGroup
page-type: web-api-instance-property
browser-compat: api.WebTransportSendStream.sendGroup
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`sendGroup`** property of the {{domxref("WebTransportSendStream")}} interface represents the {{domxref("WebTransportSendGroup")}} that this stream is grouped under for the purposes of {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}} prioritization.

Within a group, bytes queued for sending on streams and datagrams with a higher `sendOrder` are sent before any bytes from lower-priority ones.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

## Value

A `WebTransportSendGroup` object, or `null` to specify the default send group.
The default value is `null`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if set to a `WebTransportSendGroup` that is associated with a different `WebTransport` object than this stream.

## Examples

### Basic usage

The example below creates a send group using the {{domxref("WebTransport.createSendGroup()")}} method, and then uses it with a `sendOrder` value, to prioritize the stream relative to other streams and datagrams that are part of the same group:

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

console.log(stream.sendGroup === sendGroup); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportSendGroup")}}
- {{domxref("WebTransportSendStream.sendOrder")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
