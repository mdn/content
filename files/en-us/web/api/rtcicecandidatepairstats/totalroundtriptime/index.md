---
title: RTCIceCandidatePairStats.totalRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/totalRoundTripTime
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - Time
  - WebRTC
  - WebRTC API
  - round-trip
  - round trip time
  - rtt
  - totalRoundTripTime
browser-compat: api.RTCIceCandidatePairStats.totalRoundTripTime
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`totalRoundTripTime`** property is the total time that has
elapsed between sending {{Glossary("STUN")}} requests and receiving the responses, for
all such requests that have been made so far on the pair of candidates described by
this `RTCIceCandidatePairStats` object. This value includes both
connectivity check and consent check requests.

## Value

This floating-point value indicates the total number of seconds which have elapsed
between sending out STUN connectivity and consent check requests and receiving their
responses, for all such requests made so far on the connection described by this
candidate pair.

You can calculate the average round-trip time (RTT) by dividing this value by the value
of the {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}}
property:

```js
rtt = rtcIceCandidatePairStats.totalRoundTripTime /
        rtcIceCandidatePairStats.responsesReceived;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
