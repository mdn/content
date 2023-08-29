---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_peer-connection
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnectionStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides information about the high level peer connection ({{domxref("RTCPeerConnection")}}).

In particular, it provides the number of unique data channels that have been opened, and the number of opened channels that have been closed.
This allows the current number of open channels to be calculated.

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `peer-connection`.

## Instance properties

- {{domxref("RTCPeerConnectionStats.dataChannelsOpened", "dataChannelsOpened")}}
  - : A positive integer value indicating the number of unique {{domxref("RTCDataChannel")}} objects that have entered the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime.
- {{domxref("RTCPeerConnectionStats.dataChannelsClosed", "dataChannelsClosed")}}
  - : A positive integer value indicating the number of unique {{domxref("RTCDataChannel")}} objects that have left the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime (channels that transition to [`closing`](/en-US/docs/Web/API/RTCDataChannel/readyState#closing) or [`closed`](/en-US/docs/Web/API/RTCDataChannel/readyState#closed) without ever being `open` are not counted in this number).
    A channel will leave the `open` state if either end of the connection or the underlying transport is closed.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCPeerConnectionStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCPeerConnectionStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCPeerConnectionStats.type", "type")}}
  - : A string with the value `"peer-connection"`, indicating the type of statistics that the object contains.

## Examples

This example shows a function to return the total number of open connections, or `null` if no statistics are provided.
This might be called in a loop, similar to the approach used in [`RTCPeerConnection.getStats()` example](/en-US/docs/Web/API/RTCPeerConnection/getStats#examples)

The function waits for the result of a call to {{domxref("RTCPeerConnection.getStats()")}} and then iterates the returned {{domxref("RTCStatsReport")}} to get just the stats of type `"peer-connection"`.
It then returns the total number of open channels, or `null`, using the data in the report.

```js
async function numberOpenConnections (peerConnection) {
  const stats = await peerConnection.getStats();
  let peerConnectionStats = null;

  stats.forEach((report) => {
    if (report.type === "peer-connection") {
      peerConnectionStats = report;
      break;
    }
  });

result = (typeof peerConnectionStats.dataChannelsOpened === 'undefined' || typeof peerConnectionStats.dataChannelsClosed=== 'undefined') ? null : peerConnectionStats.dataChannelsOpened - peerConnectionStats.dataChannelsClosed;
return result
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
