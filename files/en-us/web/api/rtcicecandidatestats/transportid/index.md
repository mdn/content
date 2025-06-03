---
title: "RTCIceCandidateStats: transportId property"
short-title: transportId
slug: Web/API/RTCIceCandidateStats/transportId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_local-candidate.transportId
---

{{APIRef("WebRTC")}}

The **`transportId`** property of the {{domxref("RTCIceCandidateStats")}} dictionary is a string that uniquely identifies the transport that produced the {{domxref("RTCTransportStats")}} from which information about this candidate was taken.

This can be used, for example, to compare candidates that use the same transport.

## Value

A string whose value uniquely identifies the transport from which any transport-related information accumulated in the {{domxref("RTCIceCandidateStats")}} was taken.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
