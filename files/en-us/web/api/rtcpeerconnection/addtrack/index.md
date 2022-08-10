---
title: RTCPeerConnection.addTrack()
slug: Web/API/RTCPeerConnection/addTrack
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - Media
  - Method
  - RTCPeerConnection
  - Reference
  - Tracks
  - Video
  - WebRTC
  - addTrack
browser-compat: api.RTCPeerConnection.addTrack
---

{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} method
**`addTrack()`** adds a new media track to the set of tracks
which will be transmitted to the other peer.>

> **Note:** Adding a track to a connection triggers renegotiation by
> firing a {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event. See
> {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling", "Starting negotiation")}} for details.

## Syntax

```js
addTrack(track)
addTrack(track, stream0)
addTrack(track, stream0, stream1)
addTrack(track, stream0, stream1, /* … ,*/ streamN)
```

### Parameters

- `track`
  - : A {{domxref("MediaStreamTrack")}} object representing the media track to add to the
    peer connection.
- `stream0, …, streamN` {{optional_inline}}
  - : One or more local {{domxref("MediaStream")}} objects to which the track should be
    added.

The specified `track` doesn't necessarily have to already be part of any of
the specified `stream`s. Instead, the `stream`s are a way to group
tracks together on the receiving end of the connection, making sure they are
synchronized. Any tracks that are added to the same stream on the local end of the
connection will be on the same stream on the remote end.

### Return value

The {{domxref("RTCRtpSender")}} object which will be used to transmit the media data.

> **Note:** Every `RTCRtpSender` is paired with an
> {{domxref("RTCRtpReceiver")}} to make up an {{domxref("RTCRtpTransceiver")}}. The
> associated receiver is muted (indicating that it is not able to deliver packets) until
> and unless one or more streams are added to the receiver by the remote peer.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the specified track (or all of its underlying streams) is already part of the
    {{domxref("RTCPeerConnection")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("RTCPeerConnection")}} is closed.

## Usage notes

### Adding tracks to multiple streams

After the `track` parameter, you can optionally specify one or more
{{domxref("MediaStream")}} objects to add the track to. Only tracks are sent from one
peer to another, not streams. Since streams are specific to each peer, specifying one or
more streams means the other peer will create a corresponding stream (or streams)
automatically on the other end of the connection, and will then automatically add the
received track to those streams.

#### Streamless tracks

If no streams are specified, then the track is **streamless**. This is
perfectly acceptable, although it will be up to the remote peer to decide what stream to
insert the track into, if any. This is a very common way to use `addTrack()`
when building many types of simple applications, where only one stream is needed. For
example, if all you're sharing with the remote peer is a single stream with an audio
track and a video track, you don't need to deal with managing what track is in what
stream, so you might as well just let the transceiver handle it for you.

Here's an example showing a function that uses {{domxref("MediaDevices.getUserMedia",
  "getUserMedia()")}} to obtain a stream from a user's camera and microphone, then adds
each track from the stream to the peer connection, without specifying a stream for each
track:

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track);
  }
}
```

The result is a set of tracks being sent to the remote peer, with no stream
associations. The handler for the {{DOMxRef("RTCPeerConnection/track_event", "track")}} event on the remote peer will be
responsible for determining what stream to add each track to, even if that means adding
them all to the same stream. The {{domxref("RTCPeerConnection.track_event", "ontrack")}}
handler might look like this:

```js
let inboundStream = null;

pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    if (!inboundStream) {
      inboundStream = new MediaStream();
      videoElem.srcObject = inboundStream;
    }
    inboundStream.addTrack(ev.track);
  }
};
```

Here, the `track` event handler adds the track to the first stream specified
by the event, if a stream is specified. Otherwise, the first time `ontrack`
is called, a new stream is created and attached to the video element, and then the track
is added to the new stream. From then on, new tracks are added to that stream.

You could also just create a new stream for each track received:

```js
pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    let inboundStream = new MediaStream(ev.track);
    videoElem.srcObject = inboundStream;
  }
};
```

#### Associating tracks with specific streams

By specifying a stream and allowing {{domxref("RTCPeerConnection")}} to create streams
for you, the streams' track associations are automatically managed for you by the WebRTC
infrastructure. This includes things like changes to the transceiver's
{{domxref("RTCRtpTransceiver.direction", "direction")}} and tracks being halted using
{{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}}.

For example, consider this function that an application might use to begin streaming a
device's camera and microphone input over an {{domxref("RTCPeerConnection")}} to a
remote peer:

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track, gumStream);
  }
}
```

The remote peer might then use a {{DOMxRef("RTCPeerConnection/track_event", "track")}} event handler that looks like this:

```js
pc.ontrack = ({streams: [stream]}) => videoElem.srcObject = stream;
```

This sets the video element's current stream to the one that contains the track that's
been added to the connection.

### Reused senders

This method may return either a new `RTCRtpSender` or, under very specific
circumstances, an existing compatible sender which has not yet been used to transmit
data. Compatible reusable `RTCRtpSender` instances meet these criteria:

- There is no track already associated with the sender.
- The {{domxref("RTCRtpTransceiver")}} associated with the sender has a
  {{domxref("RTCRtpReceiver")}} whose {{domxref("RTCRtpReceiver.track", "track")}}
  property specifies a {{domxref("MediaStreamTrack")}} whose
  {{domxref("MediaStreamTrack.kind", "kind")}} is the same as the `kind` of
  the `track` parameter specified when calling
  `RTCPeerConnection.addTrack()`. This ensures that a transceiver only
  handles audio or video and never both.
- The `RTCRtpTransceiver`'s {{domxref("RTCRtpTransceiver.stopped",
    "stopped")}} property is `false`.
- The `RTCRtpSender` being considered has never been used to send data. If
  the transceiver's {{domxref("RTCRtpTransceiver.currentDirection",
    "currentDirection")}} has ever been `"sendrecv"` or
  `"sendonly"`, the sender can't be reused.

If all of those criteria are met, the sender gets reused, which results in these
changes occurring to the existing `RTCRtpSender` and its
`RTCRtpTransceiver`:

- The `RTCRtpSender`'s {{domxref("RTCRtpSender.track", "track")}} is set to
  the specified track.
- The sender's set of associated streams is set to the list of streams passed into
  this method, `stream...`.
- The associated {{domxref("RTCRtpTransceiver")}} has its
  `currentDirection` updated to include sending; if its current value is
  `"recvonly"`, it becomes `"sendrecv"`, and if its current value
  is `"inactive"`, it becomes `"sendonly"`.

### New senders

If no existing sender exists that can be reused, a new one is created. This also
results in the creation of the associated objects that must exist. The process of
creating a new sender results in these changes:

- The new `RTCRtpSender` is created with the specified `track`
  and set of `stream`(s).
- A new {{domxref("RTCRtpReceiver")}} is created with a _new_
  {{domxref("MediaStreamTrack")}} as its {{domxref("RTCRtpReceiver.track", "track")}}
  property (not the track specified as a parameter when calling
  `addTrack()`). This track's {{domxref("MediaStreamTrack.kind", "kind")}} is
  set to match the `kind` of the track provided as an input parameter.
- A new {{domxref("RTCRtpTransceiver")}} is created and associated with the new sender
  and receiver.
- The new transceiver's {{domxref("RTCRtpTransceiver.direction", "direction")}} is set
  to `"sendrecv"`.
- The new transceiver is added to the `RTCPeerConnection`'s set of
  transceivers.

## Examples

This example is drawn from the code presented in the article [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) and its corresponding sample code. It comes from the
`handleVideoOfferMsg()` method there, which is called when an offer message
is received from the remote peer.

```js
const mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // And we want a video track
};

const desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
  .then((stream) => {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

This code takes SDP which has been received from the remote peer and constructs a new
{{domxref("RTCSessionDescription")}} to pass into
{{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}. Once
that succeeds, it uses {{domxref("MediaDevices.getUserMedia()")}} to obtain access to
the local webcam and microphone.

If that succeeds, the resulting stream is assigned as the source for a
{{HTMLElement("video")}} element which is referenced by the variable
`previewElement`.

The final step is to begin sending the local video across the peer connection to the
caller. This is done by adding each track in the stream by iterating over the list
returned by {{domxref("MediaStream.getTracks()")}} and passing them to
`addTrack()` along with the `stream` which they're a component of.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{DOMxRef("RTCPeerConnection/track_event", "track")}}
