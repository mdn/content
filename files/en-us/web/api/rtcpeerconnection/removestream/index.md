---
title: "RTCPeerConnection: removeStream() method"
short-title: removeStream()
slug: Web/API/RTCPeerConnection/removeStream
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.RTCPeerConnection.removeStream
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`removeStream()`** method of the {{domxref("RTCPeerConnection")}} interface removes a {{domxref("MediaStream")}} as a local source of audio or video.
If the negotiation already happened, a new one will be needed for the remote peer to be able to use it.
Because this method has been deprecated, you should instead use {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} if your target browser versions have implemented it.

If the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to `"closed"`, an `InvalidStateError` is raised.
If the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to `"stable"`, the event {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} is sent on the {{domxref("RTCPeerConnection")}}.

## Syntax

```js-nolint
removeStream(mediaStream)
```

### Parameters

- `mediaStream`
  - : A {{domxref("MediaStream")}} specifying the stream to remove from the connection.

### Return value

{{jsxref("undefined")}}.

## Example

```js
let pc;
let videoStream;
navigator.getUserMedia({ video: true }, (stream) => {
  pc = new RTCPeerConnection();
  videoStream = stream;
  pc.addStream(stream);
});
document.getElementById("closeButton").addEventListener(
  "click",
  (event) => {
    pc.removeStream(videoStream);
    pc.close();
  },
  false,
);
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.removeTrack()")}}
- {{domxref("RTCPeerConnection.addTrack()")}}
- {{domxref("RTCPeerConnection.addStream()")}}
