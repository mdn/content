---
title: "RTCInboundRtpStreamStats: jitter property"
short-title: jitter
slug: Web/API/RTCInboundRtpStreamStats/jitter
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.jitter
---

{{APIRef("WebRTC")}}

The **`jitter`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the packet interarrival {{glossary("jitter")}} for this [synchronization source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc), in seconds.

The packet jitter is calculated as defined in {{RFC("3550", "", "6.4.1")}}.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
