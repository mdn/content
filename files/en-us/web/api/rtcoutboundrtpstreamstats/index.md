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

<!-- he `RTCOutboundRtpStreamStats` dictionary includes the following properties in addition to those it inherits from {{domxref("RTCSentRtpStreamStats")}}, {{domxref("RTCRtpStreamStats")}}._ -->

- {{domxref("RTCOutboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : A floating-point value indicating the average {{Glossary("RTCP")}} interval between two consecutive compound RTCP packets.
- {{domxref("RTCOutboundRtpStreamStats.firCount", "firCount")}}
  - : An integer value which indicates the total number of Full Intra Request (FIR) packets which this {{domxref("RTCRtpSender")}} has sent to the remote {{domxref("RTCRtpReceiver")}}. This is an indicator of how often the stream has lagged, requiring frames to be skipped in order to catch up. _Valid only for video streams._
- {{domxref("RTCOutboundRtpStreamStats.framesEncoded", "framesEncoded")}}
  - : The number of frames that have been successfully encoded so far for sending on this RTP stream. _Only valid for video streams._
- {{domxref("RTCOutboundRtpStreamStats.lastPacketSentTimestamp", "lastPacketSentTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the last packet was sent for this SSRC.
    The {{domxref("RTCOutboundRtpStreamStats.timestamp", "timestamp")}} property, on the other hand, indicates the time at which the `RTCOutboundRtpStreamStats` object was generated.
- {{domxref("RTCOutboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnolwedgement (NACK) packets this `RTCRtpSender` has received from the remote {{domxref("RTCRtpReceiver")}}.
- {{domxref("RTCOutboundRtpStreamStats.perDscpPacketsSent", "perDscpPacketsSent")}}
  - : A record of key-value pairs with strings as the keys mapped to 32-bit integer values, each indicating the total number of packets this `RTCRtpSender` has transmitted for this source for each Differentiated Services Code Point (DSCP).
- {{domxref("RTCOutboundRtpStreamStats.pliCount", "pliCount")}}
  - : An integer specifying the number of times the remote receiver has notified this `RTCRtpSender` that some amount of encoded video data for one or more frames has been lost, using Picture Loss Indication (PLI) packets. _Only available for video streams._
- {{domxref("RTCOutboundRtpStreamStats.qpSum", "qpSum")}}
  - : A 64-bit value containing the sum of the QP values for every frame encoded by this {{domxref("RTCRtpSender")}}. _Valid only for video streams._
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}}
  - : A record mapping each of the quality limitation reasons in the {{domxref("RTCRemoteInboundRtpStreamStats")}} enumeration to a floating-point value indicating the number of seconds the stream has spent with its quality limited for that reason.
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationReason", "qualityLimitationReason")}}
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
- {{domxref("RTCOutboundRtpStreamStats.totalEncodedBytesTarget", "totalEncodedBytesTarget")}}
  - : A cumulative sum of the _target_ frame sizes (the targeted maximum size of the frame in bytes when the codec is asked to compress it) for all of the frames encoded so far. This will likely differ from the total of the _actual_ frame sizes.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodeTime", "totalEncodeTime")}}
  - : A floating-point value indicating the total number of seconds that have been spent encoding the frames encoded so far by this {{domxref("RTCRtpSender")}}.
- {{domxref("RTCOutboundRtpStreamStats.trackId", "trackId")}}
  - : The {{domxref("RTCOutboundRtpStreamStats.id", "id")}} of the {{domxref("RTCSenderAudioTrackAttachmentStats")}} or {{domxref("RTCSenderVideoTrackAttachmentStats")}} object containing the current track attachment to the {{domxref("RTCRtpSender")}} responsible for this stream.

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
