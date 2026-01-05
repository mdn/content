---
title: "RTCIceCandidate: foundation property"
short-title: foundation
slug: Web/API/RTCIceCandidate/foundation
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.foundation
---

{{APIRef("WebRTC")}}

The **`foundation`** read-only property of the {{domxref("RTCIceCandidate")}} interface is a string that allows correlation of candidates from a common network path on multiple {{domxref("RTCIceTransport")}} objects.

Candidates share the same `foundation` if they:

- have the same type: "host", "relayed", "server reflexive", or "peer reflexive".
- have "bases" that share the same IP address and transport, but not necessarily the same port.
  Note that the IP address is that of the network interface from which the ICE agent sent the candidate.
- They come from a {{Glossary("STUN")}} or TURN server that has the same IP address.

This is used to help optimize ICE performance while prioritizing and correlating candidates that appear on multiple {{domxref("RTCIceTransport")}} objects.

## Value

A string which uniquely identifies the candidate across all `RTCIceTransport`s on which it is available.

> [!NOTE]
> If `port` is `null` — and `port` is supported by the {{Glossary("user agent")}} — passing the candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} will fail, throwing an `OperationError` exception.

## Usage notes

Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE candidate:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

The field `"4234997325"` is the foundation.

## Examples

This code snippet uses the `foundation` of two candidates to determine if they're actually the same candidate.

```js
if (candidate1.foundation === candidate2.foundation) {
  /* the two candidates are the same, even if they're on
     different transports */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
