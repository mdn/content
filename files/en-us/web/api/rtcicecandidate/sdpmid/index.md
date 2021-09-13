---
title: RTCIceCandidate.sdpMid
slug: Web/API/RTCIceCandidate/sdpMid
tags:
  - API
  - ICE
  - Identification
  - Property
  - RTCIceCandidate
  - Read-only
  - SDP
  - WebRTC
  - WebRTC API
  - id
  - identification-tag
  - sdpMid
  - stream
browser-compat: api.RTCIceCandidate.sdpMid
---
{{APIRef("WebRTC")}}

The read-only property **`sdpMid`** on the {{domxref("RTCIceCandidate")}} interface returns a {{domxref("DOMString")}}
specifying the media stream identification tag of the media component with which the candidate is associated.
This ID uniquely identifies a given stream for the component with which the candidate is associated.

This property can be configured by specifying the value of the `sdpMid` property in the `candidateInfo` options object that is passed to the {{domxref("RTCIceCandidate.RTCIceCandidate","RTCIceCandidate()")}} constructor.
If you call the constructor with an m-line string instead of the options object, the value of `sdpMid` is extracted from the specified candidate m-line string.

## Syntax

```js
var sdpMid = RTCIceCandidate.sdpMid;
```

### Value

A {{domxref("DOMString")}} which uniquely identifies the source media component from
which the candidate draws data, or `null` if no such association exists for the candidate.

> **Note:** Attempting to add a candidate (using {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}) that has a
> value of `null` for both `sdpMid` and `sdpMLineIndex` will throw a `TypeError` exception.

## Example

...

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
