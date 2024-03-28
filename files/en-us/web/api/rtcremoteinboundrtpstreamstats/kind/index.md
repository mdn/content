---
title: "RTCRemoteInboundRtpStreamStats: kind property"
short-title: kind
slug: Web/API/RTCRemoteInboundRtpStreamStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary is a string indicating whether the described {{Glossary("RTP")}} stream contains audio or video media.

This string will always be the same as the {{domxref("MediaStreamTrack.kind", "kind")}} of the {{domxref("MediaStreamTrack")}} object carried by the stream.
It will also match the media type of the codec associated with this statistics objects (i.e. the MIME type of the associated codec's {{domxref("RTCCodecStats.mimeType")}} property).

## Value

The kind is always one of:

- `"audio"`
  - : The stream contains audio media.
- `"video"`
  - : The stream contains video media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
