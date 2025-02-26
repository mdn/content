---
title: "WebTransportSendStream: sendOrder property"
short-title: sendOrder
slug: Web/API/WebTransportSendStream/sendOrder
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebTransportSendStream.sendOrder
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

The **`sendOrder`** property of the {{domxref("WebTransportSendStream")}} interface indicates the send priority of this stream relative to other streams for which the value has been set.

Queued bytes are sent first for streams that have a higher value.
If not set, the send order depends on the implementation.

## Value

A number indicating the relative priority of this stream when sending bytes.

## Examples

The example below shows how you can set the initial `sendOrder` when calling {{domxref("WebTransport.createUnidirectionalStream()")}} to create the send stream, read the value from the stream, and then change the order.
After changing the order the priority of this stream would increase, becoming higher than any stream with a priority of less than "596996858".

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream({
    sendOrder: "400", // Set initial stream order
  });

  console.log(`Stream order: ${stream.sendOrder}`); // Stream order: 400

  // write data ...

  // Change the stream order
  stream.sendOrder = 596996858;
  console.log(`Stream order: ${stream.sendOrder}`); // Stream order: 596996858

  // write more data ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
