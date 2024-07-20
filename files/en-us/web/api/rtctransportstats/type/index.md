---
title: "RTCTransportStats: type property"
short-title: type
slug: Web/API/RTCTransportStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCTransportStats")}} dictionary is a string with the value `"transport"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"transport"` indicates that the statistics available in the current step are those defined in {{domxref("RTCTransportStats")}}.

## Value

A string with the value `"transport"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
