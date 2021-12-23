---
title: RTCIceCandidateStats.protocol
slug: Web/API/RTCIceCandidateStats/protocol
tags:
  - API
  - Candidate
  - ICE
  - Media
  - Property
  - Protocol
  - RTCIceCandidateStats
  - Reference
  - Statistics
  - Stats
  - Transport
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidateStats.protocol
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`protocol`**  property specifies the protocol the specified
candidate would use for communication with the remote peer.

## Syntax

```js
protocol = rtcIceCandidateStats.protocol;
```

### Value

The value is one of the following string:

- `tcp`
  - : The candidate, if selected, would use {{Glossary("TCP")}} as the transport protocol for its data. The {{domxref("RTCIceCandidate.tcpType", "tcpType")}} property provides additional information about the kind of TCP candidate represented by the object.
- `udp`
  - : The candidate will use the {{Glossary("UDP")}} transport protocol for its data. This is the preferred protocol for media interactions because of its better performance profile.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
