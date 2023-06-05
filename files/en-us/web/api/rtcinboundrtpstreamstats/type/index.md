---
title: "RTCInboundRtpStreamStats: type property"
short-title: type
slug: Web/API/RTCInboundRtpStreamStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a string with the value `"inbound-rtp"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"inbound-rtp"` indicates that the statistics available in the current step are those defined in {{domxref("RTCInboundRtpStreamStats")}}.

## Value

A string with the value `"inbound-rtp"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
