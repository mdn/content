---
title: RTCIceTransport.gatheringState
slug: Web/API/RTCIceTransport/gatheringState
tags:
  - API
  - Gatherer
  - Property
  - RTCIceTransport
  - Read-only
  - Reference
  - WebRTC
  - WebRTC API
  - gatheringState
  - state
browser-compat: api.RTCIceTransport.gatheringState
---
{{APIRef("WebRTC")}}

The read-only **{{domxref("RTCIceTransport")}}** property **`gatheringState`** returns a {{domxref("DOMString")}} that indicates the current gathering state of the ICE agent: `"new"`, `"gathering"`, or `"complete"`.

## Syntax

```js
gatherState = RTCIceTransport.gatheringState;
```

### Value

A {{domxref("DOMString")}} that indicates the current state of the ICE agent's candidate gathering process:

<!-- RTCIceGathererState enum-->

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
