---
title: "RTCInboundRtpStreamStats: keyFramesDecoded property"
short-title: keyFramesDecoded
slug: Web/API/RTCInboundRtpStreamStats/keyFramesDecoded
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.keyFramesDecoded
---

{{APIRef("WebRTC")}}

The **`keyFramesDecoded`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary represents the total number of key frames successfully decoded in this RTP media stream.
This includes, for example, key frames in VP8 ({{rfc("6386")}}) or IDR-frames in H.264 ({{rfc("6184")}}).

Note that the number of delta frames is calculated by subtracting this value from the total number of frames ({{domxref("RTCInboundRtpStreamStats.framesDecoded","framesDecoded")}} - `keyFramesEncoded`).

> [!NOTE]
> The property is undefined for audio streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
