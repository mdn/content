---
title: RTCIceCandidatePairStats.responsesSent
slug: Web/API/RTCIceCandidatePairStats/responsesSent
page-type: web-api-instance-property
tags:
  - API
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Responses
  - STUN
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - responsesSent
browser-compat: api.RTCIceCandidatePairStats.responsesSent
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`responsesSent`** property indicates the total number of
{{Glossary("STUN")}} connectivity check responses that have been sent so far on the
connection described by this pair of candidates.

## Value

An integer value indicating the number of times a response has been sent to a
{{Glossary("STUN")}} connectivity check request.

> **Note:** Since it isn't possible to tell the difference between
> connectivity check requests and consent requests, this value includes both.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
