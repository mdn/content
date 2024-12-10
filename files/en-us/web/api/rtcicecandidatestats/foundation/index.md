---
title: "RTCIceCandidateStats: foundation property"
short-title: foundation
slug: Web/API/RTCIceCandidateStats/foundation
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_local-candidate.foundation
---

{{APIRef("WebRTC")}}

The **`foundation`** property of the {{domxref("RTCIceCandidateStats")}} interface is a string that uniquely identifies the candidate across multiple transports.

It is the same for two candidates that are of the same type, are using the same transport protocol, originate from the same IP address, use ports that fall within the same range, and come from the same STUN server.

For more information see {{domxref("RTCIceCandidate.foundation")}}.

### Value

A string representing the {{domxref("RTCIceCandidate.foundation", "foundation")}} of the corresponding {{domxref("RTCIceCandidate")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
