---
title: "WebTransportReceiveStream: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransportReceiveStream.getStats
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}

The **`getStats()`** method of the {{domxref("WebTransportReceiveStream")}} interface asynchronously returns an object containing statistics for the current stream.

The statistics include the total number of ordered bytes that have arrived on this stream (ignoring network overhead, up until the first missing byte) and the total number that have been read by the application.
It therefore provides a measure of how quickly the application is consuming bytes from the server on this particular stream.

{{AvailableInWorkers}}

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a object containing statistics about the current stream.
The returned object has the following properties:

- `timestamp`
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the timestamp at which the statistics were gathered, relative to Jan 1, 1970, UTC.
- `bytesReceived`
  - : A positive integer indicating the number of bytes received by this stream, up to the first missing byte.
    The number does not include any network overhead, and can only increase.
- `bytesRead`
  - : A positive integer indicating the number of bytes the application has read from this `WebTransportReceiveStream` stream.
    This number can only increase, and is always less than or equal to `bytesReceived`.

## Examples

The code snippet below uses `await` to wait on the {{jsxref("Promise")}} returned by `getStats()`.
When the promise fulfills, the result for the `bytesSent` property in the stats object is logged to the console.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
