---
title: RTCIceCandidatePairStats.firstRequestTimestamp
slug: Web/API/RTCIceCandidatePairStats/firstRequestTimestamp
tags:
  - API
  - Connectivity
  - ICE
  - Network
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - STUN
  - Statistics
  - Stats
  - Timing
  - WebRTC
  - WebRTC API
  - firstRequestTimestamp
  - timeStamp
browser-compat: api.RTCIceCandidatePairStats.firstRequestTimeStamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`firstRequestTimestamp`** specifies the time at which the
first {{Glossary("STUN")}} request was sent on the described candidate pair.

## Syntax

```js
firstRequestTimestamp = rtcIceCandidatePairStats.firstRequestTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the first
STUN request was sent on the connection described by the described pair of candidates.

You can use this value in combination with
{{domxref("RTCIceCandidatePairStats.lastRequestTimestamp", "lastRequestTimestamp")}} and
{{domxref("RTCIceCandidatePairStats.requestsSent", "requestsSent")}} to compute the
average interval between consecutive connectivity checks:

```js
avgCheckInterval = (candidatePairStats.lastRequestTimestamp -
                    candidatePairStats.firstRequestTimestamp) /
                   candidatePairStats.requestsSent;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
