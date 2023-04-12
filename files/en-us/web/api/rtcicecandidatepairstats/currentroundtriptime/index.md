---
title: "RTCIceCandidatePairStats: currentRoundTripTime property"
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.currentRoundTripTime
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`currentRoundTripTime`** is a floating-point value
indicating the number of seconds it takes for data to be sent by this peer to the
remote peer and back over the connection described by this pair of {{Glossary("ICE")}}
candidates.

## Syntax

```js-nolint
rtt = rtcIceCandidatePairStats.currentRoundTripTime
```

### Value

A floating-point value indicating the round-trip time, in seconds for the connection
described by the pair of candidates for which this `RTCIceCandidatePairStats`
object offers statistics.

This value is computed by observing the time that elapsed between the most recent
{{Glossary("STUN")}} request being sent to the remote peer and the response to that
request arriving. This information may come from ongoing STUN connectivity checks as
well as from consent requests made when the connection was initially being opened.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
