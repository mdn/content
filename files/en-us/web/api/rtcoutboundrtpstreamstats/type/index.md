---
title: "RTCOutboundRtpStreamStats: type property"
short-title: type
slug: Web/API/RTCOutboundRtpStreamStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string with the value `"outbound-rtp"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"outbound-rtp"` indicates that the statistics available in the current step are those defined in {{domxref("RTCOutboundRtpStreamStats")}}.

## Value

A string with the value `"outbound-rtpp"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
