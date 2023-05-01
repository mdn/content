---
title: inbound-rtp statistics
slug: Web/API/RTCStatsReport/inbound-rtp
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_inbound-rtp
---

{{APIRef("WebRTC")}}

<!-- 

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) peer connection statistics provide information about the number of unique data channels that have been opened, and the number of opened channels that have been closed.
This allows the current number of open channels to be calculated.

These stats are returned in a {{domxref("RTCStatsReport")}} from {{domxref("RTCPeerConnection.getStats()")}}, and have a type of `peer-connection`.

## Instance properties
-->

///

<!-- RTCRtpStreamStats -->

- `ssrc`
  - : Xxxxx
- `kind`
  - : Xxxxx
- `transportId`
  - : Xxxxx
- `codecId`
  - : Xxxxx

<!-- RTCReceivedRtpStreamStats -->
- `packetsReceived`
  - : Xxxxx
- `packetsLost`
  - : Xxxxx
- `jitter`
  - : Xxxxx

<!-- RTCInboundRtpStreamStats -->

- `trackIdentifier`
  - : Xxxxx
- `kind` <!-- note, duplicate from RTCRtpStreamStats above, probably only one. -->
  - : Xxxxx
- `mid` {{experimental_inline}}
  - : Xxxxx
- `remoteId`
  - : Xxxxx
    <!-- - `framesDecoded`: not implemented (bcd testing) -->
    <!-- - `keyFramesDecoded`: not implemented (bcd testing) -->
    <!-- framesRendered: not implemented (bcd testing) -->
    <!-- framesDropped: not implemented (bcd testing) -->
    <!-- frameWidth: not implemented (bcd testing) -->
    <!-- frameHeight: not implemented (bcd testing) -->
    <!-- framesPerSecond: not implemented (bcd testing) -->
- `qpSum` {{experimental_inline}} <!-- NOTE - isn't it? - no current implementers -->
  - : Xxxxx
    <!-- totalDecodeTime: not implemented (bcd testing) -->
    <!-- totalInterFrameDelay: not implemented (bcd testing) -->
    <!-- totalSquaredInterFrameDelay: not implemented (bcd testing) -->
    <!-- pauseCount: not implemented (bcd testing) -->
    <!-- totalPausesDuration: not implemented (bcd testing) -->
    <!-- freezeCount: not implemented (bcd testing) -->
    <!-- totalFreezesDuration: not implemented (bcd testing) -->
- `lastPacketReceivedTimestamp`
  - : Xxxxx
- `headerBytesReceived`
  - : Xxxxx
- `packetsDiscarded`
  - : Xxxxx
- `fecPacketsReceived`
  - : Xxxxx
- `fecPacketsDiscarded`
  - : Xxxxx
- `bytesReceived`
  - : Xxxxx
- `nackCount`
  - : The number of times the receiver notified the sender that one or more RTP packets has been lost by sending a Negative ACKnowledgement (NACK, also called "Generic NACK") packet to the sender.
    This value is only available to the receiver. <!-- line irrelevant here if we don't do dicts --> <!-- See also https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/nackCount -->
    <!-- firCount: not implemented (bcd testing) -->
    <!-- pliCount: not implemented (bcd testing) -->
    <!-- totalProcessingDelay: not implemented (bcd testing) -->
    <!-- estimatedPlayoutTimestamp: not implemented (bcd testing) -->
- `jitterBufferDelay`
  - : Xxxxx
- `jitterBufferTargetDelay` {{experimental_inline}}
  - : Xxxxx
- `jitterBufferEmittedCount`
  - : Xxxxx
- `jitterBufferMinimumDelay` {{experimental_inline}}
  - : Xxxxx
- `totalSamplesReceived`
  - : Xxxxx
- `concealedSamples`
  - : Xxxxx
- `silentConcealedSamples`
  - : Xxxxx
- `concealmentEvents`
  - : Xxxxx
- `insertedSamplesForDeceleration`
  - : Xxxxx
- `removedSamplesForAcceleration`
  - : Xxxxx
- `audioLevel`
  - : Xxxxx
- `totalAudioEnergy`
  - : Xxxxx
- `totalSamplesDuration`
  - : Xxxxx
    <!-- framesReceived: not implemented (bcd testing) -->
    <!-- decoderImplementation: not implemented (bcd testing) -->
- `playoutId` {{experimental_inline}}
  - : Xxxxx
    <!-- powerEfficientDecoder: not implemented (bcd testing) -->
    <!-- framesAssembledFromMultiplePackets: not implemented (bcd testing) -->
    <!-- totalAssemblyTime: not implemented (bcd testing) -->
    <!-- retransmittedPacketsReceived: not implemented (bcd testing) -->
    <!-- retransmittedBytesReceived: not implemented (bcd testing) -->

The following properties are common to all statistics objects.

<!-- RTCStats -->

- `id`
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- `timestamp`
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- `type`
  - : A string indicating the type of statistics the object contains.
    For peer connections this is `inbound-rtp`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
