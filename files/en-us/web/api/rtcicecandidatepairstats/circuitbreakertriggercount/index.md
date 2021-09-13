---
title: RTCIceCandidatePairStats.circuitBreakerTriggerCount
slug: Web/API/RTCIceCandidatePairStats/circuitBreakerTriggerCount
tags:
  - API
  - Circuit-Breaker
  - Connection
  - Property
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - circuitBreakerTriggerCount
browser-compat: api.RTCIceCandidatePairStats.circuitBreakerTriggerCount
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`circuitBreakerTriggerCount`** indicates the number of times
the circuit-breaker has been triggered to indicate a connection timeout or other
unexpected connection abort on this specific connection configuration.

A circuit breaker trigger is fired each time the connection times out or otherwise
needs to be halted automatically.

## Syntax

```js
cbtCount = rtcIceCandidatePairStats.circuitBreakerTriggerCount;
```

### Value

An integer value indicating the number of times the circuit-breaker has been triggered
for the 5-tuple used by this connection. A 5-tuple defining a TCP connection is made up
of the following data:

- The source IP address.
- The source port number.
- The destination IP address.
- The destination port number.
- Network protocol.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
