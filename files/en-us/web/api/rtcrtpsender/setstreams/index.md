---
title: "RTCRtpSender: setStreams() method"
short-title: setStreams()
slug: Web/API/RTCRtpSender/setStreams
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.setStreams
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpSender")}} method **`setStreams()`** associates the sender's {{domxref("RTCRtpSender.track", "track")}} with the specified {{domxref("MediaStream")}} objects.

## Syntax

```js-nolint
setStreams()
setStreams(mediaStream1)
setStreams(mediaStream1, mediaStream2)
setStreams(mediaStream1, mediaStream2, /* …, */ mediaStreamN)
```

### Parameters

- `mediaStreamN` {{optional_inline}}
  - : An arbitrary number of {{domxref("MediaStream")}} objects specified as arguments, that identify the streams to which the `RTCRtpSender`'s {{domxref("RTCRtpSender.track", "track")}} belongs.
    If this parameter isn't specified, no new streams will be associated with the track.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the sender's connection is closed.

## Description

`setStreams()` is purely additive. It doesn't remove the track from any streams; it adds it to new ones.
If you specify streams to which the track already belongs, that stream is unaffected.

Once the track has been added to all of the streams, renegotiation of the connection will be triggered by the {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event being dispatched to the {{domxref("RTCPeerConnection")}} to which the sender belongs.

## Examples

This example adds all of an {{domxref("RTCPeerConnection")}}'s tracks to the specified stream.

```js
function addTracksToStream(stream) {
  let senders = pc.getSenders();

  senders.forEach((sender) => {
    if (sender.track && sender.transport.state === connected) {
      sender.setStreams(stream);
    }
  });
}
```

After calling the {{domxref("RTCPeerConnection")}} method {{domxref("RTCPeerConnection.getSenders", "getSenders()")}} to get the list of the connection's senders, the `addTracksToStream()` function iterates over the list.
For each sender, if the sender's track is non-null and its transport's state is `connected`, we call `setStreams()` to add the track to the `stream` specified.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
