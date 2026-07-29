---
title: "RTCInboundRtpStreamStats: framesReceived property"
short-title: framesReceived
slug: Web/API/RTCInboundRtpStreamStats/framesReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.framesReceived
---

{{APIRef("WebRTC")}}

The **`framesReceived`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of complete frames received on this RTP stream over its lifetime.

Note that this may be lower than the total number of media source frames, which is provided in {{domxref("RTCVideoSourceStats.frames")}}.

> [!NOTE]
> The value is undefined for audio streams.

## Value

A positive number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
