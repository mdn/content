---
title: "WebTransport: getStats() method"
short-title: getStats()
slug: Web/API/WebTransport/getStats
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransport.getStats
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`getStats()`** method of the {{domxref("WebTransport")}} interface asynchronously returns an object containing HTTP/3 connection statistics.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a object containing HTTP/3 connection statistics.
The returned object may have the following properties/statistics:

- `timestamp`
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the timestamp at which the statistics were gathered, relative to Jan 1, 1970, UTC.
- `bytesSent`
  - : A positive integer indicating the number of bytes sent on the QUIC connection, including retransmissions.
    Note that this count does not include additional data from protocols used by QUIC, such as UDP, or any other outer framing.
- `packetsSent`
  - : A positive integer indicating the number of packets sent on the QUIC connection, including those that are known to have been lost.
- `packetsLost`
  - : A positive integer indicating the number of packets lost on the QUIC connection.
    This value will increase as packets are declared lost, and decrease if they are subsequently received.
- `numOutgoingStreamsCreated`
  - : A positive integer indicating the number of outgoing QUIC streams created on the QUIC connection.
- `numIncomingStreamsCreated`
  - : A positive integer indicating the number of incoming QUIC streams created on the QUIC connection.
- `bytesReceived`
  - : A positive integer indicating the total number of bytes received on the QUIC connection.
    This count includes duplicate data from streams, but does not include additional data for protocols used by QUIC, such as UDP, or any other outer framing.
- `packetsReceived`
  - : A positive integer indicating the total number of packets received on the QUIC connection, including packets that were not processable.
- `smoothedRtt`
  - : A {{domxref("DOMHighResTimeStamp")}} containing the smoothed [round-trip time (RTT)](/en-US/docs/Glossary/Round_Trip_Time) currently observed on the connection, calculated as an exponentially weighted moving average of an endpoint's RTT samples after taking account of acknowledgement delays.
- `rttVariation`
  - : A {{domxref("DOMHighResTimeStamp")}} containing the mean variation in round-trip time samples currently observed on the connection.
- `minRtt`
  - : A {{domxref("DOMHighResTimeStamp")}} containing the minimum round-trip time observed on the entire connection.
- `datagrams`

  - : An object containing statistics for datagram transmission over the connection.
    The object has the following properties:

    - `timestamp`
      - : A {{domxref("DOMHighResTimeStamp")}} indicating the timestamp at which the statistics were gathered, relative to Jan 1, 1970, UTC.
    - `expiredOutgoing`
      - : A positive integer indicating the number of datagrams that were dropped from the queue for sending because they expired.
        Note that the maximum age before a datagram in the send-queue expires can be found in [`outgoingMaxAge`](/en-US/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge).
    - `droppedIncoming`
      - : A positive integer indicating the number incoming datagrams that were dropped.
        Incoming datagrams are dropped if the application does not read them before new datagrams overflow the [`readable` stream](/en-US/docs/Web/API/WebTransportDatagramDuplexStream/readable) receive queue.
    - `lostOutgoing`
      - : A positive integer indicating the number of sent datagrams that were declared lost.
        Note that a datagram may be declared lost if, for example, no acknowledgement arrived within a timeout, or an acknowledgement for a later datagram was received first.

<!-- Note, this is not in Firefox IDL, and method not yet implemented by others in https://searchfox.org/mozilla-central/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb
- `estimatedSendRate`
  - : A positive integer indicating the estimated rate at which queued data will be sent by the user agent, in bits per second.
    This rate applies to all streams and datagrams that share a `WebTransport` session.
    The member is not present when the session is pooled with others in a shared connection (see [`allowPooling`](/en-US/docs/Web/API/WebTransport/WebTransport#allowpooling) in the `WebTransport` constructor), or if the user agent does not yet have an estimate.
-->

## Examples

The example below uses `await` to wait on the {{jsxref("Promise")}} returned by `getStats()`.
When the promise fulfills, the result for the `bytesSent` property in the stats object is logged to the console.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
