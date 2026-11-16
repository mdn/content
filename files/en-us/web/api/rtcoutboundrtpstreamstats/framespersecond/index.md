---
title: "RTCOutboundRtpStreamStats: framesPerSecond property"
short-title: framesPerSecond
slug: Web/API/RTCOutboundRtpStreamStats/framesPerSecond
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.framesPerSecond
---

{{APIRef("WebRTC")}}

The **`framesPerSecond`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the number of encoded frames sent in the last second.

Note that this may be lower than the media source frame rate, which is provided in {{domxref("RTCVideoSourceStats.framesPerSecond")}}.

> [!NOTE]
> The value does not exist for audio, or before the first second of encoding.

## Value

A positive number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
