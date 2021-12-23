---
title: RTCIceCandidateStats.lastResponseTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastResponseTimestamp
tags:
  - API
  - Connection
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Response
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - lastResponseTimestamp
  - timeStamp
browser-compat: api.RTCIceCandidatePairStats.lastResponseTimestamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`lastResponseTimestamp`** indicates the time at which the
last {{Glossary("STUN")}} response was received on the described candidate
pair.

## Syntax

```js
lastResponseTimestamp = rtcIceCandidatePairStats.lastResponseTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the most
recent STUN response was received on the connection defined by the described pair of
candidates.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
