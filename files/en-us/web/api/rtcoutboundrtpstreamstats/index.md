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

- {{domxref("RTCOutboundRtpStreamStats.active", "active")}} {{experimental_inline}}
  - : A boolean that indicates whether this RTP stream is configured to be sent, or is disabled.
- {{domxref("RTCOutboundRtpStreamStats.frameHeight", "frameHeight")}}
  - : An integer indicating the height of the last encoded frame, in pixels.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.frameWidth", "frameWidth")}}
  - : An integer indicating the width of the last encoded frame, in pixels.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.framesEncoded", "framesEncoded")}}
  - : The number of frames that have been successfully encoded so far for sending on this RTP stream.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.framesPerSecond", "framesPerSecond")}}
  - : A number that represents the encoded frames sent in the last second.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.framesSent", "framesSent")}}
  - : A positive integer that represents the total number of encoded frames sent on this RTP stream.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.headerBytesSent", "headerBytesSent")}}
  - : A positive integer that represents the total number of RTP header and padding bytes sent for this SSRC.
- {{domxref("RTCOutboundRtpStreamStats.keyFramesEncoded", "keyFramesEncoded")}} {{experimental_inline}}
  - : A positive integer that represents the total number of key frames successfully encoded in this RTP media stream.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.mediaSourceId", "mediaSourceId")}}
  - : A string that represents the id of the stats object of the track currently attached to the sender of this stream.
- {{domxref("RTCOutboundRtpStreamStats.mid", "mid")}}
  - : A string that uniquely identifies the pairing of source and destination of the transceiver's stream.
    This is the value of the corresponding {{domxref("RTCRtpTransceiver.mid")}} unless that is null, in which case the statistic property is not present.
- {{domxref("RTCOutboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnowledgement (NACK) packets this `RTCRtpSender` has received from the remote {{domxref("RTCRtpReceiver")}}.
    This locally-computed value provides an indication of the error resiliency of the connection.
- {{domxref("RTCOutboundRtpStreamStats.qpSum", "qpSum")}}
  - : A 64-bit value containing the sum of the QP values for every frame encoded by this {{domxref("RTCRtpSender")}}.
    This locally-computed value provides an indication of how heavily compressed the data is.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}} {{experimental_inline}}
  - : A map of the reasons that a media stream's resolution or framerate has been reduced, and the time that the quality was reduced for each reason.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationReason", "qualityLimitationReason")}} {{experimental_inline}}
  - : A string indicating the reason why the stream is being quality-limited.
    One of: `none`, `cpu`, `bandwidth`, or `other`.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string which identifies the {{domxref("RTCRemoteInboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC.
    This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedBytesSent", "retransmittedBytesSent")}}
  - : A positive integer that represents the total number of payload bytes retransmitted for the source associated with this stream.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedPacketsSent", "retransmittedPacketsSent")}}
  - : A positive integer that represents the total number of packets retransmitted for the source associated with this stream.
- {{domxref("RTCOutboundRtpStreamStats.rid", "rid")}}
  - : A string that indicates the RTP stream ID for a corresponding video stream.
- {{domxref("RTCOutboundRtpStreamStats.scalabilityMode", "scalabilityMode")}} {{experimental_inline}}
  - : A string that represents the scalability mode for the RTP stream, if one has been configured.
- {{domxref("RTCOutboundRtpStreamStats.targetBitrate", "targetBitrate")}}
  - : A number that represents the bit rate that the `RTCRtpSender`'s codec is currently attempting to achieve for the stream.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodeTime", "totalEncodeTime")}}
  - : A number that represents the total number of seconds that have been spent encoding the frames encoded for this stream {{domxref("RTCRtpSender")}}.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.totalEncodedBytesTarget", "totalEncodedBytesTarget")}} {{experimental_inline}}
  - : A cumulative sum of the _target_ frame sizes for all of the frames encoded so far.
    This will likely differ from the total of the _actual_ frame sizes.
    _Undefined for audio streams._
- {{domxref("RTCOutboundRtpStreamStats.totalPacketSendDelay", "totalPacketSendDelay")}}
  - : A number that represents the total time in seconds that packets have spent buffered locally before being transmitted.

### Sent RTP stream statistics

<!-- RTCSentRtpStreamStats -->

- {{domxref("RTCOutboundRtpStreamStats.bytesSent", "bytesSent")}} {{optional_inline}}
  - : A positive integer indicating the total number of bytes sent for this SSRC, including retransmissions. <!-- [RFC3550] section 6.4.1 -->
- {{domxref("RTCOutboundRtpStreamStats.packetsSent", "packetsSent")}} {{optional_inline}}
  - : A positive integer indicating the total number of RTP packets sent for this SSRC, including retransmissions. <!-- [RFC3550] section 6.4.1 -->

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
