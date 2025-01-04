---
title: "RTCIceCandidatePairStats: responsesSent property"
short-title: responsesSent
slug: Web/API/RTCIceCandidatePairStats/responsesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.responsesSent
---

{{APIRef("WebRTC")}}

The **`responsesSent`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of {{Glossary("STUN")}} connectivity check responses that have been sent so far on the connection described by this pair of candidates.

## Value

An integer value indicating the number of times a response has been sent to a {{Glossary("STUN")}} connectivity check request.

> [!NOTE]
> Since it isn't possible to tell the difference between connectivity check requests and consent requests, this value includes both.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
