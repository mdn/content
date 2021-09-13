---
title: RTCPeerConnection.onicecandidate
slug: Web/API/RTCPeerConnection/onicecandidate
tags:
  - API
  - Candidate
  - Event Handler
  - ICE
  - Negotiation
  - Property
  - RTCPeerConnection
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - onicecandidate
browser-compat: api.RTCPeerConnection.onicecandidate
---
{{APIRef("WebRTC")}}

The `RTCPeerConnection` property
**{{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}}**
property is an [event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called
when the {{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}} event occurs on an {{domxref("RTCPeerConnection")}}
instance. This happens whenever the local {{Glossary("ICE")}} agent needs to deliver a
message to the other peer through the signaling server.This lets the ICE agent
perform negotiation with the remote peer without the browser itself needing to know any
specifics about the technology being used for signaling; implement this method to use
whatever messaging technology you choose to send the ICE candidate to the remote peer.

## Syntax

```js
rtcPeerConnection.onicecandidate = eventHandler;
```

### Value

This should be set to a function which you provide that accepts as input an
{{domxref("RTCPeerConnectionIceEvent")}} object representing the
{{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}} event. The function should deliver the ICE candidate, whose
{{Glossary("SDP")}} can be found in the event's
{{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} property, to the remote
peer through the signaling server.

If the event's `candidate` property is `null`, ICE gathering has
finished. This message should not be sent to the remote peer. When this happens, the
connection's {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} has
also changed to `complete`. You don't need to watch for this explicitly;
instead, if you need to sense the end of signaling, you should watch for a
{{domxref("RTCPeerConnection.icegatheringstatechange_event",
  "icegatheringstatechange")}} event indicating that the ICE negotiation has transitioned
to the `complete` state.

## Example

The example below, which is based on the code from the article [Signaling and video
calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling), sets up a handler for {{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}} events to send the
candidates to the remote peer.

```js
pc.onicecandidate = function(event) {
  if (event.candidate) {
    // Send the candidate to the remote peer
  } else {
    // All ICE candidates have been sent
  }
}
```

Notice that the end of negotiation is detected here when the event's
{{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} property is
`null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}} event and its type,
  {{domxref("RTCPeerConnectionIceEvent")}}.
