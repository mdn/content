---
title: "RTCOutboundRtpStreamStats: framesSent property"
short-title: framesSent
slug: Web/API/RTCOutboundRtpStreamStats/framesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.framesSent
---

{{APIRef("WebRTC")}}

The **`framesSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the total number of encoded frames sent on this RTP stream over its lifetime.

Note that this may be lower than the total number of media source frames, which is provided in {{domxref("RTCVideoSourceStats.frames")}}.

> [!NOTE]
> The value does not exist for audio.

## Value

A positive number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
