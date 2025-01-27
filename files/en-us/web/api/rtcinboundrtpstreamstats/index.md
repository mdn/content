---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_inbound-rtp
---

{{APIRef("WebRTC")}}

The **`RTCInboundRtpStreamStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report statistics related to the receiving end of an RTP stream on the local end of the {{domxref("RTCPeerConnection")}}.

The statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} or {{domxref("RTCRtpReceiver.getStats()")}} until you find a report with the [`type`](#type) of `inbound-rtp`.

## Instance properties

- {{domxref("RTCInboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : A floating-point value indicating the average {{Glossary("RTCP")}} interval between two consecutive compound RTCP packets.
- {{domxref("RTCInboundRtpStreamStats.bytesReceived", "bytesReceived")}}
  - : A 64-bit integer which indicates the total number of bytes that have been received so far for this media source.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}
  - : An integer value indicating the number of RTP Forward Error Correction (FEC) packets which have been received for this source, for which the error correction payload was discarded.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsReceived", "fecPacketsReceived")}}
  - : An integer value indicating the total number of RTP FEC packets received for this source. This counter may also be incremented when FEC packets arrive in-band along with media content; this can happen with Opus, for example.
- {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
  - : A long integer value indicating the total number of frames of video which have been correctly decoded so far for this media source. This is the number of frames that would have been rendered if none were dropped. _Only valid for video streams._
- {{domxref("RTCInboundRtpStreamStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the last packet was received for this source.
    The [`timestamp`](#timestamp) property, on the other hand, indicates the time at which the statistics object was generated.
- {{domxref("RTCInboundRtpStreamStats.mid", "mid")}}
  - : A string that uniquely identifies the pairing of source and destination of the transceiver's stream.
    This is the value of the corresponding {{domxref("RTCRtpTransceiver.mid")}} unless that is null, in which case the statistic property is not present.
- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : An integer value indicating the total number of Negative ACKnowledgement (NACK) packets this receiver has sent.
- {{domxref("RTCInboundRtpStreamStats.packetsDuplicated", "packetsDuplicated")}}
  - : An integer value indicating the total number of packets that have been discarded because they were duplicates. These packets are not counted by {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}.
- {{domxref("RTCInboundRtpStreamStats.packetsFailedDecryption", "packetsFailedDecryption")}}
  - : An integer totaling the number of RTP packets that could not be decrypted. These packets are not counted by {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}.
- {{domxref("RTCInboundRtpStreamStats.perDscpPacketsReceived", "perDscpPacketsReceived")}}
  - : A record of key-value pairs with strings as the keys mapped to 32-bit integer values, each indicating the total number of packets this receiver has received on this RTP stream from this source for each Differentiated Services Code Point (DSCP).
- {{domxref("RTCInboundRtpStreamStats.receiverId", "receiverId")}}
  - : A string indicating which identifies the {{domxref("RTCAudioReceiverStats")}} or {{domxref("RTCVideoReceiverStats")}} object associated with the stream's receiver. This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}}
  - : A string which identifies the {{domxref("RTCRemoteOutboundRtpStreamStats")}} object that provides statistics for the remote peer for this same SSRC. This ID is stable across multiple calls to `getStats()`.
- {{domxref("RTCInboundRtpStreamStats.sliCount", "sliCount")}}
  - : An integer indicating the number of times the receiver sent a Slice Loss Indication (SLI) frame to the sender to tell it that one or more consecutive (in terms of scan order) video macroblocks have been lost or corrupted. Available only for video streams.
- `trackIdentifier`
  - : A string that contains the {{domxref("MediaStreamTrack.id", "id")}} value of the `MediaStreamTrack` associated with the inbound stream.
- {{domxref("RTCInboundRtpStreamStats.trackId", "trackId")}} {{deprecated_inline}}
  - : A string which identifies the statistics object representing the receiving track; this object is one of two types: {{domxref("RTCReceiverAudioTrackAttachmentStats")}} or {{domxref("RTCReceiverVideoTrackAttachmentStats")}}. This ID is stable across multiple calls to `getStats()`.

### Statistics measured at the receiver of an RTP stream

<!-- RTCReceivedRtpStreamStats -->

These statistics are measured at the receiving end of an RTP stream, regardless of whether it's local or remote.

- {{domxref("RTCInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
  - : The total number of RTP packets received for this synchronizing source, including retransmissions.
- {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}
  - : The total number of RTP packets lost for this synchronizing source.
    Note that this can be negative if more packets are received than sent.
- {{domxref("RTCInboundRtpStreamStats.jitter", "jitter")}}
  - : Packet jitter for this synchronizing source, measured in seconds.

### Local-only measurements

These properties are computed locally, and are only available to the device receiving the media stream.
Their primary purpose is to examine the error resiliency of the connection, as they provide information about lost packets, lost frames, and how heavily compressed the data is.

- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : The number of times the receiver notified the sender that one or more RTP packets has been lost by sending a Negative ACKnowledgement (NACK, also called "Generic NACK") packet to the sender. This value is only available to the receiver.
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}}
  - : A 64-bit value containing the sum of the QP values for every frame decoded by this RTP receiver to date on the video track described by this statistics object.
    You can approximate the average QP per frame by dividing this value by {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}, keeping in mind that codecs often vary the quantizer values even within frames.
    Also keep in mind that the values of QP can vary from codec to codec, so this value is only potentially useful when compared against the same codec.
    _Valid only for video streams._

### Common RTP stream statistics

<!-- RTCRtpStreamStats -->

- {{domxref("RTCInboundRtpStreamStats.codecId", "codecId")}}
  - : A string which uniquely identifies the object which was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCInboundRtpStreamStats.kind", "kind")}}
  - : A string indicating whether the {{domxref("MediaStreamTrack")}} associated with the stream is an audio or a video track.
- {{domxref("RTCInboundRtpStreamStats.ssrc", "ssrc")}}
  - : The 32-bit integer which identifies the source of the RTP packets this object provides.
    This value is generated per the {{RFC(3550)}} specification.
- {{domxref("RTCInboundRtpStreamStats.transportId", "transportId")}}
  - : A string uniquely identifying the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCInboundRtpStreamStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCInboundRtpStreamStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCInboundRtpStreamStats.type", "type")}}
  - : A string with the value `"inbound-rtp"`, indicating the type of statistics that the object contains.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
