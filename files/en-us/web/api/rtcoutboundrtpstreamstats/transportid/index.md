---
title: "RTCOutboundRtpStreamStats: transportId property"
short-title: transportId
slug: Web/API/RTCOutboundRtpStreamStats/transportId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.transportId
---

{{APIRef("WebRTC")}}

The **`transportId`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string that uniquely identifies the associated {{domxref("RTCTransportStats")}} statistics object for this RTP stream's underlying transport.

`RTCOutboundRtpStreamStats` and `RTCTransportStats` objects are correlated by iterating the {{domxref("RTCStatsReport")}} to find the statistics objects where `RTCOutboundRtpStreamStats.transportId` is equal to {{domxref("RTCTransportStats.id")}}.

## Value

A string that contains the {{domxref("RTCTransportStats.id","id")}} of the object that was inspected to produce the {{domxref("RTCTransportStats")}} object associated with this RTP stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
