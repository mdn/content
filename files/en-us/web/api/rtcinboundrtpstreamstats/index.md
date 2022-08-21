---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - local
  - receiver
browser-compat: api.RTCInboundRtpStreamStats
---
{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API)'s **`RTCInboundRtpStreamStats`** dictionary, based upon {{domxref("RTCReceivedRtpStreamStats")}} and {{domxref("RTCStats")}}, contains statistics related to the receiving end of an RTP stream on the local end of the {{domxref("RTCPeerConnection")}}.

## Properties

The `RTCInboundRtpStreamStats` dictionary is based on the {{domxref("RTCReceivedRtpStreamStats")}} dictionary, whose properties are also available.

- {{domxref("RTCInboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : A floating-point value indicating the average {{Glossary("RTCP")}} interval between two consecutive compound RTCP packets.
- {{domxref("RTCInboundRtpStreamStats.bytesReceived", "bytesReceived")}}
  - : A 64-bit integer which indicates the total number of bytes that have been received so far for this media source.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}
  - : An integer value indicating the number of RTP Forward Error Correction (FEC) packets which have been received for this source, for which the error correction payload was discarded.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsReceived", "fecPacketsReceived")}}
  - : An integer value indicating the total number of RTP FEC packets received for this source. This counter may also be incremented when FEC packets arrive in-band along with media content; this can happen with Opus, for example.
- {{domxref("RTCInboundRtpStreamStats.firCount", "firCount")}}
  - : An integer value which indicates the total number of Full Intra Request (FIR) packets which this receiver has sent to the sender. This is an indicator of how often the stream has lagged, requiring frames to be skipped in order to catch up. This value is only available for video streams.
- {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
  - : A long integer value indicating the total number of frames of video which have been correctly decoded so far for this media source. This is the number of frames that would have been rendered if none were dropped. _Only valid for video streams._
- {{domxref("RTCInboundRtpStreamStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the last packet was received for this source. The {{domxref("RTCStats.timestamp", "timestamp")}} property, on the other hand, indicates the time at which the statistics object was generated.
- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnolwedgement (NACK) packets this receiver has sent.
- {{domxref("RTCInboundRtpStreamStats.packetsDuplicated", "packetsDuplicated")}}
  - : An integer value indicating the total number of packets that have been discarded because they were duplicates. These packets are not counted by {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}.
- {{domxref("RTCInboundRtpStreamStats.packetsFailedDecryption", "packetsFailedDecryption")}}
  - : An integer totaling the number of RTP packets that could not be decrypted. These packets are not counted by {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}.
- {{domxref("RTCInboundRtpStreamStats.perDscpPacketsReceived", "perDscpPacketsReceived")}}
  - : A record of key-value pairs with strings as the keys mapped to 32-bit integer values, each indicating the total number of packets this receiver has received on this RTP stream from this source for each Differentiated Services Code Point (DSCP).
- {{domxref("RTCInboundRtpStreamStats.pliCount", "pliCount")}}
  - : An integer specifying the number of times the receiver has notified the sender that some amount of encoded video data for one or more frames has been lost, using Picture Loss Indication (PLI) packets. This is only available for video streams.
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}}
  - : A 64-bit value containing the sum of the QP values for every frame decoded by this RTP receiver. You can determine the average QP per frame by dividing this value by {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}. _Valid only for video streams._
- {{domxref("RTCInboundRtpStreamStats.receiverId", "receiverId")}}
  - : A string indicating which identifies the {{domxref("RTCAudioReceiverStats")}} or {{domxref("RTCVideoReceiverStats")}} object associated with the stream's receiver. This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string which identifies the {{domxref("RTCRemoteOutboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC. This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCInboundRtpStreamStats.sliCount", "sliCount")}}
  - : An integer indicating the number of times the receiver sent a Slice Loss Indication (SLI) frame to the sender to tell it that one or more consecutive (in terms of scan order) video macroblocks have been lost or corrupted. Available only for video streams.
- {{domxref("RTCInboundRtpStreamStats.trackId", "trackId")}}
  - : A string which identifies the statistics object representing the receiving track; this object is one of two types: {{domxref("RTCReceiverAudioTrackAttachmentStats")}} or {{domxref("RTCReceiverVideoTrackAttachmentStats")}}. This ID is stable across multiple calls to `getStats()`.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStats")}}
- {{domxref("RTCStatsReport")}}
