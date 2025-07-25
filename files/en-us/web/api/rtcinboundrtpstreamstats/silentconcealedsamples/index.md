---
title: "RTCInboundRtpStreamStats: silentConcealedSamples property"
short-title: silentConcealedSamples
slug: Web/API/RTCInboundRtpStreamStats/silentConcealedSamples
page-type: web-api-instance-property
status:
browser-compat: api.RTCStatsReport.type_inbound-rtp.silentConcealedSamples
---

{{APIRef("WebRTC")}}

The **`silentConcealedSamples`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of silent concealed samples for the received audio track over the lifetime of this stats object.

A concealed sample is a sample that was lost or arrived too late to be played out, and therefore had to be replaced with a locally generated synthesized sample.
A silent concealed sample is one where the inserted sample is either silent or [comfort noise](https://en.wikipedia.org/wiki/Comfort_noise).

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.concealedSamples")}}
