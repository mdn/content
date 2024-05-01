---
title: "RTCRemoteOutboundRtpStreamStats: kind property"
short-title: kind
slug: Web/API/RTCRemoteOutboundRtpStreamStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-outbound-rtp.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary is a string indicating whether the described {{Glossary("RTP")}} stream contains audio or video media.

## Value

The kinds is always one of:

- `"audio"`
  - : The track contains audio media.
- `"video"`
  - : The track contains video media.

This string will always be the same as the one provided by the associated {{domxref("MediaStreamTrack")}} object's {{domxref("MediaStreamTrack.kind", "kind")}} property.
It will also match the statistics object's {{domxref("RTCCodecStats.codec")}} property's media type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
