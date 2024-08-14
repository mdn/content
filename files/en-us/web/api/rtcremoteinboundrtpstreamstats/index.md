---
title: RTCRemoteInboundRtpStreamStats
slug: Web/API/RTCRemoteInboundRtpStreamStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp
---

{{APIRef("WebRTC")}}

The **`RTCRemoteInboundRtpStreamStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report statistics from the remote endpoint about a particular incoming RTP stream.
These will correspond to an outgoing RTP stream at the local end of the {{domxref("RTCPeerConnection")}}.

The statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} or {{domxref("RTCRtpReceiver.getStats()")}} until you find a report with the [`type`](#type) of `remote-inbound-rtp`.

## Instance properties

### Remote inbound specific statistics

<!-- RTCRemoteInboundRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.fractionLost", "fractionLost")}} {{optional_inline}}
  - : A number indicating the fraction of packets lost for this SSRC since the last sender or receiver report.
- {{domxref("RTCRemoteInboundRtpStreamStats.localId", "localId")}} {{optional_inline}}
  - : A string that is used to find the local {{domxref("RTCOutboundRtpStreamStats")}} object that shares the same [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTime", "roundTripTime")}} {{optional_inline}}
  - : A number that indicates the estimated round trip time (RTT) for this SSRC, in seconds.
    This property will not exist until valid RTT data has been received.
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements", "roundTripTimeMeasurements")}} {{optional_inline}}
  - : A positive integer indicating the total number of valid round trip time measurements received for this [synchronization source (SSRC)](#ssrc).
- {{domxref("RTCRemoteInboundRtpStreamStats.totalRoundTripTime", "totalRoundTripTime")}} {{optional_inline}}
  - : A number indicating the cumulative sum of all round trip time measurements since the beginning of the session, in seconds.
    The average round trip time can be computed by dividing `totalRoundTripTime` by [`roundTripTimeMeasurements`](#roundtriptimemeasurements).

### Received RTP stream statistics

<!-- RTCReceivedRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.jitter", "jitter")}} {{optional_inline}}
  - : A number indicating the {{glossary("jitter", "packet jitter")}} for this synchronization source, measured in seconds.
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsLost", "packetsLost")}} {{optional_inline}}
  - : An integer indicating the total number of RTP packets lost for this SSRC, as measured at the remote endpoint.
    This value can be negative if duplicate packets were received.
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsReceived", "packetsReceived")}} {{optional_inline}} {{experimental_inline}}
  - : A positive integer indicating the total number of RTP packets received for this SSRC, including retransmissions.

### Common RTP stream statistics

<!-- RTCRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.codecId", "codecId")}} {{optional_inline}}
  - : A string that uniquely identifies the object that was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCRemoteInboundRtpStreamStats.kind", "kind")}}
  - : A string indicating whether the {{domxref("MediaStreamTrack")}} associated with the stream is an audio or a video track.
- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc", "ssrc")}}
  - : A positive integer that identifies the SSRC of the RTP packets in this stream.
- {{domxref("RTCRemoteInboundRtpStreamStats.transportId", "transportId")}} {{optional_inline}}
  - : A string that uniquely identifies the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCRemoteInboundRtpStreamStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCRemoteInboundRtpStreamStats.type", "type")}}
  - : A string with the value `"inbound-rtp"`, indicating the type of statistics that the object contains.

## Examples

Given a variable `peerConnection` that is an instance of an {{domxref("RTCPeerConnection")}}, the code below uses `await` to wait for the statistics report, and then iterates it using `RTCStatsReport.forEach()`.
It then filters the dictionaries for just those reports that have the type of `remote-inbound-rtp` and logs the result.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "remote-inbound-rtp") {
    console.log("Remote Inbound RTP Stream Stats:");
    console.log(`id: ${report.id}`);
    console.log(`timestamp: ${report.timestamp}`);
    console.log(`transportId: ${report.transportId}`);
    console.log(`ssrc: ${report.ssrc}`);
    console.log(`kind: ${report.kind}`);
    console.log(`codecId: ${report.codecId}`);
    console.log(`packetsReceived: ${report.packetsReceived}`);
    console.log(`packetsLost: ${report.packetsLost}`);
    console.log(`jitter: ${report.jitter}`);
    console.log(`totalRoundTripTime: ${report.totalRoundTripTime}`);
    console.log(
      `roundTripTimeMeasurements: ${report.roundTripTimeMeasurements}`,
    );
    console.log(`roundTripTime: ${report.roundTripTime}`);
    console.log(`localId: ${report.localId}`);
    console.log(`fractionLost: ${report.fractionLost}`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
