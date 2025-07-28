---
title: "RTCInboundRtpStreamStats: removedSamplesForAcceleration property"
short-title: removedSamplesForAcceleration
slug: Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.removedSamplesForAcceleration
---

{{APIRef("WebRTC")}}

The **`removedSamplesForAcceleration`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of samples that have been removed from the output stream to increase the rate that the received samples are played out, as the jitter buffer starts to overfill.

This is the absolute value of the difference between the number of samples received and the number of received samples that are played out.
Note that it is only iterated when playout of received samples is sped up (not when playout of samples is slowed).

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
