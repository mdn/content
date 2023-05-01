---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
page-type: web-api-interface
browser-compat:
  - api.RTCStatsReport.type_inbound-rtp
  - api.RTCInboundRtpStreamStats
---

{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API)'s **`RTCInboundRtpStreamStats`** dictionary, based upon {{domxref("RTCReceivedRtpStreamStats")}} and {{domxref("RTCStats")}}, contains statistics related to the receiving end of an RTP stream on the local end of the {{domxref("RTCPeerConnection")}}.

## Instance properties

The `RTCInboundRtpStreamStats` dictionary is based on the {{domxref("RTCReceivedRtpStreamStats")}} dictionary, whose properties are also available.

<!-- RTCInboundRtpStreamStats -->

- `trackIdentifier`
  - : A string that contains the {{domxref("MediaStreamTrack.id", "id")}} value of the `MediaStreamTrack` associated with the inbound stream.
- `kind` <!-- note, duplicate from RTCRtpStreamStats above, probably only one. -->
  - : Xxxxx
- `mid` {{experimental_inline}}
  - : Xxxxx
- {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string which identifies the {{domxref("RTCRemoteOutboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC.
    This ID is stable across multiple calls to `getStats()`.
    <!-- - `framesDecoded`: not implemented (bcd testing) 
    - {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
      - : A long integer value indicating the total number of frames of video which have been correctly decoded so far for this media source.
      This is the number of frames that would have been rendered if none were dropped.
      _Only valid for video streams._
    -->
    <!-- - `keyFramesDecoded`: not implemented (bcd testing) -->
    <!-- framesRendered: not implemented (bcd testing) -->
    <!-- framesDropped: not implemented (bcd testing) -->
    <!-- frameWidth: not implemented (bcd testing) -->
    <!-- frameHeight: not implemented (bcd testing) -->
    <!-- framesPerSecond: not implemented (bcd testing) -->
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}} {{experimental_inline}} <!-- NOTE - isn't it? - no current implementers -->
  - : A 64-bit value containing the sum of the QP values for every frame decoded by this RTP receiver. You can determine the average QP per frame by dividing this value by {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}.
  _Valid only for video streams._
    <!-- totalDecodeTime: not implemented (bcd testing) -->
    <!-- totalInterFrameDelay: not implemented (bcd testing) -->
    <!-- totalSquaredInterFrameDelay: not implemented (bcd testing) -->
    <!-- pauseCount: not implemented (bcd testing) -->
    <!-- totalPausesDuration: not implemented (bcd testing) -->
    <!-- freezeCount: not implemented (bcd testing) -->
    <!-- totalFreezesDuration: not implemented (bcd testing) -->
- {{domxref("RTCInboundRtpStreamStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the last packet was received for this source.
    The {{domxref("RTCStats.timestamp", "timestamp")}} property, on the other hand, indicates the time at which the statistics object was generated.
- `headerBytesReceived`
  - : Xxxxx
- `packetsDiscarded`
  - : Xxxxx
- {{domxref("RTCInboundRtpStreamStats.fecPacketsReceived", "fecPacketsReceived")}}
  - : An integer value indicating the total number of RTP FEC packets received for this source.
    This counter may also be incremented when FEC packets arrive in-band along with media content; this can happen with Opus, for example.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}
  - : An integer value indicating the number of RTP Forward Error Correction (FEC) packets which have been received for this source, for which the error correction payload was discarded.
- {{domxref("RTCInboundRtpStreamStats.bytesReceived", "bytesReceived")}}
  - : A 64-bit integer which indicates the total number of bytes that have been received so far for this media source.
- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnolwedgement (NACK, also called "Generic NACK") packets this receiver has sent to notify the sender that one or more RTP packets has been lost.
    This value is only available to the receiver.
    <!-- firCount: not implemented (bcd testing) 
    - {{domxref("RTCInboundRtpStreamStats.firCount", "firCount")}}
      - : An integer value which indicates the total number of Full Intra Request (FIR) packets which this receiver has sent to the sender.
        This is an indicator of how often the stream has lagged, requiring frames to be skipped in order to catch up.
        This value is only available for video streams.
    -->
    <!-- pliCount: not implemented (bcd testing) 
    - {{domxref("RTCInboundRtpStreamStats.pliCount", "pliCount")}}
      - : An integer specifying the number of times the receiver has notified the sender that some amount of encoded video data for one or more frames has been lost, using Picture Loss Indication (PLI) packets.
        This is only available for video streams.
    -->
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

<!-- These no longer exist - also have to remove their sub-pages. Not in spec. Not implemented AFAI,>
<!-- averageRtcpInterval -->
<!-- packetsDuplicated  -->
<!-- RTCInboundRtpStreamStats.packetsFailedDecryption -->
<!-- RTCInboundRtpStreamStats.perDscpPacketsReceived -->
<!-- RTCInboundRtpStreamStats.receiverId -->
<!-- RTCInboundRtpStreamStats.sliCount -->
<!-- RTCInboundRtpStreamStats.trackId -->
<!-- RTCInboundRtpStreamStats.trackId : marked as deprecated inline but not testable. Just deleting -->

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStats")}}
- {{domxref("RTCStatsReport")}}
