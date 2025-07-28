---
title: "RTCInboundRtpStreamStats: concealedSamples property"
short-title: concealedSamples
slug: Web/API/RTCInboundRtpStreamStats/concealedSamples
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.concealedSamples
---

{{APIRef("WebRTC")}}

The **`concealedSamples`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of concealed samples for the received audio track over the lifetime of this stats object.

A concealed sample is a sample that was lost or arrived too late to be played out, and therefore had to be replaced with a locally generated synthesized sample.
Note that lost samples are reported in {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}, while late packets are reported in {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}.

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.silentConcealedSamples")}}
