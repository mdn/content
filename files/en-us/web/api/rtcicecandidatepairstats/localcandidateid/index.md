---
title: "RTCIceCandidateStats: localCandidateId property"
short-title: localCandidateId
slug: Web/API/RTCIceCandidatePairStats/localCandidateId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.localCandidateId
---

{{APIRef("WebRTC")}}

The **`localCandidateId`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary is a string that uniquely identifies the local {{Glossary("ICE")}} candidate which was analyzed to generate the {{domxref("RTCIceCandidateStats")}} used to compute the statistics for this pair of candidates.

## Value

A string giving a unique identifier for the local {{domxref("RTCIceCandidate")}} for the connection described by this `RTCIceCandidatePairStats` object.

This candidate is the source of one of the two {{domxref("RTCIceCandidateStats")}} objects that were used to compute the contents of this {{domxref("RTCIceCandidatePairStats")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
