---
title: "RTCIceCandidatePairStats: lastPacketReceivedTimestamp property"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.lastPacketReceivedTimestamp
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`lastPacketReceivedTimestamp`** indicates the time at which
the connection described by the candidate pair last received a packet.
{{Glossary("STUN")}} packets are not included.

## Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the
connection described by pair of candidates last received a packet, STUN packets
excluded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
