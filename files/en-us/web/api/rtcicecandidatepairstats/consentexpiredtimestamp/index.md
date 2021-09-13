---
title: RTCIceCandidatePairStats.consentExpiredTimestamp
slug: Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp
tags:
  - API
  - Binding
  - Connection
  - Connectivity
  - Consent
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - STUN
  - WebRTC
  - WebRTC API
  - consentTimestampExpired
  - expiration
  - rtc
  - timeStamp
browser-compat: api.RTCIceCandidatePairStats.consentExpiredTimestamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`consentExpiredTimestamp`** indicates the time at which the
most recent {{Glossary("STUN")}} binding response expired.

This indicates when
the current STUN bindings — the mapping of the IP address and port configurations for
both peers on the {{Glossary("WebRTC")}} connection — are due to expire. If this time
has arrived or passed, the bindings have expired.

## Syntax

```js
consentExpiration = rtcIceCandidatePairStats.consentExpiredTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} object that indicates the time at which the STUN
binding that allows the two peers described by this {{domxref("RTCIceCandidatePair")}}
to communicate will expire (or the time at which the binding did expire, if the time has
passed).

This property's value is `undefined` if there have been no STUN binding
responses yet on the candidate pair. This is only possible if
{{domxref("RTCIceCandidatePeerStats.responsesReceived", "responsesReceived")}} is 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
