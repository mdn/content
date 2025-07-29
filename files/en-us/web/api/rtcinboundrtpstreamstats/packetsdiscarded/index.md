---
title: "RTCInboundRtpStreamStats: packetsDiscarded property"
short-title: packetsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/packetsDiscarded
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.packetsDiscarded
---

{{APIRef("WebRTC")}}

The **`packetsDiscarded`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the cumulative number of {{Glossary("RTP")}} packets that have been discarded by the {{glossary("jitter","jitter buffer")}} due to late or early-arrival, and are hence not played out.

The value does not include packets that are discarded to due to packet duplication.

## Value

An positive integer value.

This is calculated as defined in {{rfc("7002",,"3.2")}} (and appendix A.a.)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRemoteInboundRtpStreamStats.packetsLost", "packetsLost")}}
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
