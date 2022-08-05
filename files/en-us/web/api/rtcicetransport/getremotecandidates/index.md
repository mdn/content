---
title: RTCIceTransport.getRemoteCandidates()
slug: Web/API/RTCIceTransport/getRemoteCandidates
page-type: web-api-instance-method
tags:
  - API
  - Candidates
  - Connectivity
  - ICE
  - Negotiation
  - Method
  - RTCIceTransport
  - Reference
  - Remote
  - WebRTC
  - WebRTC API
  - getRemoteCandidates
  - rtc
browser-compat: api.RTCIceTransport.getRemoteCandidates
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceTransport")}}** method
**`getRemoteCandidates()`** returns an array which contains
one {{domxref("RTCIceCandidate")}} for each of the candidates that have been received
from the remote peer so far during the current {{Glossary("ICE")}} gathering
session.

Each time your signaling code calls {{domxref("RTCPeerConnection.addIceCandidate()")}}
to add a received candidate to the ICE session, the ICE agent places it in the list
returned by this function.

## Syntax

```js
getRemoteCandidates()
```

### Parameters

None.

### Return value

An array containing one {{domxref("RTCIceCandidate")}} object for each candidate that
has been received so far from the remote peer during the current ICE candidate gathering
session.

It's important to keep in mind that there's no way to correlate these remote candidates
with compatible local candidates. To find the best match found so far, call
{{domxref("RTCIceTransport.getSelectedCandidatePair()")}}.

## Example

This simple example gets the remote candidate list from the
{{domxref("RTCIceTransport")}} for the first {{domxref("RTCRtpSender")}} on the
{{domxref("RTCPeerConnection")}}, then outputs to the console all of the candidates in
the list.

```js
const remoteCandidates = pc.getSenders()[0].transport.transport.getRemoteCandidates();

remoteCandidates.forEach((candidate, index) => {
  console.log(`Candidate ${index}: ${candidate.candidate}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
