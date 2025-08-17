---
title: "RTCInboundRtpStreamStats: totalPausesDuration property"
short-title: totalPausesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalPausesDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalPausesDuration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalPausesDuration`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the total time that the video in this stream has spent paused, in seconds

A pause is counted when a new frame is rendered more than 5 seconds after the last frame was rendered, and the time taken between frames is added to the `totalPausesDuration`.

The average pause duration can be calculated using `totalPausesDuration / pauseCount`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

An positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.pauseCount", "pauseCount")}}
