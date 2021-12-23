---
title: RTCPeerConnection.onnegotiationneeded
slug: Web/API/RTCPeerConnection/onnegotiationneeded
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - onnegotiationneeded
browser-compat: api.RTCPeerConnection.onnegotiationneeded
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} interface's
**`onnegotiationneeded`** property is an
{{domxref("EventListener")}} which specifies a function which is called to handle the
{{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event when it occurs on an
{{domxref("RTCPeerConnection")}} instance. This event is fired when a change has
occurred which requires session negotiation. This negotiation should be carried out as
the offerer, because some session changes cannot be negotiated as the answerer.

Most commonly, the {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event is fired after a send track is
added to the {{domxref("RTCPeerConnection")}}. If the session is modified in a manner
that requires negotiation while a negotiation is already in progress, no
{{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event will fire until negotiation completes, and only
then if negotiation is still needed.

## Syntax

```js
RTCPeerConnection.onnegotiationneeded = eventHandler;
```

### Value

This should be set to a function you provide which is passed a single parameter: an
{{domxref("Event")}} object containing the {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event. There's
no additional information provided in the event; anything you need, you can get by
examining the [properties of
the `RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection#Properties).

## Example

This example, derived from the example in [Signaling and video
calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling), establishes a handler for {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} events to handle
creating an offer, configuring the local end of the connection, and sending the offer to
the remote peer.

```js
pc.onnegotiationneeded = function() {
  pc.createOffer().then(function(offer) {
    return pc.setLocalDescription(offer);
  })
  .then(function() {
      // Send the offer to the remote peer through the signaling server
    });
  })
  .catch(reportError);
}
```

First, it creates the offer by calling {{domxref("RTCPeerConnection.createOffer",
  "createOffer()")}}. When that succeeds, the offer is passed into
{{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} to set the
local description for the connection. Once that's succeeded in turn, the offer can be
sent to the signaling server for delivery to the remote peer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event and its type, {{domxref("Event")}}.
