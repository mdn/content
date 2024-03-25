---
title: "RTCPeerConnection: removeTrack() method"
short-title: removeTrack()
slug: Web/API/RTCPeerConnection/removeTrack
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.removeTrack
---

{{APIRef("WebRTC")}}

The **`removeTrack()`** method of the {{domxref("RTCPeerConnection")}} interface tells the local end of the connection to stop sending media from the specified track, without actually removing the corresponding {{domxref("RTCRtpSender")}} from the list of senders as reported by {{domxref("RTCPeerConnection.getSenders()")}}.
If the track is already stopped, or is not in the connection's senders list, this method has no effect.

If the connection has already been negotiated ({{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to `"stable"`), it is marked as needing to be negotiated again; the remote peer won't experience the change until this negotiation occurs.
A {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event is sent to the {{domxref("RTCPeerConnection")}} to let the local end know this negotiation must occur.

## Syntax

```js-nolint
removeTrack(sender)
```

### Parameters

- `sender`
  - : A {{domxref("RTCRtpSender")}} specifying the sender to remove from the connection.

### Return value

`undefined`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the connection is not open.

## Example

This example adds a video track to a connection and sets up a listener on a close button which removes the track when the user clicks the button.

```js
let pc;
let sender;
navigator.getUserMedia({ video: true }, (stream) => {
  pc = new RTCPeerConnection();
  const [track] = stream.getVideoTracks();
  sender = pc.addTrack(track, stream);
});

document.getElementById("closeButton").addEventListener(
  "click",
  (event) => {
    pc.removeTrack(sender);
    pc.close();
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
