---
title: RTCIceCandidate.foundation
slug: Web/API/RTCIceCandidate/foundation
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - ICE
  - Property
  - RTCIceCandidate
  - Read-only
  - Reference
  - SDP
  - Transport
  - WebRTC
  - WebRTC API
  - foundation
browser-compat: api.RTCIceCandidate.foundation
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}**
interface's read-only **`foundation`** property is a string
which uniquely identifies the candidate across multiple transports.

The `foundation` can therefore be used to correlate candidates that are present on
multiple {{domxref("RTCIceTransport")}} objects

## Value

A string which uniquely identifies the candidate across all
`RTCIceTransport`s on which it is available.

> **Note:** If `port` is `null` — and
> `port` is supported by the {{Glossary("user agent")}} — passing the
> candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> will fail, throwing an `OperationError` exception.

## Usage notes

Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE
candidate:

```
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

The field `"4234997325"` is the foundation.

## Examples

This code snippet uses the `foundation` of two candidates to determine if
they're actually the same candidate.

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
