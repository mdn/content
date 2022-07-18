---
title: RTCIceCandidate.toJSON()
slug: Web/API/RTCIceCandidate/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Candidate
  - ICE
  - JSON
  - Method
  - RTCIceCandidate
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - toJSON
browser-compat: api.RTCIceCandidate.toJSON
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidate")}} method **`toJSON()`** converts the `RTCIceCandidate` on which it's called into JSON.

A stringified version of the object can then be obtained by calling {{jsxref("JSON.stringify", "stringify()")}} on the returned object.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

<!-- RTCIceCandidateInit in spec -->

A JSON object with the following properties, which have been set to the corresponding values in the `RTCIceCandidate` object:

- `candidate` {{optional_inline}}
  - : A string describing the network connectivity information for the candidate.
    Additional information can be found in {{domxref("RTCIceCandidate.candidate")}}.
- `sdpMid` {{optional_inline}}

  - : A string containing the identification tag of the media stream with which the candidate is associated, or `null` if there is no associated media stream.
    Additional information can be found in {{domxref("RTCIceCandidate.sdpMid")}}.

- `sdpMLineIndex` {{optional_inline}}

  - : A number property containing the zero-based index of the m-line with which the candidate is associated, within the [SDP](/en-US/docs/Web/API/WebRTC_API/Protocols#sdp) of the media description, or `null` if no such associated exists.
    Additional information can be found in {{domxref("RTCIceCandidate.sdpMLineIndex")}}.

- `usernameFragment` {{optional_inline}}
  - : A string containing the username fragment (usually referred to in shorthand as "ufrag" or "ice-ufrag").
    This fragment, along with the ICE password ("ice-pwd"), uniquely identifies a single ongoing ICE interaction (including for any communication with the {{Glossary("STUN")}} server).
    Additional information can be found in {{domxref("RTCIceCandidate.usernameFragment")}}.

> **Note:** The returned JSON object has the same form/properties as the `candidateInfo` object that can optionally be passed to the {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate() constructor")}} to configure the candidate.

## Examples

This simple example obtains a JSON string representing an `RTCIceCandidate` found in the variable `candidate`.

```js
let jsonString = candidate.toJSON().stringify();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
