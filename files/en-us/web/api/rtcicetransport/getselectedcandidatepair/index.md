---
title: RTCIceTransport.getSelectedCandidatePair()
slug: Web/API/RTCIceTransport/getSelectedCandidatePair
tags:
  - API
  - Candidates
  - Connectivity
  - Gathering
  - ICE
  - Method
  - Negotiation
  - Pair
  - RTCIceTransport
  - Reference
  - WebRTC
  - WebRTC API
  - getSelectedCandidatePair
browser-compat: api.RTCIceTransport.getSelectedCandidatePair
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceTransport")}} method
**`getSelectedCandidatePair()`** returns an
{{domxref("RTCIceCandidatePair")}} object containing the current best-choice pair
of {{Glossary("ICE")}} candidates describing the configuration of the endpoints of the transport.

## Syntax

```js
candidatePair = RTCIceTransport.getSelectedCandidatePair();
```

### Parameters

None.

### Return value

A {{domxref("RTCIceCandidatePair")}} object describing the configurations of the
currently-selected candidate pair's two endpoints.
{{domxref("RTCIceCandidatePair.local", "local")}} describes the configuration of the
local end of the connection, while {{domxref("RTCIceCandidatePair.remote", "remote")}}
describes the remote peer's configuration.

The return value is `null` if no pair of candidates has been selected yet.

## Usage notes

As the ICE agent performs negotiation of a {{domxref("RTCPeerConnection")}}, it gathers
and analyzes candidate configurations from each the two peers. As soon as it finds an
acceptable matching pair of candidates, meeting the requirements for the connection, a
{{event("selectedcandidatepairchange")}} event is fired at the
{{domxref("RTCIceTransport")}}. From that time forward, the best matching pair of
candidates will always be available by calling
`getSelectedCandidatePair()`.

As ICE negotiation continues, any time a pair of candidates is discovered that is
better than the currently-selected pair, the new pair is selected, replacing the
previous pairing, and the `selectedcandidatepairchange` event is fired again.

> **Note:** It's possible for one of the configurations in the selected candidate pair to remain unchanged when a new pairing is chosen.

## Examples

See [`RTCIceTransport.onselectedcandidatepairchange`](/en-US/docs/Web/API/RTCIceTransport/onselectedcandidatepairchange#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
