---
title: "WebTransportSendGroup: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportSendGroup/getStats
page-type: web-api-instance-method
browser-compat: api.WebTransportSendGroup.getStats
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`getStats()`** method of the {{domxref("WebTransportSendGroup")}} interface returns a {{jsxref("Promise")}} that resolves to an object containing statistics aggregated across all of the {{domxref("WebTransportSendStream")}} objects currently associated with this group.
These are the streams whose {{domxref("WebTransportSendStream.sendGroup", "sendGroup")}} property is set to this `WebTransportSendGroup`.

The statistics provide a measure of how quickly the application is sending bytes to the server across all the streams in the group.

Note that datagram writables in the group aren't counted, and that because only the streams in the group at the time of the call are counted, the totals can go down if a stream is moved to a different group.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing aggregated statistics for the group's streams.
The returned object has the following properties:

- `bytesAcknowledged` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes written to the group's streams that have been sent and acknowledged as received by the server, using {{Glossary("QUIC")}}'s ACK mechanism.
    For each stream, bytes are counted from the start of the stream up to the first byte that hasn't been acknowledged.
    Any bytes after that gap aren't counted, even if they have been acknowledged.
    This number is always less than or equal to `bytesSent`.
    When the connection is over HTTP/2, the value matches `bytesSent`.
- `bytesSent` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes written to the group's streams that have been sent at least once (but not necessarily acknowledged).
    This number is always less than or equal to `bytesWritten`.
    The count does not include bytes sent as network overhead (such as packet headers).
- `bytesWritten` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes successfully written to the group's streams.

## Examples

### Logging bytes sent but not yet acknowledged across a group

The following code snippet uses [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) to wait on the {{jsxref("Promise")}} returned by `getStats()`, then logs the number of bytes that have been sent across the group's streams but not yet acknowledged:

```js
const stats = await sendGroup.getStats();
const bytesNotAcknowledged = stats.bytesSent - stats.bytesAcknowledged;
console.log(`Bytes sent but not yet acknowledged: ${bytesNotAcknowledged}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportSendStream.getStats()")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
