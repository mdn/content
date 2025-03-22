---
title: "RTCOutboundRtpStreamStats: keyFramesEncoded property"
short-title: keyFramesEncoded
slug: Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.keyFramesEncoded
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`keyFramesEncoded`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of key frames successfully encoded in this RTP media stream.
This includes, for example, key frames in VP8 ({{rfc("6386")}}) or IDR-frames in H.264 ({{rfc("6184")}}).

Note that the number of delta frames is calculated by subtracting this value from the total number of frames ({{domxref("RTCOutboundRtpStreamStats.framesEncoded","framesEncoded")}} - `keyFramesEncoded`).

> [!NOTE]
> The value does not exist for audio.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
