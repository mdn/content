---
title: RTCIceCandidatePairStats.retransmissionsReceived
slug: Web/API/RTCIceCandidatePairStats/retransmissionsReceived
tags:
  - API
  - Connectivity
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - Received
  - Reference
  - Retransmissions
  - STUN
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - retransmissionsReceived
browser-compat: api.RTCIceCandidatePairStats.retransmissionsReceived
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`retransmissionsReceived`** property indicates the total
number of {{Glossary("STUN")}} connectivity check request retransmissions that have
been received so far on the pair of candidates.

The number of retransmissions that have been sent on the connection can be
found in {{domxref("RTCIceCandidatePairStats.retransmissionsSent",
  "retransmissionsSent")}}.

## Syntax

```js
retransmissionsReceived = rtcIceCandidatePairStats.retransmissionsReceived;
```

### Value

An integer value indicating the total number of retransmitted STUN connectivity check
requests have been received on the connection referenced by this candidate pair so far.

> **Note:** Retransmissions are connectivity check requests with a
> `TRANSACTION_TRANSMIT_COUNTER` attribute whose `req` field is
> greater than 1 (indicating that the request has been transmitted more than once). See
> {{RFC(7982)}} for further details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
