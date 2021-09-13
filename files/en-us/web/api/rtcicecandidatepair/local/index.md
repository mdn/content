---
title: RTCIceCandidatePair.local
slug: Web/API/RTCIceCandidatePair/local
tags:
  - API
  - Candidate
  - Connectivity
  - ICE
  - Negotiation
  - Property
  - RTCIceCandidatePair
  - Reference
  - WebRTC
  - WebRTC API
  - local
  - rtc
browser-compat: api.RTCIceCandidatePair.local
---
{{APIRef("WebRTC")}}

The **`local`** property of the
**{{domxref("RTCIceCandidatePair")}}** dictionary specifies the
{{domxref("RTCIceCandidate")}} which describes the configuration of the local end of a
viable WebRTC connection.

## Syntax

```js
localCandidate = RTCIceCandidatePair.local;
```

### Value

An {{domxref("RTCIceCandidate")}} which describes the configuration of the local end of
a viable pair of ICE candidates. The `RTCIceCandidatePair` is returned by the
{{domxref("RTCIceTransport")}} method
{{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.

## Example

This one-line example obtains the current candidate pair and then from that gets the
local candidate.

```js
var candidatePair = pc.getSenders()[0].transport.transport.getSelectedCandidatePair();
var localCandidate = candidatePair.local;
```

The {{domxref("RTCIceTransport")}} is found by getting the list of
{{domxref("RTCRtpSender")}} objects for the {{domxref("RTCPeerConnection")}}
`pc`. In the first `RTCRtpSender`, we get the
{{domxref("RTCDtlsTransport")}} over which the media data is being transmitted and
finally, from that, the `RTCIceTransport`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
