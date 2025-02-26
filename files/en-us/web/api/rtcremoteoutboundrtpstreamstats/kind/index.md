---
title: "RTCRemoteOutboundRtpStreamStats: kind property"
short-title: kind
slug: Web/API/RTCRemoteOutboundRtpStreamStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-outbound-rtp.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary is a string indicating whether the described {{Glossary("RTP")}} stream contains audio or video media.

This string will always be the same as the {{domxref("MediaStreamTrack.kind", "kind")}} of the {{domxref("MediaStreamTrack")}} object carried by the stream.
It will also match the statistics object's {{domxref("RTCCodecStats.codec")}} property's media type.

## Value

The kinds is always one of:

- `"audio"`
  - : The stream contains audio media.
- `"video"`
  - : The stream contains video media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
