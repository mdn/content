---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_inbound-rtp
---

{{APIRef("WebRTC")}}

The **`RTCInboundRtpStreamStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report statistics related to the receiving end of an RTP stream on the local end of the {{domxref("RTCPeerConnection")}}.

The statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} or {{domxref("RTCRtpReceiver.getStats()")}} until you find a report with the [`type`](/en-US/docs/Web/API/RTCInboundRtpStreamStats/type) of `inbound-rtp`.

## Instance properties

- {{domxref("RTCInboundRtpStreamStats.audioLevel", "audioLevel")}}
  - : A number that indicates the audio level of the received track.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.bytesReceived", "bytesReceived")}}
  - : A positive integer that indicates the total number of bytes that have been received so far for this media source.
- {{domxref("RTCInboundRtpStreamStats.concealedSamples", "concealedSamples")}}
  - : A positive integer that indicates the number of samples that had to be concealed because they were in packets that were lost or arrived too late to be played out.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.concealmentEvents", "concealmentEvents")}}
  - : A positive integer that indicates the number of concealment events, where a single event is counted for all consecutive concealed samples following a non-concealed sample.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.estimatedPlayoutTimestamp", "estimatedPlayoutTimestamp")}} {{experimental_inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that indicates the estimated playout time of this receiver's track.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}
  - : A positive integer value that indicates the number of RTP Forward Error Correction (FEC) packets which have been received for this source, for which the error correction payload was discarded.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsReceived", "fecPacketsReceived")}}
  - : A positive integer value that indicates the total number of Forward Error Correction (FEC) packets received for this source.
- {{domxref("RTCInboundRtpStreamStats.frameHeight", "frameHeight")}}
  - : A positive integer that indicates the height of the last decoded frame, in pixels.
    _Undefined for audio streams and before the first frame is decoded._
- {{domxref("RTCInboundRtpStreamStats.framesAssembledFromMultiplePackets", "framesAssembledFromMultiplePackets")}} {{experimental_inline}}
  - : A positive integer that indicates the total number of correctly decoded frames for this RTP stream that consist of more than one RTP packet.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
  - : A long integer value that indicates the total number of frames of video which have been correctly decoded so far for this media source. This is the number of frames that would have been rendered if none were dropped.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.framesPerSecond", "framesPerSecond")}}
  - : A positive integer that indicates the number of frames decoded in the last second.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.framesReceived", "framesReceived")}}
  - : A positive integer that indicates the total number of complete frames received on this RTP stream.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.frameWidth", "frameWidth")}}
  - : A positive integer that indicates the width of the last decoded frame, in pixels.
    _Undefined for audio streams and before the first frame is decoded._
- {{domxref("RTCInboundRtpStreamStats.freezeCount", "freezeCount")}} {{experimental_inline}}
  - : A positive integer that indicates the total number of video freezes experienced by this receiver.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.headerBytesReceived", "headerBytesReceived")}}
  - : A positive integer that indicates the total number of RTP header and padding bytes received for this SSRC, including retransmissions.
- {{domxref("RTCInboundRtpStreamStats.insertedSamplesForDeceleration", "insertedSamplesForDeceleration")}}
  - : A positive integer that indicates the number of samples inserted to slow playout from the jitter buffer.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.jitterBufferDelay", "jitterBufferDelay")}}
  - : A number that indicates the accumulated time that all audio samples and complete video frames have spent in the jitter buffer, in seconds.
- {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}}
  - : A positive integer indicating the total number of audio samples and/or video frames that have come out of the jitter buffer.
- {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}
  - : A number that indicates the minimum delay that might be achieved given only the network characteristics such as jitter and packet loss.
- {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}
  - : A number that indicates the accumulated target jitter buffer delay.
- {{domxref("RTCInboundRtpStreamStats.keyFramesDecoded", "keyFramesDecoded")}}
  - : A positive integer that indicates the total number of key frames successfully decoded for this RTP media stream.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} that indicates the time at which the last packet was received for this source.
    The [`timestamp`](/en-US/docs/Web/API/RTCInboundRtpStreamStats/timestamp) property, on the other hand, indicates the time at which the statistics object was generated.
- {{domxref("RTCInboundRtpStreamStats.mid", "mid")}}
  - : A string that uniquely identifies the pairing of source and destination of the transceiver's stream.
    This is the value of the corresponding {{domxref("RTCRtpTransceiver.mid")}} unless that is null, in which case the statistic property is not present.
- {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}
  - : A positive integer that indicates the total number of RTP packets discarded by the jitter buffer due to late or early-arrival.
- {{domxref("RTCInboundRtpStreamStats.pauseCount", "pauseCount")}} {{experimental_inline}}
  - : A positive integer that indicates the number of video pauses experienced by this receiver.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.playoutId", "playoutId")}} {{experimental_inline}}
  - : A string that identifies the corresponding {{domxref("RTCAudioPlayoutStats")}} for an audio stream.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string that identifies the {{domxref("RTCRemoteOutboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC.
    This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCInboundRtpStreamStats.removedSamplesForAcceleration", "removedSamplesForAcceleration")}}
  - : A positive integer that indicates the number of samples removed from to speed up playout from the jitter buffer.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.silentConcealedSamples", "silentConcealedSamples")}}
  - : A positive integer that indicates the number of silent concealed samples.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.totalAssemblyTime", "totalAssemblyTime")}} {{experimental_inline}}
  - : A number that indicates the total time spent assembling successfully decoded video frames that were transported in multiple RTP packets, in seconds.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.totalAudioEnergy", "totalAudioEnergy")}}
  - : A number that represents the total audio energy of the received track over the lifetime of the stats object.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.totalDecodeTime", "totalDecodeTime")}}
  - : A number that indicates the total time spent decoding frames in this stream, in seconds.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.totalFreezesDuration", "totalFreezesDuration")}} {{experimental_inline}}
  - : A positive number that indicates the total time that the stream has spent frozen, in seconds.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.totalInterFrameDelay", "totalInterFrameDelay")}}
  - : A positive number that indicates the total time spent between consecutively rendered frames, recorded just after a frame has been rendered.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.totalPausesDuration", "totalPausesDuration")}} {{experimental_inline}}
  - : A positive number that indicates the total time that the stream has spent with paused video, in seconds.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.totalProcessingDelay", "totalProcessingDelay")}}
  - : A positive number that indicates the total time spent processing audio or video samples, in seconds.
- {{domxref("RTCInboundRtpStreamStats.totalSamplesDuration", "totalSamplesDuration")}}
  - : A positive number that indicates the total duration of all samples that have been received, in seconds.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.totalSamplesReceived", "totalSamplesReceived")}}
  - : A positive integer that indicates the total number of samples received on this stream.
    _Undefined for video streams._
- {{domxref("RTCInboundRtpStreamStats.totalSquaredInterFrameDelay", "totalSquaredInterFrameDelay")}}
  - : A positive number that indicates the sum of the square of inter-frame delays between consecutively rendered frames, recorded just after a frame has been rendered.
    _Undefined for audio streams._
- {{domxref("RTCInboundRtpStreamStats.trackIdentifier", "trackIdentifier")}}
  - : A string that provides the {{domxref("MediaStreamTrack.id", "id")}} value of the `MediaStreamTrack` associated with the inbound stream.

### Local-only measurements

These properties are computed locally, and are only available to the device receiving the media stream.
Their primary purpose is to examine the error resiliency of the connection, as they provide information about lost packets, lost frames, and how heavily compressed the data is.

- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : A number that indicates the number of times the receiver notified the sender that one or more RTP packets has been lost by sending a Negative ACKnowledgement (NACK, also called "Generic NACK") packet to the sender. This value is only available to the receiver.
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}}
  - : A positive integer that provides the sum of the QP values for every frame decoded by this RTP receiver to date on the video track described by this statistics object.
    _Valid only for video streams._

### Statistics measured at the receiver of an RTP stream

<!-- RTCReceivedRtpStreamStats -->

These statistics are measured at the receiving end of an RTP stream, regardless of whether it's local or remote.

- {{domxref("RTCInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
  - : The total number of RTP packets received for this [synchronizing source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc), including retransmissions.
- {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}
  - : The total number of RTP packets lost for this [synchronizing source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc).
    Note that this can be negative, as more packets may be received than the receiver expects.
- {{domxref("RTCInboundRtpStreamStats.jitter", "jitter")}}
  - : Packet jitter for this [synchronizing source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc), measured in seconds.

### Common RTP stream statistics

<!-- RTCRtpStreamStats -->

- {{domxref("RTCInboundRtpStreamStats.codecId", "codecId")}}
  - : A string that uniquely identifies the object which was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCInboundRtpStreamStats.kind", "kind")}}
  - : A string that indicates whether the {{domxref("MediaStreamTrack")}} associated with the stream is an audio or a video track.
- {{domxref("RTCInboundRtpStreamStats.ssrc", "ssrc")}}
  - : The 32-bit integer that identifies the source of the RTP packets this object provides.
    This value is generated per the {{RFC(3550)}} specification.
- {{domxref("RTCInboundRtpStreamStats.transportId", "transportId")}}
  - : A string that uniquely identifies the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCInboundRtpStreamStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCInboundRtpStreamStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object that indicates the time at which the sample was taken for this statistics object.
- {{domxref("RTCInboundRtpStreamStats.type", "type")}}
  - : A string with the value `"inbound-rtp"`, which indicates the type of statistics that the object contains.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
