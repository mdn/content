---
title: RTCRtpStreamStats
slug: Web/API/RTCRtpStreamStats
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - Interface
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCRtpStreamStats
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary is returned by the {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}}, and {{domxref("RTCRtpReceiver.getStats()")}} methods to provide detailed statistics about WebRTC connectivity.

While the dictionary has a base set of properties that are present in each of these cases, there are also additional properties added depending on which interface the method is called on.

`RTCRtpStreamStats` is the base class for all RTP-related statistics reports. It's based on [RTCStats](#rtcstats) and adds the following additional fields.

> **Note:** This interface was called `RTCRTPStreamStats` until a specification update in the spring of 2017. Check the [Browser compatibility](#browser_compatibility) table to know if and when the name change was implemented in specific browsers.

## Properties

_The `RTCRtpStreamStats` dictionary is based on {{domxref("RTCStats")}}, and inherits its properties. In addition, some or all of the following properties are available._

### Standard fields included for all media types

- {{domxref("RTCRtpStreamStats.codecId", "codecId")}}
  - : A string which uniquely identifies the object which was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.
- {{domxref("RTCRtpStreamStats.kind", "kind")}}
  - : A string whose value is `"audio"` if the associated {{domxref("MediaStreamTrack")}} is audio-only or `"video"` if the track contains video. This value will match that of the media type indicated by {{domxref("RTCCodecStats.codec")}}, as well as the track's {{domxref("MediaStreamTrack.kind", "kind")}} property. Previously called `mediaType`.
- {{domxref("RTCRtpStreamStats.ssrc", "ssrc")}}
  - : The 32-bit integer which identifies the source of the RTP packets this `RTCRtpStreamStats` object covers. This value is generated per the {{RFC(3550)}} specification.
- {{domxref("RTCRtpStreamStats.trackId", "trackId")}}
  - : A string which uniquely identifies the {{domxref("RTCMediaStreamTrackStats")}} object representing the associated {{domxref("MediaStreamTrack")}}. This is _not_ the same as the value of {{domxref("MediaStreamTrack.id")}}.
- {{domxref("RTCRtpStreamStats.transportId", "transportId")}}
  - : A string uniquely identifying the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

#### Obsolete fields

- {{domxref("RTCRtpStreamStats.kind", "mediaType")}} {{Deprecated_Inline}}
  - : Renamed to {{domxref("RTCRtpStreamStats.kind", "kind")}} in the specification in February 2018. See {{SectionOnPage("/en-US/docs/Web/API/RTCRtpStreamStats/kind", "Browser Compatibility", "code")}} to determine when browsers made the transition.

### Local-only measurements

These properties are computed locally, and are only available to the device receiving the media stream. Their primary purpose is to examine the error resiliency of the connection, as they provide information about lost packets, lost frames, and how heavily compressed the data is.

- {{domxref("RTCRtpStreamStats.firCount", "firCount")}}
  - : A count of the total number of Full Intra Request (FIR) packets received by the sender. This statistic is only available to the device which is receiving the stream and is only available for video tracks. A FIR packet is sent by the receiving end of the stream when it falls behind or has lost packets and is unable to continue decoding the stream; the sending end of the stream receives the FIR packet and responds by sending a full frame instead of a delta frame, thereby letting the receiver "catch up." The higher this number is, the more often a problem of this nature arose, which can be a sign of network congestion or an overburdened receiving device.
- {{domxref("RTCRtpStreamStats.nackCount", "nackCount")}}
  - : The number of times the receiver notified the sender that one or more RTP packets has been lost by sending a Negative ACKnowledgement (NACK, also called "Generic NACK") packet to the sender. This value is only available to the receiver.
- {{domxref("RTCRtpStreamStats.pliCount", "pliCount")}}
  - : The number of times the receiving end of the stream sent a Picture Loss Indication (PLI) packet to the sender, indicating that it has lost some amount of encoded video data for one or more frames. Only the receiver has this value, and it's only valid for video tracks.
- {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}}
  - : The sum of the Quantization Parameter (QP) values associated with every frame received to date on the video track described by this `RTCRtpStreamStats` object. In general, the higher this number is, the more heavily compressed the video track was. Combined with {{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} or {{domxref("RTCSentRtpStreamStats.framesEncoded")}}, you can approximate the average QP over those frames, keeping in mind that codecs often vary the quantizer values even within frames. Also keep in mind that the values of QP can vary from codec to codec, so this value is only potentially useful when compared against the same codec.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
