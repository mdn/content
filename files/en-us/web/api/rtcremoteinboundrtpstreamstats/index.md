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

- {{domxref("RTCRemoteInboundRtpStreamStats.localId", "localId")}}
  - : A string that ...
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTime", "roundTripTime")}}
  - : A number that ...
- {{domxref("RTCRemoteInboundRtpStreamStats.totalRoundTripTime", "totalRoundTripTime")}}
  - : A number that ...
- {{domxref("RTCRemoteInboundRtpStreamStats.fractionLost", "fractionLost")}}
  - : A number that ...
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements", "roundTripTimeMeasurements")}}
  - : A positive number that ...

### Statistics measured at the receiver of an RTP stream

<!-- RTCReceivedRtpStreamStats -->

These statistics are measured at the receiving end of an RTP stream, regardless of whether it's local or remote.

- {{domxref("RTCRemoteInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
  - : The total number of RTP packets received for this synchronizing source, including retransmissions.
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsLost", "packetsLost")}}
  - : The total number of RTP packets lost for this synchronizing source.
    Note that this can be negative if more packets are received than sent.
- {{domxref("RTCRemoteInboundRtpStreamStats.jitter", "jitter")}}
  - : Packet {{glossary("jitter")}} for this [synchronizing source](#ssrc), measured in seconds.
    <!-- Calculated as defined in section 6.4.1. of [RFC3550]. -->

### Standard fields included for all media types

<!-- RTCRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.codecId", "codecId")}} {{optional_inline}}
  - : A string that uniquely identifies the object that was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCRemoteInboundRtpStreamStats.kind", "kind")}}
  - : A string indicating whether the {{domxref("MediaStreamTrack")}} associated with the stream is an audio or a video track.
- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc", "ssrc")}}
  - : A positive integer that identifies the synchronization source (SSRC) of the RTP packets in this stream.
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

<!-- TBD -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
