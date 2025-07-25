---
title: "RTCInboundRtpStreamStats: concealmentEvents property"
short-title: concealmentEvents
slug: Web/API/RTCInboundRtpStreamStats/concealmentEvents
page-type: web-api-instance-property
status:
browser-compat: api.RTCStatsReport.type_inbound-rtp.concealmentEvents
---

{{APIRef("WebRTC")}}

The **`concealmentEvents`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of concealment events for the received audio track over the lifetime of this stats object.

A concealed sample is a sample that was lost or arrived too late to be played out, and therefore had to be replaced with a locally generated synthesized sample.
Any number of consecutive concealed samples following a non-concealed sample comprise a single concealment event.
The value in this property will therefore be less than or equal to {{domxref("RTCInboundRtpStreamStats.concealedSamples", "concealedSamples")}}, which counts every sample.

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
