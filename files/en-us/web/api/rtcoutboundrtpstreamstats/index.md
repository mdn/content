---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_outbound-rtp
---

{{APIRef("WebRTC")}}

The **`RTCOutboundRtpStreamStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report metrics and statistics related to an outbound {{Glossary("RTP")}} stream being sent by an {{domxref("RTCRtpSender")}}.

The statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} or {{domxref("RTCRtpSender.getStats()")}} until you find a report with the [`type`](#type) of `outbound-rtp`.

## Instance properties

- {{domxref("RTCOutboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : A floating-point value indicating the average {{Glossary("RTCP")}} interval between two consecutive compound RTCP packets.
- {{domxref("RTCOutboundRtpStreamStats.framesEncoded", "framesEncoded")}}
  - : The number of frames that have been successfully encoded so far for sending on this RTP stream. _Only valid for video streams._
- {{domxref("RTCOutboundRtpStreamStats.perDscpPacketsSent", "perDscpPacketsSent")}}
  - : A record of key-value pairs with strings as the keys mapped to 32-bit integer values, each indicating the total number of packets this `RTCRtpSender` has transmitted for this source for each Differentiated Services Code Point (DSCP).
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}} {{experimental_inline}}
  - : A record mapping each of the quality limitation reasons in the {{domxref("RTCRemoteInboundRtpStreamStats")}} enumeration to a floating-point value indicating the number of seconds the stream has spent with its quality limited for that reason.
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationReason", "qualityLimitationReason")}} {{experimental_inline}}
  - : One of the string `none`, `cpu`, `bandwidth`, or `other`, explaining why the resolution and/or frame rate is being limited for this RTP stream. _Valid only for video streams_.
- {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string which identifies the {{domxref("RTCRemoteInboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC. This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedBytesSent", "retransmittedBytesSent")}}
  - : The total number of bytes that have been retransmitted for this source as of the time the statistics were sampled. These retransmitted bytes comprise the packets included in the value returned by {{domxref("RTCInboundRtpStreamStats.retransmittedPacketsSent", "retransmittedPacketsSent")}}.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedPacketsSent", "retransmittedPacketsSent")}}
  - : The total number of packets that have needed to be retransmitted for this source as of the time the statistics were sampled. These retransmitted packets are included in the value returned by {{domxref("RTCInboundRtpStreamStats.packetsSent", "packetsSent")}}.
- {{domxref("RTCOutboundRtpStreamStats.senderId", "senderId")}}
  - : The {{domxref("RTCOutboundRtpStreamStats.id", "id")}} of the {{domxref("RTCAudioSenderStats")}} or {{domxref("RTCVideoSenderStats")}} object containing statistics about this stream's {{domxref("RTCRtpSender")}}.
- {{domxref("RTCOutboundRtpStreamStats.sliCount", "sliCount")}}
  - : An integer indicating the number of times this sender received a Slice Loss Indication (SLI) frame from the remote peer, indicating that one or more consecutive video macroblocks have been lost or corrupted. Available only for video streams.
- {{domxref("RTCOutboundRtpStreamStats.targetBitrate", "targetBitrate")}}
  - : A value indicating the bit rate the `RTCRtpSender`'s codec is configured to attempt to achieve in its output media.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodedBytesTarget", "totalEncodedBytesTarget")}} {{experimental_inline}}
  - : A cumulative sum of the _target_ frame sizes (the targeted maximum size of the frame in bytes when the codec is asked to compress it) for all of the frames encoded so far. This will likely differ from the total of the _actual_ frame sizes.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodeTime", "totalEncodeTime")}}
  - : A floating-point value indicating the total number of seconds that have been spent encoding the frames encoded so far by this {{domxref("RTCRtpSender")}}.
- {{domxref("RTCOutboundRtpStreamStats.trackId", "trackId")}}
  - : The {{domxref("RTCOutboundRtpStreamStats.id", "id")}} of the {{domxref("RTCSenderAudioTrackAttachmentStats")}} or {{domxref("RTCSenderVideoTrackAttachmentStats")}} object containing the current track attachment to the {{domxref("RTCRtpSender")}} responsible for this stream.

### Local-only measurements

These properties are computed locally, and are only available to the device receiving the media stream.
Their primary purpose is to examine the error resiliency of the connection, as they provide information about lost packets, lost frames, and how heavily compressed the data is.

- {{domxref("RTCOutboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnowledgement (NACK) packets this `RTCRtpSender` has received from the remote {{domxref("RTCRtpReceiver")}}.
- {{domxref("RTCOutboundRtpStreamStats.qpSum", "qpSum")}}
  - : A 64-bit value containing the sum of the QP values for every frame encoded by this {{domxref("RTCRtpSender")}}.
    _Valid only for video streams._

### Common RTP stream statistics

<!-- RTCRtpStreamStats -->

- {{domxref("RTCOutboundRtpStreamStats.codecId", "codecId")}} {{optional_inline}}
  - : A string that uniquely identifies the object that was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCOutboundRtpStreamStats.kind", "kind")}}
  - : A string indicating whether the {{domxref("MediaStreamTrack")}} associated with the stream is an audio or a video track.
- {{domxref("RTCOutboundRtpStreamStats.ssrc", "ssrc")}}
  - : A positive integer that identifies the SSRC of the RTP packets in this stream.
- {{domxref("RTCOutboundRtpStreamStats.transportId", "transportId")}} {{optional_inline}}
  - : A string that uniquely identifies the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCOutboundRtpStreamStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCOutboundRtpStreamStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCOutboundRtpStreamStats.type", "type")}}
  - : A string with the value `"outbound-rtp"`, indicating the type of statistics that the object contains.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
