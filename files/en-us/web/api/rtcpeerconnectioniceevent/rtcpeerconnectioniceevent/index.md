---
title: RTCPeerConnectionIceEvent()
slug: Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - RTCPeerConnectionIceEvent
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnectionIceEvent()`** constructor creates a new
{{domxref("RTCPeerConnectionIceEvent")}} object.

## Syntax

```js
new RTCPeerConnectionIceEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `icecandidate`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `candidate`
      - : A {{domxref("RTCIceCandidate")}} representing the ICE candidate being concerned by the event.
        If `null`, the event indicates the end of candidate gathering.
    - `url`
      - : A string containing the URL of the STUN or TURN server which was used to gather the candidate.
        If the candidate was not gathered by a {{Glossary("STUN")}} or {{Glossary("TURN")}} server,
        this value must be `null`, which is also the default value.

### Return value

A new {{domxref("RTCPeerConnectionIceEvent")}} object, configured as specified in the provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCPeerConnection")}}.
