---
title: "RTCInboundRtpStreamStats: frameWidth property"
short-title: frameWidth
slug: Web/API/RTCInboundRtpStreamStats/frameWidth
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.frameWidth
---

{{APIRef("WebRTC")}}

The **`frameWidth`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a positive integer that indicates the width of the last decoded frame, in pixels.

Note that the resolution of the encoded frame may be lower than that of the media source, which is provided in {{domxref("RTCVideoSourceStats.width")}}.

> [!NOTE]
> The value is undefined for audio streams, or before the first frame is encoded.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
