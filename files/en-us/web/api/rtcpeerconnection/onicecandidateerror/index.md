---
title: RTCPeerConnection.onicecandidateerror
slug: Web/API/RTCPeerConnection/onicecandidateerror
tags:
  - ICE
  - RTCPeerConnection
  - Reference
  - WebRTC
  - onicecandidateerror
  - Event Handler
  - Property
browser-compat: api.RTCPeerConnection.onicecandidateerror
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.onicecandidateerror`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function which is called to handle the
{{DOMxRef("RTCPeerConnection/icecandidateerror_event", "icecandidateerror")}} event when it occurs on an
{{domxref("RTCPeerConnection")}} instance. This event is fired when an error occurs
during the {{Glossary("ICE")}} candidate gathering process.

## Syntax

```js
RTCPeerConnection.onicecandidateerror = eventHandler;
```

### Value

This should be set to a function you provide which is passed a single parameter: an
{{domxref("RTCPeerConnectionIceErrorEvent")}} object describing the
{{DOMxRef("RTCPeerConnection/icecandidateerror_event", "icecandidateerror")}} event. The event offers properties describing the error
to help you handle it appropriately.

## Example

```js
pc.onicecandidateerror = function(event) {
  if (event.errorCode >= 300 && event.errorCode <= 699) {
    // STUN errors are in the range 300-699. See {{RFC(5389, "", 15.6)}}
    // for a list of codes. TURN adds a few more error codes; see
    // {{RFC(5766, "", 15)}} for details.
  } else if (event.errorCode >= 700 && event.errorCode <= 799) {
    // Server could not be reached; a specific error number is
    // provided but these are not yet specified.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/icecandidateerror_event", "icecandidateerror")}} event and its type,
  {{domxref("RTCPeerConnectionIceErrorEvent")}}.
