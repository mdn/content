---
title: "RTCIceCandidateStats: lastPacketSentTimestamp property"
short-title: lastPacketSentTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.lastPacketSentTimestamp
---

{{APIRef("WebRTC")}}

The **`lastPacketSentTimestamp`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the time at which the connection described by the candidate pair last sent a packet, not including {{Glossary("STUN")}} packets.

## Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the connection described by pair of candidates last sent a packet, STUN packets excluded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
