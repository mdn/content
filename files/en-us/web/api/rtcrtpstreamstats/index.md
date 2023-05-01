---
title: RTCRtpStreamStats
slug: Web/API/RTCRtpStreamStats
page-type: web-api-interface
browser-compat: api.RTCRtpStreamStats
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary is returned by the {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}}, and {{domxref("RTCRtpReceiver.getStats()")}} methods to provide detailed statistics about WebRTC connectivity.

While the dictionary has a base set of properties that are present in each of these cases, there are also additional properties added depending on which interface the method is called on.

`RTCRtpStreamStats` is the base class for all RTP-related statistics reports.
It's based on {{domxref("RTCStats")}} and adds the following additional fields.

## Instance properties

_The `RTCRtpStreamStats` dictionary is based on {{domxref("RTCStats")}}, and inherits its properties. In addition, some or all of the following properties are available._

- {{domxref("RTCRtpStreamStats.ssrc", "ssrc")}}
  - : The 32-bit integer which identifies the source of the RTP packets this `RTCRtpStreamStats` object covers. This value is generated per the {{RFC(3550)}} specification.
- {{domxref("RTCRtpStreamStats.kind", "kind")}}
  - : A string whose value is `"audio"` if the associated {{domxref("MediaStreamTrack")}} is audio-only or `"video"` if the track contains video.
    This value will match that of the media type indicated by {{domxref("RTCCodecStats.codec")}}, as well as the track's {{domxref("MediaStreamTrack.kind", "kind")}} property. Previously called `mediaType`.
- {{domxref("RTCRtpStreamStats.transportId", "transportId")}}
  - : A string uniquely identifying the object which was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.
- {{domxref("RTCRtpStreamStats.codecId", "codecId")}}
  - : A string which uniquely identifies the object which was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this {{Glossary("RTP")}} stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Note:** This interface was called `RTCRTPStreamStats` until a specification update in the spring of 2017.
