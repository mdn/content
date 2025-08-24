---
title: "RTCInboundRtpStreamStats: framesPerSecond property"
short-title: framesPerSecond
slug: Web/API/RTCInboundRtpStreamStats/framesPerSecond
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.framesPerSecond
---

{{APIRef("WebRTC")}}

The **`framesPerSecond`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the number of frames decoded in the last second.

Note that this may be lower than the media source frame rate, which is provided in {{domxref("RTCVideoSourceStats.framesPerSecond")}}.

> [!NOTE]
> The value is undefined for audio streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
