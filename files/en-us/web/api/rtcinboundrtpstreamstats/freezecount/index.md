---
title: "RTCInboundRtpStreamStats: freezeCount property"
short-title: freezeCount
slug: Web/API/RTCInboundRtpStreamStats/freezeCount
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.freezeCount
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`freezeCount`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of video freezes experienced by this receiver.

A freeze is counted if the interval between two rendered frames is equal to or greater than the larger of "three times the average duration", or "the average + 150ms".
This ensures that the delay required to increment the freeze count scales appropriately with the frame rate.

> [!NOTE]
> The value is undefined for audio streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.totalFreezesDuration", "totalFreezesDuration")}}
