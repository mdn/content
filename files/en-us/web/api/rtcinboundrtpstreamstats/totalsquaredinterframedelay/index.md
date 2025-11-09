---
title: "RTCInboundRtpStreamStats: totalSquaredInterFrameDelay property"
short-title: totalSquaredInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalSquaredInterFrameDelay
---

{{APIRef("WebRTC")}}

The **`totalSquaredInterFrameDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the sum of the square of each inter-frame delay between consecutively rendered frames.
It is recorded after each frame is rendered.

The inter-frame delay variance be calculated from {{domxref("RTCInboundRtpStreamStats.totalInterFrameDelay","totalInterFrameDelay")}}, `totalSquaredInterFrameDelay`, and {{domxref("RTCInboundRtpStreamStats.framesRendered","framesRendered")}}, according to the formula: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2/ framesRendered)/framesRendered`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A positive number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
