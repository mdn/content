---
title: "RTCIceCandidatePair: local property"
short-title: local
slug: Web/API/RTCIceCandidatePair/local
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePair.local
---

{{APIRef("WebRTC")}}

The **`local`** property of the
**{{domxref("RTCIceCandidatePair")}}** dictionary specifies the
{{domxref("RTCIceCandidate")}} which describes the configuration of the local end of a
viable WebRTC connection.

## Value

An {{domxref("RTCIceCandidate")}} which describes the configuration of the local end of
a viable pair of ICE candidates. The `RTCIceCandidatePair` is returned by the
{{domxref("RTCIceTransport")}} method
{{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.

## Examples

This one-line example obtains the current candidate pair and then from that gets the
local candidate.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const localCandidate = candidatePair.local;
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
