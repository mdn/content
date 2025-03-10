---
title: "RTCIceCandidatePairStats: requestsSent property"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.requestsSent
---

{{APIRef("WebRTC")}}

The **`requestsSent`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of {{Glossary("STUN")}} connectivity check requests that have been sent so far on the connection described by this pair of candidates.

## Value

An integer value which specifies the number of STUN connectivity requests that have been sent to date on the connection described by this pair of {{Glossary("ICE")}} candidates.

> [!NOTE]
> The reported number of requests _does not_ include retransmissions.
> If a request had to be repeated due to network issues, it will be counted multiple times here.
> This differs from {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}}, which _does_ include retransmissions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
