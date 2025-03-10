---
title: "RTCIceCandidate: sdpMid property"
short-title: sdpMid
slug: Web/API/RTCIceCandidate/sdpMid
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.sdpMid
---

{{APIRef("WebRTC")}}

The read-only property **`sdpMid`** on the {{domxref("RTCIceCandidate")}} interface returns a string
specifying the media stream identification tag of the media component with which the candidate is associated.
This ID uniquely identifies a given stream for the component with which the candidate is associated.

This property can be configured by specifying the value of the `sdpMid` property in the `candidateInfo` options object that is passed to the {{domxref("RTCIceCandidate.RTCIceCandidate","RTCIceCandidate()")}} constructor.
If you call the constructor with an m-line string instead of the options object, the value of `sdpMid` is extracted from the specified candidate m-line string.

## Value

A string which uniquely identifies the source media component from
which the candidate draws data, or `null` if no such association exists for the candidate.

> [!NOTE]
> Attempting to add a candidate (using {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}) that has a
> value of `null` for both `sdpMid` and `sdpMLineIndex` will throw a {{jsxref("TypeError")}} exception.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
