---
title: "RTCPeerConnectionStats: type property"
short-title: type
slug: Web/API/RTCPeerConnectionStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_peer-connection.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCPeerConnectionStats")}} dictionary is a string with the value `"peer-connection"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"peer-connection"` indicates that the statistics available in the current step are those defined in {{domxref("RTCPeerConnectionStats")}}.

## Value

A string with the value `"peer-connection"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
