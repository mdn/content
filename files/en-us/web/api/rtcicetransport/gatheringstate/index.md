---
title: "RTCIceTransport: gatheringState property"
short-title: gatheringState
slug: Web/API/RTCIceTransport/gatheringState
page-type: web-api-instance-property
browser-compat: api.RTCIceTransport.gatheringState
---

{{APIRef("WebRTC")}}

The **`gatheringState`** read-only property of the {{domxref("RTCIceTransport")}} interface returns a string that indicates the current gathering state of the ICE agent for this transport: `"new"`, `"gathering"`, or `"complete"`.

You can detect when the value of this property changes by watching for an event of type {{domxref("RTCIceTransport/gatheringstatechange_event", "gatheringstatechange")}}.

Note that **`gatheringState`** represents the gathering state of just this transport, while {{domxref("RTCPeerConnection.iceGatheringState")}} represents the overall gathering state of the whole connection, including every {{domxref("RTCIceTransport")}} used by every {{domxref("RTCRtpSender")}} and every {{domxref("RTCRtpReceiver")}} on the entire connection.

## Value

A string that indicates the current state of the ICE agent's candidate gathering process:

- `"new"`
  - : The {{domxref("RTCIceTransport")}} is newly created and has not yet started to gather ICE candidates.
- `"gathering"`
  - : The transport is in the process of gathering candidates.
- `"complete"`
  - : The transport has finished gathering ICE candidates and has sent the end-of-candidates indicator to the remote device. The transport won't gather any further candidates unless an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) occurs, at which point the gathering process starts over from scratch.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
