---
title: RTCIceTransport.state
slug: Web/API/RTCIceTransport/state
tags:
  - API
  - Enumerated Type
  - Enumeration
  - ICE
  - Media
  - Property
  - RTCIceTransportState
  - Read-only
  - Reference
  - Transport
  - Type
  - WebRTC
  - WebRTC API
  - state
browser-compat: api.RTCIceTransport.state
---
{{APIRef("WebRTC")}}

The read-only **{{domxref("RTCIceTransport")}}**
property **`state`** returns the current state of the ICE
transport, so you can determine the state of ICE gathering in which the ICE agent
currently is operating.

This differs from the {{domxref("RTCIceTransport.gatheringState", "gatheringState")}},
which only indicates whether or not ICE gathering is currently underway.

## Syntax

```js
iceState = iceTransport.state;
```

### Value

A {{domxref("DOMString")}}, whose value is one of those found in the enumerated type
{{domxref("RTCIceTransportState")}}, which indicates the stage of ICE gathering that's
currently underway. Its value will be one of the following:

{{page("/en-US/docs/Web/API/RTCIceTransportState", "Values")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
