---
title: RTCPeerConnection.onsignalingstatechange
slug: Web/API/RTCPeerConnection/onsignalingstatechange
tags:
  - API
  - Connectivity
  - Event Handler
  - ICE
  - Offer
  - Property
  - RTCPeerConnection
  - Reference
  - SDP
  - Signaling
  - WebRTC
  - WebRTC API
  - answer
  - onsignalingstatechange
browser-compat: api.RTCPeerConnection.onsignalingstatechange
---
{{APIRef("WebRTC")}}

The **`onsignalingstatechange`** event
handler property of the **{{domxref("RTCPeerConnection")}}** interface
specifies a function to be called when the {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} event
occurs on an {{domxref("RTCPeerConnection")}} interface. The function receives
as input the event object of type {{domxref("Event")}}; this event is sent when the peer
connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}} changes,
which may happen either because of a call to
{{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} or to
{{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.

## Syntax

```js
rtcPeerConnection.onsignalingstatechange = errorHandler;
```

### Value

Set this to a function which you provide that receives an {{domxref("Event")}} object
as input; this contains the {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} event. This event object
doesn't provide details about what changed, but you can examine the
{{domxref("RTCPeerConnection.signalingState", "signalingState")}} property to determine
what the new state is.

You may also, as always, set up a handler for the
{{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
event using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
myRTCPeerConnection.addEventListener("signalingstatechange", mySignalingStateChangeHandler);
```

Or, using an anonymous (inline) handler:

```js
myRTCPeerConnection.addEventListener("signalingstatechange", event => {
  /* handle the event here */
});
```

## Example

This snippet shows a handler for {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} that looks for the
`"have-local-pranswer"` signaling state—indicating that a remote offer has
been received and a local description of type `"pranswer"` has been applied
in response.

```js
pc.onsignalingstatechange = function(event) {
  if (pc.signalingState === "have-local-pranswer") {
    // setLocalDescription() has been called with an answer
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Signaling and
  video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling): A WebRTC example
- The {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} event and its type, {{domxref("Event")}}.
