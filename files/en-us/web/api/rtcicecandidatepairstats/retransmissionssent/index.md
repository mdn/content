---
title: RTCIceCandidatePairStats.retransmissionsSent
slug: Web/API/RTCIceCandidatePairStats/retransmissionsSent
browser-compat: api.RTCIceCandidatePairStats.retransmissionsSent
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} dictionary's
**`retransmissionsSent`** property indicates the total
number of {{Glossary("STUN")}} connectivity check request retransmissions that
have been sent so far on the pair of candidates.

The number of retransmissions that have been received on the connection can be found in
{{domxref("RTCIceCandidatePairStats.retransmissionsReceived",
    "retransmissionsReceived")}}.

## Syntax

```js
retransmissionsSent = rtcIceCandidatePairStats.retransmissionsSent;
```

### Value

An integer value indicating the total number of retransmitted STUN connectivity check
requests have been sent on the connection referenced by this candidate pair so far.

> **Note:** Retransmissions are connectivity check requests with a
> `TRANSACTION_TRANSMIT_COUNTER` attribute whose `req` field
> is greater than 1 (indicating that the request has been transmitted more than
> once). See {{RFC(7982)}} for further details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
