---
title: peer-connection statistics
slug: Web/API/RTCStatsReport/peer_connection_stats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_peer-connection
---

{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) peer connection statistics provide information about the number of unique data channels that have been opened, and the number of opened channels that have been closed.
This allows the current number of open channels to be calculated.

These stats are returned in a {{domxref("RTCStatsReport")}} from {{domxref("RTCPeerConnection.getStats()")}}, and have a type of `peer-connection`.

## Instance properties

- `dataChannelsOpened`
  - : A positive integer value indicating the number of unique {{domxref("RTCDataChannel")}} objects that have entered the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime.

- `dataChannelsClosed`
  - : A positive integer value indicating the number of unique {{domxref("RTCDataChannel")}} objects that have left the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime (channels that transition to "closing" or "closed" without ever being "open" are not counted in this number).
    A channel will leave the open state if either end of the connection or the underlying transport is closed.

The following properties are common to all statistics objects.

- `id`
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- `timestamp`
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- `type`
  - : A string indicating the type of statistics the object contains.
    For peer connections this is `peer-connection`.

## Examples

This example shows a function to return the total number of open connections, or `null` if no statistics are provided.
This might be called in a loop, similar to the approach used in [`RTCPeerConnection.getStats()` example](/en-US/docs/Web/API/RTCPeerConnection/getStats#examples)

The method waits on a waits on a {{domxref("RTCPeerConnection")}} for statistics and then iterates the returned {{domxref("RTCStatsReport")}} to get just the stats of type `peer-connection`.
It then returns the total number of open channels using the data in the report.

```js
async function numberOpenConnections (peerConnection) {
  const stats = await peerConnection.getStats(/* null */);
  let peerConnectionStats = null;

  stats.forEach((report) => {
    if (report.type === "peer-connection") {
      peerConnectionStats = report;
      break;
    }
  });

  return =peerConnectionStats.dataChannelsOpened - peerConnectionStats.dataChannelsClosed;
}
```

Note that as this you might call this code at regular intervals in a similar way to that shown in

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
