---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
page-type: web-api-interface
tags:
  - API
  - Candidate
  - Connectivity
  - Dictionary
  - ICE
  - Interface
  - Negotiation
  - Pair
  - Reference
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidatePair
---
{{APIRef("WebRTC")}}

The **`RTCIceCandidatePair`** dictionary describes a pair of ICE candidates which together comprise a description of a viable connection between two WebRTC endpoints. It is used as the return value from {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} to identify the currently-selected candidate pair identified by the ICE agent.

## Properties

- {{domxref("RTCIceCandidatePair.local", "local")}}
  - : An {{domxref("RTCIceCandidate")}} describing the configuration of the local end of the connection.
- {{domxref("RTCIceCandidatePair.remote", "remote")}}
  - : The **`RTCIceCandidate`** describing the configuration of the remote end of the connection.

## Examples

See [`RTCIceTransport.onselectedcandidatepairchange`](/en-US/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
