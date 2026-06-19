---
title: "WebTransportSendGroup: getStats() method"
short-title: getStats()
slug: Web/API/WebTransportSendGroup/getStats
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransportSendGroup.getStats
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

The **`getStats()`** method of the {{domxref("WebTransportSendGroup")}} interface returns a {{jsxref("Promise")}} that resolves to an object containing statistics aggregated across all of the {{domxref("WebTransportSendStream")}} and {{domxref("WebTransportDatagramsWritable")}} objects currently associated with this group.
That is, every stream and datagram writable whose `sendGroup` is set to this `WebTransportSendGroup`.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing aggregated statistics for the group's members.
The returned object has the following properties:

- `bytesAcknowledged`
  - : A positive integer indicating the number of bytes written to the group's members that have been sent and acknowledged as received by the server, using QUIC's ACK mechanism.
    Only sequential bytes up to, but not including, the first unacknowledged byte of each member, are counted.
    This number can only increase and is always less than or equal to `bytesSent`.
- `bytesSent`
  - : A positive integer indicating the number of bytes written to the group's members that have been sent at least once (but not necessarily acknowledged).
    This number can only increase, and is always less than or equal to `bytesWritten`.
    Note that this count does not include bytes sent as network overhead (such as packet headers).
- `bytesWritten`
  - : A positive integer indicating the number of bytes successfully written to the group's members.
    This number can only increase.

## Examples

### Basic usage

The code snippet below uses [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) to wait on the {{jsxref("Promise")}} returned by `getStats()`, then logs the number of bytes that have been sent across the group's members but not yet acknowledged:

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
