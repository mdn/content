---
title: RTCPeerConnection.addStream()
slug: Web/API/RTCPeerConnection/addStream
page-type: web-api-instance-method
tags:
  - Deprecated
  - Method
  - RTCPeerConnection
  - Reference
  - WebRTC
  - addStream
  - Non-standard
browser-compat: api.RTCPeerConnection.addStream
---
{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The _obsolete_ {{domxref("RTCPeerConnection")}} method
**`addStream()`** adds a {{domxref("MediaStream")}} as a local
source of audio or video. Instead of using this obsolete method, you should instead use
{{domxref("RTCPeerConnection.addTrack", "addTrack()")}} once for each track you wish to
send to the remote peer.

If the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to
`closed`, an `InvalidStateError` is raised. If the
{{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to
`stable`, the event {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} is sent on the
{{domxref("RTCPeerConnection")}} to indicate that {{Glossary("ICE")}} negotiation must
be repeated to consider the new stream.

## Syntax

```js
rtcPeerConnection.addStream(mediaStream);
```

### Parameters

- `mediaStream`
  - : A {{domxref("MediaStream")}} object indicating the stream to add to the WebRTC peer
    connection.

### Return value

None.

## Example

This simple example adds the audio and video stream coming from the user's camera to
the connection.

```js
navigator.mediaDevices.getUserMedia(
  { video: true, audio: true },
  (stream) => {
    const pc = new RTCPeerConnection();
    pc.addStream(stream);
  }
);
```

## Migrating to addTrack()

[Compatibility allowing](#browser_compatibility), you should update your
code to instead use the {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} method:

```js
navigator.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  stream.getTracks().forEach((track) => {
    pc.addTrack(track, stream);
  });
});
```

The newer {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} API avoids confusion
over whether later changes to the track-makeup of a stream affects a peer connection
(they do not).

The exception is in Chrome, where `addStream()` _does_ make the peer
connection sensitive to later stream changes (though such changes do not fire the
{{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event). If you are relying on the Chrome behavior, note
that other browsers do not have it. You can write web compatible code using feature
detection instead:

```js
// Add a track to a stream and the peer connection said stream was added to:

stream.addTrack(track);
if (pc.addTrack) {
  pc.addTrack(track, stream);
} else {
  // If you have code listening for negotiationneeded events:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}

// Remove a track from a stream and the peer connection said stream was added to:

stream.removeTrack(track);
if (pc.removeTrack) {
  pc.removeTrack(pc.getSenders().find((sender) => sender.track === track));
} else {
  // If you have code listening for negotiationneeded events:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
