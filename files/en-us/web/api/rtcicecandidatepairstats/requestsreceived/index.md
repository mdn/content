---
title: RTCIceCandidatePairStats.requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
page-type: web-api-instance-property
tags:
  - API
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - request
  - requestsReceived
browser-compat: api.RTCIceCandidatePairStats.requestsReceived
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`requestsReceived`** property indicates the total number of
{{Glossary("STUN")}} connectivity check requests that have been received so far on the
connection described by this pairing of candidates.

## Value

An integer value which specifies the number of STUN connectivity and/or consent
requests that have been received to date on the connection described by this pair of
{{Glossary("ICE")}} candidates.

Because there's no way to tell the difference between requests made to check
connectivity and requests made to check consent, the returned figure includes both.

> **Note:** The reported number of requests includes retransmissions. If a
> request had to be repeated due to network issues, it will be counted multiple times
> here. This differs from {{domxref("RTCIceCandidatePairStats.requestsSent",
    "requestsSent")}}, which _does not_ include retransmisions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
