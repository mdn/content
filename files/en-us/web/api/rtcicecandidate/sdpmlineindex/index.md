---
title: RTCIceCandidate.sdpMLineIndex
slug: Web/API/RTCIceCandidate/sdpMLineIndex
tags:
  - API
  - Candidate
  - Media Description
  - NeedsExample
  - Property
  - RTCIceCandidate
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - m-line
  - sdpMLineIndex
browser-compat: api.RTCIceCandidate.sdpMLineIndex
---
{{APIRef("WebRTC")}}

The read-only **`sdpMLineIndex`** property on the {{domxref("RTCIceCandidate")}} interface
is a zero-based index of the m-line describing the media associated with the candidate.

This property can be configured by specifying the value of the `sdpMLineIndex` property in the `candidateInfo` options object that is passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
If you call the constructor with an m-line string instead of the options object, the value of `sdpMLineIndex` is extracted from the specified candidate m-line string.

## Syntax

```js
var sdpMLineIndex = RTCIceCandidate.sdpMLineIndex;
```

### Value

A number containing a 0-based index into the set of m-lines providing media descriptions,
indicating which media source is associated with the candidate, or `null` if no such association is available.

> **Note:** Attempting to add a candidate (using
> {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}) that has a
> value of `null` for either `sdpMid` or
> `sdpMLineIndex` will throw a `TypeError` exception.

## Example

...

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
