---
title: "RTCIceCandidatePair: remote property"
short-title: remote
slug: Web/API/RTCIceCandidatePair/remote
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePair.remote
---

{{APIRef("WebRTC")}}

The **`remote`** property of the **{{domxref("RTCIceCandidatePair")}}** interface specifies the {{domxref("RTCIceCandidate")}} describing the configuration of the remote end of a viable WebRTC connection.

The `RTCIceCandidatePair` is returned by the {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}} method of {{domxref("RTCIceTransport")}}.

## Value

An {{domxref("RTCIceCandidate")}}.

## Examples

### Basic usage

This one-line example obtains the current candidate pair and then from that gets the remote candidate.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const remoteCandidate = candidatePair.remote;
```

The {{domxref("RTCIceTransport")}} is found by getting the list of {{domxref("RTCRtpSender")}} objects for the {{domxref("RTCPeerConnection")}} `pc`.
In the first `RTCRtpSender`, we get the {{domxref("RTCDtlsTransport")}} over which the media data is being transmitted and finally, from that, the `RTCIceTransport`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
