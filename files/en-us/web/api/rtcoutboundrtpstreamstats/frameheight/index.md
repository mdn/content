---
title: "RTCOutboundRtpStreamStats: frameHeight property"
short-title: frameHeight
slug: Web/API/RTCOutboundRtpStreamStats/frameHeight
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.frameHeight
---

{{APIRef("WebRTC")}}

The **`frameHeight`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a positive integer that indicates the height of the last encoded frame, in pixels.

Note that the resolution of the encoded frame may be lower than that of the media source, which is provided in {{domxref("RTCVideoSourceStats.height")}}.

> [!NOTE]
> The property is undefined for audio streams, and before the first frame is encoded.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
