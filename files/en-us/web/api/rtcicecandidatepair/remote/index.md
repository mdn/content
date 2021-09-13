---
title: RTCIceCandidatePair.remote
slug: Web/API/RTCIceCandidatePair/remote
tags:
  - API
  - Candidate
  - ICE
  - Negotiation
  - Pair
  - Property
  - RTCIceCandidatePair
  - Reference
  - Remote
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCIceCandidatePair.remote
---
{{APIRef("WebRTC")}}

The **`remote`** property of the
**{{domxref("RTCIceCandidatePair")}}** dictionary specifies the
{{domxref("RTCIceCandidate")}} describing the configuration of the remote end of a
viable WebRTC connection.

## Syntax

```js
remoteCandidate = RTCIceCandidatePair.remote;
```

### Value

An {{domxref("RTCIceCandidate")}} which describes the configuration of the remote end
of a viable pair of ICE candidates. The `RTCIceCandidatePair` is returned by
the {{domxref("RTCIceTransport")}} method
{{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.

## Example

This one-line example obtains the current candidate pair and then from that gets the
remote candidate.

```js
var candidatePair = pc.getSenders()[0].transport.transport.getSelectedCandidatePair();
var remoteCandidate = candidatePair.remote;
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
