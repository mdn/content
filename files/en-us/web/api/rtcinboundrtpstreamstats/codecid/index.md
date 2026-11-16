---
title: "RTCInboundRtpStreamStats: codecId property"
short-title: codecId
slug: Web/API/RTCInboundRtpStreamStats/codecId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.codecId
---

{{APIRef("WebRTC")}}

The **`codecId`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a string that uniquely identifies the object that was inspected to produce the data in the {{domxref("RTCCodecStats")}} for the {{Glossary("RTP")}} stream.

`RTCInboundRtpStreamStats` and `RTCCodecStats` objects are correlated by iterating the {{domxref("RTCStatsReport")}} to find the statistics objects where `RTCInboundRtpStreamStats.codecId` is equal to {{domxref("RTCCodecStats.id")}}.

## Value

A string that contains the {{domxref("RTCCodecStats.id","id")}} of the object that was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this RTP stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
