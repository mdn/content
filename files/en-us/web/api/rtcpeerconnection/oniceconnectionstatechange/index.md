---
title: RTCPeerConnection.oniceconnectionstatechange
slug: Web/API/RTCPeerConnection/oniceconnectionstatechange
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - oniceconnectionstatechange
browser-compat: api.RTCPeerConnection.oniceconnectionstatechange
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.oniceconnectionstatechange`** property
is an event handler which specifies a function to be called when the
{{DOMxRef("RTCPeerConnection/iceconnectionstatechange_event", "iceconnectionstatechange")}} event is fired on an
{{domxref("RTCPeerConnection")}} instance. This happens when the state of the
connection's ICE agent, as represented by the
{{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} property,
changes.

## Syntax

```js
RTCPeerConnection.oniceconnectionstatechange = eventHandler;
```

### Value

This event handler can be set to function which is passed a single input parameter: an
{{domxref("Event")}} object describing the {{DOMxRef("RTCPeerConnection/iceconnectionstatechange_event", "iceconnectionstatechange")}} event
which occurred. Your code can look at the value of
{{domxref("RTCPeerConnection.iceConnectionState")}} to determine what the new state is.

## Example

The example below watches the state of the ICE agent for a failure or unexpected
closure and takes appropriate action, such as presenting an error message or attempting
to restart the ICE agent.

```js
pc.oniceconnectionstatechange = function(event) {
  if (pc.iceConnectionState === "failed" ||
      pc.iceConnectionState === "disconnected" ||
      pc.iceConnectionState === "closed") {
    // Handle the failure
  }
};
```

Of course, "disconnected" and "closed" don't necessarily indicate errors; these can be
the result of normal ICE negotiation, so be sure to handle these properly (if at all).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/iceconnectionstatechange_event", "iceconnectionstatechange")}} event and its type, {{domxref("Event")}}.
