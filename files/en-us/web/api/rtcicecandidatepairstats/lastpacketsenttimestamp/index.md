---
title: RTCIceCandidateStats.lastPacketSentTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Connection
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - lastPacketSentTImestamp
browser-compat: api.RTCIceCandidatePairStats.lastPacketSentTimestamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`lastPacketSentTimestamp`** indicates the time at which the
connection described by the candidate pair last sent a packet, not including
{{Glossary("STUN")}} packets.

## Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the
connection described by pair of candidates last sent a packet, STUN packets excluded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
