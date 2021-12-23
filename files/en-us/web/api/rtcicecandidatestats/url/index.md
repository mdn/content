---
title: RTCIceCandidateStats.url
slug: Web/API/RTCIceCandidateStats/url
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
  - URL
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCIceCandidateStats.url
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`url`** property specifies the URL of the
{{Glossary("ICE")}} server from which the described candidate was obtained. This
property is _only_ available for local candidates.

## Syntax

```js
url = rtcIceCandidateStats.url;
```

### Value

A {{domxref("DOMString")}} specifying the URL of the ICE server from which the
candidate described by the `RTCIceCandidateStats` was obtained. This is the
same URL that would be received in the {{event("icecandidate")}} event's
{{domxref("RTCPeerConnectionIceEvent.url", "url")}} property.

> **Note:** This property does not exist for remote candidates.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
