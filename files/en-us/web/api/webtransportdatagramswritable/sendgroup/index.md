---
title: "WebTransportDatagramsWritable: sendGroup property"
short-title: sendGroup
slug: Web/API/WebTransportDatagramsWritable/sendGroup
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramsWritable.sendGroup
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`sendGroup`** property of the {{domxref("WebTransportDatagramsWritable")}} interface gets or sets the {{domxref("WebTransportSendGroup")}} that this `WebTransportDatagramsWritable` is grouped under for the purposes of {{domxref("WebTransportDatagramsWritable.sendOrder", "sendOrder")}} prioritization.

Within a group, bytes queued for sending on streams and datagrams with a higher `sendOrder` are sent before any bytes from lower-priority ones.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

## Value

A `WebTransportSendGroup` object, or `null` to specify the default send group.

## Examples

### Basic usage

The example below creates a send group using the {{domxref("WebTransport.createSendGroup()")}} method, and then uses it with a `sendOrder` value, to prioritize the datagrams written to the stream relative to other streams and datagrams that are part of the same group:

```js
const sendGroup = transport.createSendGroup();

const writable = transport.datagrams.createWritable({
  sendGroup,
  sendOrder: 1,
});

console.log(writable.sendGroup === sendGroup); // true

const writer = writable.getWriter();
const data = new Uint8Array([65, 66, 67]);
await writer.ready;
writer.write(data).catch(() => {});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
