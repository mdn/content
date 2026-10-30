---
title: "WebTransportDatagramDuplexStream: incomingMaxBufferedDatagrams property"
short-title: incomingMaxBufferedDatagrams
slug: Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams
page-type: web-api-instance-property
browser-compat: api.WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`incomingMaxBufferedDatagrams`** property of the {{domxref("WebTransportDatagramDuplexStream")}} interface represents the maximum number of incoming datagrams that can be queued while waiting to be read from the {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} stream.

## Value

An integer.

The initial value is defined by the browser.
Setting the property to `0` sets it to `1`.

## Description

Datagrams received from the server are held in a queue until they are read from the {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} stream.
If more datagrams arrive than the queue can hold, the oldest datagrams in the queue are dropped to make room for the new ones.
The browser doesn't notify your application when datagrams are dropped.
The number of incoming datagrams dropped because the queue was full is reported in the [`droppedIncoming`](/en-US/docs/Web/API/WebTransport/getStats#droppedincoming) property of the datagram statistics returned by {{domxref("WebTransport.getStats()")}}.
If this number keeps growing, increase this value or read datagrams from the stream more often.

This property replaces the deprecated {{domxref("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}} property.

## Examples

### Setting the maximum number of buffered incoming datagrams

This example sets the incoming queue to hold up to 100 datagrams, and then logs the value.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set incomingMaxBufferedDatagrams
  datagrams.incomingMaxBufferedDatagrams = 100;

  // get incomingMaxBufferedDatagrams
  console.log(datagrams.incomingMaxBufferedDatagrams);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportDatagramDuplexStream.readable")}}
- {{domxref("WebTransport.getStats()")}}
- {{domxref("WebTransportDatagramDuplexStream.incomingMaxAge")}}
- {{domxref("WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
