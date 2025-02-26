---
title: "RTCIceCandidateStats: type property"
short-title: type
slug: Web/API/RTCIceCandidateStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_local-candidate.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCIceCandidateStats")}} dictionary is a string with the value `"local-candidate"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"local-candidate"` indicates that the statistics available in the current step are those defined in {{domxref("RTCIceCandidateStats")}}.

## Value

A string with the value `"local-candidate"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
