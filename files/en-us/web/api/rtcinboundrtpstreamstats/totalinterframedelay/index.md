---
title: "RTCInboundRtpStreamStats: totalInterFrameDelay property"
short-title: totalInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalInterFrameDelay
---

{{APIRef("WebRTC")}}

The **`totalInterFrameDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total accumulated time between consecutively rendered frames, in seconds.
It is recorded after each frame is rendered.

The inter-frame delay variance can be calculated from `totalInterFrameDelay`, {{domxref("RTCInboundRtpStreamStats.totalSquaredInterFrameDelay","totalSquaredInterFrameDelay")}} , and {{domxref("RTCInboundRtpStreamStats.framesRendered","framesRendered")}} according to the formula: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2/ framesRendered)/framesRendered`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
