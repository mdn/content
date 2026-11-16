---
title: "RTCOutboundRtpStreamStats: codecId property"
short-title: codecId
slug: Web/API/RTCOutboundRtpStreamStats/codecId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.codecId
---

{{APIRef("WebRTC")}}

The **`codecId`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string that uniquely identifies the object that was inspected to produce the data in the {{domxref("RTCCodecStats")}} for the {{Glossary("RTP")}} stream.

`RTCOutboundRtpStreamStats` and `RTCCodecStats` objects are correlated by iterating the {{domxref("RTCStatsReport")}} to find the statistics objects where `RTCOutboundRtpStreamStats.codecId` is equal to {{domxref("RTCCodecStats.id")}}.

## Value

A string that contains the {{domxref("RTCCodecStats.id","id")}} of the object that was inspected to produce the {{domxref("RTCCodecStats")}} object associated with this RTP stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
