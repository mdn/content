---
title: RTCIceCandidatePairStats.lastRequestTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastRequestTimestamp
tags:
  - API
  - Candidate
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - STUN
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - lastRequestTimestamp
  - timeStamp
browser-compat: api.RTCIceCandidatePairStats.lastRequestTimestamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`lastRequestTimestamp`** indicates the time at which the
most recent {{Glossary("STUN")}} request was sent on the described candidate
pair.

## Syntax

```js
lastRequestTimestamp = rtcIceCandidatePairStats.lastRequestTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} object indicating the timestamp at which the last
(most recent) STUN request was sent on the connection indicated by the described pair of
candidates.

You can use this value in combination with
{{domxref("RTCIceCandidatePairStats.firstRequestTimestamp", "firstRequestTimestamp")}}
and {{domxref("RTCIceCandidatePairStats.requestsSent", "requestsSent")}} to compute the
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
