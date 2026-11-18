---
title: "WebTransportDatagramDuplexStream: outgoingMaxBufferedDatagrams property"
short-title: outgoingMaxBufferedDatagrams
slug: Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`outgoingMaxBufferedDatagrams`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface represents the maximum number of outgoing datagrams that can be queued for sending on each {{domxref("WebTransportDatagramsWritable")}} before backpressure is applied.

## Value

An integer.

The initial value is defined by the browser.
Setting the property to `0` sets it to `1`.

## Description

Each {{domxref("WebTransportDatagramsWritable")}} returned by {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} has its own queue of datagrams waiting to be sent.
When the number of datagrams in a queue reaches this value, the writable applies [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure): the promise returned by the writer's {{domxref("WritableStreamDefaultWriter.write()", "write()")}} method, and its {{domxref("WritableStreamDefaultWriter.ready", "ready")}} promise, don't fulfill until there is room in the queue for another datagram.
Queued datagrams are not dropped because the queue is full, though they can still expire if {{domxref("WebTransportDatagramDuplexStream.outgoingMaxAge", "outgoingMaxAge")}} is set.

Increasing this value releases backpressure on any writable whose queue is now shorter than the new value.

This property replaces the deprecated {{domxref("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}} property.

## Examples

### Setting the maximum number of buffered outgoing datagrams

This example sets the outgoing queue of each writable to hold up to 100 datagrams, and then logs the value.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set outgoingMaxBufferedDatagrams
  datagrams.outgoingMaxBufferedDatagrams = 100;

  // get outgoingMaxBufferedDatagrams
  console.log(datagrams.outgoingMaxBufferedDatagrams);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportDatagramDuplexStream.createWritable()")}}
- {{domxref("WebTransportDatagramDuplexStream.outgoingMaxAge")}}
- {{domxref("WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
