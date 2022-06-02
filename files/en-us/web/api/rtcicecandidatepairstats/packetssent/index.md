---
title: RTCIceCandidatePairStats.packetsSent
slug: Web/API/RTCIceCandidatePairStats/packetsSent
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Connectivity
  - ICE
  - Networking
  - Packets
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Sent
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidatePairStats.packetsSent
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`packetsSent`** property indicates the total number of
packets which have been sent on the connection described by the pair of
candidates.

The number of packets received to date on the connection can be obtained using
{{domxref("RTCIceCandidatePairStats.packetsReceived", "packetsReceived")}}.

## Value

An integer value indicating the total number of packets, of any kind, which have been
sent on the connection described by the two candidates comprising this pair.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
