---
title: "WebTransportDatagramsWritable: sendOrder property"
short-title: sendOrder
slug: Web/API/WebTransportDatagramsWritable/sendOrder
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramsWritable.sendOrder
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`sendOrder`** property of the {{domxref("WebTransportDatagramsWritable")}} interface gets or sets an integer indicating the priority of this stream's datagrams relative to other streams and datagrams in the same `sendGroup`.

Within a {{domxref("WebTransportDatagramsWritable.sendGroup", "sendGroup")}}, bytes queued for sending on streams and datagrams with a higher `sendOrder` are sent before any bytes from lower-priority ones.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

## Value

An integer indicating the relative priority of this stream's datagrams when sending bytes.
The default value is `0`.

## Examples

### Basic usage

The example below shows how you can set the initial `sendOrder` when calling {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} to create the writable stream, read the value back from the stream, and then change it:

```js
const writable = transport.datagrams.createWritable({
  sendOrder: 1, // Set initial send order
});

console.log(`Send order: ${writable.sendOrder}`); // Send order: 1

const writer = writable.getWriter();
const data = new Uint8Array([65, 66, 67]);
await writer.ready;
writer.write(data).catch(() => {});

// Increase the priority of this stream's datagrams
writable.sendOrder = 2;
console.log(`Send order: ${writable.sendOrder}`); // Send order: 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
