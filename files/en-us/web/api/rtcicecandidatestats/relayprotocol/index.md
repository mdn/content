---
title: RTCIceCandidateStats.relayProtocol
slug: Web/API/RTCIceCandidateStats/relayProtocol
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - ICE
  - Media
  - Property
  - Protocol
  - RTCIceCandidate
  - RTCIceCandidateStats
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - relayProtocol
  - rtc
browser-compat: api.RTCIceCandidateStats.relayProtocol
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`relayProtocol`** property specifies the protocol being used
by a local {{Glossary("ICE")}} candidate to communicate with the {{Glossary("TURN")}}
server.

The ICE protocol being used by the candidate otherwise can be obtained from the
{{domxref("RTCIceCandidateStats.protocol", "protocol")}} property.

## Value

A string identifying the protocol being used by the endpoint to
communicate with the TURN server. The possible values are:

- `tcp`
  - : TCP (Transport Control Protocol) is being used to communicate with the TURN server.
- `tls`
  - : TLS (Transport Layer Security) is being used to communicate with the TURN server.
- `udp`
  - : UDP (User Datagram Protocol) is being used to communicate with the TURN server.

> **Note:** This property is only present on
> {{domxref("RTCIceCandidateStats")}} objects that represent local candidates.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
