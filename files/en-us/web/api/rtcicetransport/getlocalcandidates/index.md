---
title: "RTCIceTransport: getLocalCandidates() method"
short-title: getLocalCandidates()
slug: Web/API/RTCIceTransport/getLocalCandidates
page-type: web-api-instance-method
browser-compat: api.RTCIceTransport.getLocalCandidates
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceTransport")}}** method
**`getLocalCandidates()`** returns an array of
{{domxref("RTCIceCandidate")}} objects, one for each of the candidates that have been
gathered by the local device during the current {{Glossary("ICE")}} agent
session.

The local candidates are placed in this list by the ICE agent prior to being delivered
to the local client's code in an {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event so that the client can
forward the candidates to the remote peer.

## Syntax

```js-nolint
getLocalCandidates()
```

### Parameters

None.

### Return value

A JavaScript {{jsxref("Array")}} containing one {{domxref("RTCIceCandidate")}} object
for each candidate that has been identified so far during the ICE candidate gathering
session.

You can't correlate these local candidates with matching remote candidates. To find the
best match found so far, call {{domxref("RTCIceTransport.getSelectedCandidatePair()")}}.

## Examples

This simple example gets the local candidate list from the
{{domxref("RTCIceTransport")}} for the first {{domxref("RTCRtpSender")}} on the
{{domxref("RTCPeerConnection")}}, then outputs to the console all of the candidates in
the list.

```js
const localCandidates = pc
  .getSenders()[0]
  .transport.transport.getLocalCandidates();

localCandidates.forEach((candidate, index) => {
  console.log(`Candidate ${index}: ${candidate.candidate}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
