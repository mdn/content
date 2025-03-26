---
title: "RTCIceCandidatePairStats: lastPacketReceivedTimestamp property"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.lastPacketReceivedTimestamp
---

{{APIRef("WebRTC")}}

The **`lastPacketReceivedTimestamp`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the time at which the connection described by the candidate pair last received a packet.

{{Glossary("STUN")}} packets are not included.

## Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the connection described by pair of candidates last received a packet, STUN packets excluded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
