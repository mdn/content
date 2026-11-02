---
title: "WebTransportSendStream: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
page-type: web-api-instance-method
browser-compat: api.WebTransportSendStream.getStats
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`getStats()`** method of the {{domxref("WebTransportSendStream")}} interface asynchronously returns an object containing statistics for the current stream.

The statistics include the total number of bytes written to the stream, the number that have been sent at least once (ignoring packet overhead), and the number that the server has acknowledged (up to the first unacknowledged byte).
They therefore provide a measure of how quickly the application is sending bytes to the server on this particular stream.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing statistics about the current stream.
The returned object has the following properties:

- `bytesAcknowledged` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes written to this stream that have been sent and acknowledged as received by the server, using {{Glossary("QUIC")}}'s ACK mechanism.
    Bytes are counted from the start of the stream up to the first byte that hasn't been acknowledged.
    Any bytes after that gap aren't counted, even if they have been acknowledged.
    This number can only increase and is always less than or equal to `bytesSent`.
    When the connection is over HTTP/2, the value matches `bytesSent`.
- `bytesSent` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes written to this stream that have been sent at least once (but not necessarily acknowledged).
    This number can only increase and is always less than or equal to `bytesWritten`.
    The count does not include bytes sent as network overhead (such as packet headers).
- `bytesWritten` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes successfully written to this stream.
    This number can only increase.

## Examples

### Logging bytes sent but not yet acknowledged

The following code snippet uses `await` to wait on the {{jsxref("Promise")}} returned by `getStats()`.
When the promise fulfills, the code logs the number of bytes that have been sent but not yet acknowledged.

```js
const stats = await stream.getStats();
const bytesNotAcknowledged = stats.bytesSent - stats.bytesAcknowledged;
console.log(`Bytes sent but not yet acknowledged: ${bytesNotAcknowledged}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportReceiveStream.getStats()")}}
- {{domxref("WebTransportSendGroup.getStats()")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
