---
title: "RTCIceCandidatePairStats: requestsReceived property"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.requestsReceived
---

{{APIRef("WebRTC")}}

The **`requestsReceived`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of {{Glossary("STUN")}} connectivity check requests that have been received so far on the connection described by this pairing of candidates.

## Value

An integer value which specifies the number of STUN connectivity and/or consent requests that have been received to date on the connection described by this pair of {{Glossary("ICE")}} candidates.

Because there's no way to tell the difference between requests made to check connectivity and requests made to check consent, the returned figure includes both.

> [!NOTE]
> The reported number of requests includes retransmissions.
> If a request had to be repeated due to network issues, it will be counted multiple times here.
> This differs from {{domxref("RTCIceCandidatePairStats.requestsSent", "requestsSent")}}, which _does not_ include retransmissions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
