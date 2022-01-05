---
title: RTCIceCandidateStats.mozLocalTransport
slug: Web/API/RTCIceCandidateStats/mozLocalTransport
tags:
  - API
  - Candidate
  - ICE
  - Media
  - Non-standard
  - Deprecated
  - Property
  - Protocol
  - RTCIceCandidate
  - RTCIceCandidateStats
  - Relay
  - Statistics
  - Stats
  - Transport
  - WebRTC
  - WebRTC API
  - mozLocalTransport
---
{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

The non-standard Mozilla extension to the {{domxref("RTCIceCandidateStats")}}
dictionary, **`mozLocalTransport`**, has been supplanted by the
standard {{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} property.

## Syntax

Instead of using `mozLocalTransport`, you should use code like this:

```js
localTransport = rtcIceCandidateStats.relayProtocol;
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat("api.RTCIceCandidateStats.relayProtocol")}}
