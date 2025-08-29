---
title: "RTCInboundRtpStreamStats: pauseCount property"
short-title: pauseCount
slug: Web/API/RTCInboundRtpStreamStats/pauseCount
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.pauseCount
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`pauseCount`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the total number of pauses experienced by this receiver.

A pause is counted when a new frame is rendered more than 5 seconds after the last frame was rendered.

The average pause duration can be calculated using `totalPausesDuration / pauseCount`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

An positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.totalPausesDuration", "totalPausesDuration")}}
