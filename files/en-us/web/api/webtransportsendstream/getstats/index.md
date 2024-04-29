---
title: "WebTransportSendStream: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransportSendStream.getStats
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

The **`getStats()`** method of the {{domxref("WebTransportSendStream")}} interface asynchronously returns an object containing statistics for the current stream.

The statistics include the total number of bytes written to the stream, the number that have been sent (ignoring packet overhead), and the number of bytes that have been set at least once, and the number that have been acknowledged (up until the first sequentially-ordered non-acknowledged byte).
It therefore provides a measure of how quickly the application is sending bytes to the server on this particular stream.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a object containing statistics about the current stream.
The returned object has the following properties:

- `bytesAcknowledged`
  - : A positive integer indicating the number of bytes written to this stream that have been sent and acknowledged as received by the server, using QUIC's ACK mechanism.
    Only sequential bytes up to, but not including, the first non-acknowledged byte, are counted.
    This number can only increase and is always less than or equal to `bytesSent`.
    When the connection is over HTTP/2, the value will match `bytesSent`.
- `bytesSent`
  - : A positive integer indicating the number of bytes written to this stream that have been sent at least once (but not necessarily acknowledged).
    This number can only increase, and is always less than or equal to `bytesWritten`.
    Note that this count does not include bytes sent as network overhead (such as packet headers).
- `bytesWritten`
  - : A positive integer indicating the number of bytes successfully written to this stream.
    This number can only increase.

## Examples

The code snippet below uses `await` to wait on the {{jsxref("Promise")}} returned by `getStats()`.
When the promise fulfills, the result for the number of bytes that have been sent but not acknowledged is logged to the console.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
