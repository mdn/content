---
title: "RTCIceCandidatePairStats: type property"
short-title: type
slug: Web/API/RTCIceCandidatePairStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary is a string with the value `"candidate-pair"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"candidate-pair"` indicates that the statistics available in the current step are those defined in {{domxref("RTCIceCandidatePairStats")}}.

## Value

A string with the value `"candidate-pair"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
