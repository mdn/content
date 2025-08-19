---
title: "RTCInboundRtpStreamStats: totalFreezesDuration property"
short-title: totalFreezesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalFreezesDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalFreezesDuration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalFreezesDuration`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the total time that the video in this stream has spent frozen, in seconds.

A freeze is counted if the interval between two rendered frames is equal or greater than the larger of "three times the average duration", or "the average + 150ms", and the time taken between frames is added to the `totalFreezesDuration`.

The average freeze duration can be calculated using `totalFreezesDuration / freezeCount`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

An positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.freezeCount", "freezeCount")}}
