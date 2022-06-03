---
title: RTCIceCandidatePairStats.remoteCandidateId
slug: Web/API/RTCIceCandidatePairStats/remoteCandidateId
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Remote
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - id
browser-compat: api.RTCIceCandidatePairStats.remoteCandidateId
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`remoteCandidateId`** is a string that uniquely identifies
the remote {{Glossary("ICE")}} candidate which was analyzed to generate the
{{domxref("RTCIceCandidateStats")}} used to compute the statistics for this pair of
candidates.

## Value

A string uniquely identifies the remote {{Glossary("ICE")}}
candidate—that is, the candidate describing a configuration for the remote peer—which is
represented by the remote end of these statistics.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
