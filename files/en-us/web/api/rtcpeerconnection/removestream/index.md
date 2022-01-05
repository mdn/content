---
title: RTCPeerConnection.removeStream()
slug: Web/API/RTCPeerConnection/removeStream
tags:
  - Deprecated
  - Media
  - Method
  - RTCPeerConnection
  - Reference
  - WebRTC
  - removeStream
browser-compat: api.RTCPeerConnection.removeStream
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The
**`RTCPeerConnection.removeStream()`** method removes a
{{domxref("MediaStream")}} as a local source of audio or video. If the negotiation
already happened, a new one will be needed for the remote peer to be able to use it.
Because this method has been deprecated, you should instead use
{{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} if your target browser
versions have implemented it.

If the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to
`"closed"`, an `InvalidStateError` is raised. If the
{{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to
`"stable"`, the event {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} is sent on the
{{domxref("RTCPeerConnection")}}.

## Syntax

```js
RTCPeerConnection.removeStream(mediaStream);
```

### Parameters

- `mediaStream`
  - : A {{domxref("MediaStream")}} specifying the stream to remove from the connection.

### Return value

{{jsxref("undefined")}}.

## Example

```js
var pc, videoStream;
navigator.getUserMedia({video: true}, function(stream) {
  pc = new RTCPeerConnection();
  videoStream = stream;
  pc.addStream(stream);
}
document.getElementById("closeButton").addEventListener("click", function(event) {
  pc.removeStream(videoStream);
  pc.close();
}, false);
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.removeTrack()")}}
- {{domxref("RTCPeerConnection.addTrack()")}}
- {{domxref("RTCPeerConnection.addStream()")}}
