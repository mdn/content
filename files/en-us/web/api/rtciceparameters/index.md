---
title: RTCIceParameters
slug: Web/API/RTCIceParameters
tags:
  - API
  - Candidate
  - Connectivity
  - Dictionary
  - ICE
  - Interface
  - Negotiation
  - RTCIceParameters
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - password
  - ufrag
  - username
browser-compat: api.RTCIceParameters
---
{{APIRef("WebRTC")}}

The **`RTCIceParameters`** dictionary specifies the username fragment and password assigned to an {{Glossary("ICE")}} session.

During ICE negotiation, each peer's username fragment and password are recorded in an `RTCIceParameters` object, which can be obtained from the {{domxref("RTCIceTransport")}} by calling its {{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}} or {{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}} method, depending on which end interests you.

## Properties

- {{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}}
  - : A {{domxref("DOMString")}} specifying the value of the ICE session's username fragment field, `ufrag`.
- {{domxref("RTCIceParameters.password", "password")}}
  - : A {{domxref("DOMString")}} specifying the session's password string.

## Usage notes

The username fragment and password uniquely identify the remote peer for the duration of the ICE session, and are used to both ensure security and to avoid crosstalk across multiple ongoing ICE sessions. See {{domxref("RTCIceCandidate.usernameFragment")}} for further information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
