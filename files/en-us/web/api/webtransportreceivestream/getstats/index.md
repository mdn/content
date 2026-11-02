---
title: "WebTransportReceiveStream: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
page-type: web-api-instance-method
browser-compat: api.WebTransportReceiveStream.getStats
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`getStats()`** method of the {{domxref("WebTransportReceiveStream")}} interface asynchronously returns an object containing statistics for the current stream.

The statistics include the total number of bytes received on this stream and the total number that the application has read.
They therefore provide a measure of how quickly the application is consuming bytes from the server on this particular stream.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing statistics about the current stream.
The returned object has the following properties:

- `bytesReceived` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes received by this stream, up to the first missing byte.
    Bytes can arrive out of order, so any bytes after a gap aren't counted until the missing bytes arrive.
    The number does not include any network overhead and can only increase.
- `bytesRead` {{optional_inline}}
  - : A non-negative integer indicating the number of bytes the application has read from this stream.
    This number can only increase and is always less than or equal to `bytesReceived`.

## Examples

### Logging bytes received but not yet read

The following code snippet uses `await` to wait on the {{jsxref("Promise")}} returned by `getStats()`.
When the promise fulfills, the code logs the number of bytes that have been received but not yet read.

```js
const stats = await stream.getStats();
const bytesNotRead = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes received but not yet read: ${bytesNotRead}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransportSendStream.getStats()")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
