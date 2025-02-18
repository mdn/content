---
title: "RTCOutboundRtpStreamStats: frameWidth property"
short-title: frameWidth
slug: Web/API/RTCOutboundRtpStreamStats/frameWidth
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.frameWidth
---

{{APIRef("WebRTC")}}

The **`frameWidth`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a positive integer that indicates the width of the last encoded frame, in pixels.

Note that the resolution of the encoded frame may be lower than that of the media source, which is provided in {{domxref("RTCVideoSourceStats.width")}}.

> [!NOTE]
> The value does not exist for audio, or before the first frame is encoded.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
