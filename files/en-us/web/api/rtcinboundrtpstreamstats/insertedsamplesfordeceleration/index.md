---
title: "RTCInboundRtpStreamStats: insertedSamplesForDeceleration property"
short-title: insertedSamplesForDeceleration
slug: Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.insertedSamplesForDeceleration
---

{{APIRef("WebRTC")}}

The **`insertedSamplesForDeceleration`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of samples that have been inserted into the output stream to slow down the speed that the received samples are played out, as the jitter buffer empties.

This is the absolute value of the difference between the number of samples received and the number of received samples that are played out.
Note that it is only iterated when playout of received samples is slowed down (not when playout of samples is increased).

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
