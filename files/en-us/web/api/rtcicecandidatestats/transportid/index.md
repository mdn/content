---
title: RTCIceCandidateStats.transportId
slug: Web/API/RTCIceCandidateStats/transportId
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Connection
  - Connectivity
  - ICE
  - Network
  - Networking
  - Property
  - RTCIceCandidateStats
  - Reference
  - Statistics
  - Stats
  - Transport
  - WebRTC
  - WebRTC API
  - id
  - rtc
  - transportID
browser-compat: api.RTCIceCandidateStats.transportId
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`transportId`** property is a string that uniquely
identifies the transport that produced the {{domxref("RTCTransportStats")}} from which
information about this candidate was taken.

## Value

A string whose value uniquely identifies the transport from which any
transport-related information accumulated in the {{domxref("RTCIceCandidateStats")}} was
taken. This can be used to compare candidates that would use the same transport, for
example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
