---
title: RTCIceCandidatePairStats.packetsReceived
slug: Web/API/RTCIceCandidatePairStats/packetsReceived
page-type: web-api-instance-property
tags:
  - API
  - Communication
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - packetsReceived
browser-compat: api.RTCIceCandidatePairStats.packetsReceived
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`packetsReceived`** property indicates the total number of
packets of any kind that have been received on the connection described by the pair of
candidates.

The number of packets sent to date on the connection can be obtained using
{{domxref("RTCIceCandidatePairStats.packetsSent", "packetsSent")}}.

## Value

An integer value indicating the total number of packets, of any kind, which have been
received on the connection described by the two candidates comprising this pair.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
