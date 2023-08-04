---
title: "RTCRtpSender: replaceTrack() method"
short-title: replaceTrack()
slug: Web/API/RTCRtpSender/replaceTrack
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.replaceTrack
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpSender")}} method
**`replaceTrack()`** replaces the track currently being used
as the sender's source with a new {{domxref("MediaStreamTrack")}}.

The new
track must be of the same media kind (audio, video, etc.) and switching the track should
not require negotiation.

Among the use cases for `replaceTrack()` is the common need to switch
between the rear- and front-facing cameras on a phone. With `replaceTrack()`,
you can have a track object for each camera and switch between the two as needed. See
the example [Switching cameras](#switching_cameras) below.

## Syntax

```js-nolint
replaceTrack(newTrack)
```

### Parameters

- `newTrack` {{optional_inline}}
  - : A {{domxref("MediaStreamTrack")}} specifying the track with which to replace the
    `RTCRtpSender`'s current source track. The new track's
    {{domxref("MediaStreamTrack.kind", "kind")}} must be the same as the current track's,
    or the replace track request will fail.

### Return value

A {{jsxref("Promise")}} which is fulfilled once the track has been successfully
replaced. The promise is rejected if the track cannot be replaced for any reason; this
is commonly because the change would require renegotiation of the codec, which is not
allowed (see [Things that require negotiation](#things_that_require_negotiation)).

If `newTrack` was omitted or was `null`,
`replaceTrack()` stops the sender. No negotiation is required in this case.

When the promise is fulfilled, the fulfillment handler receives a value of
`undefined`.

### Exceptions

If the returned promise is rejected, one of the following exceptions is provided to the
rejection handler:

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Returned if replacing the `RTCRtpSender`'s current track with the new one
    would require negotiation.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the track on which this method was called is stopped rather than running.
- {{jsxref("TypeError")}}
  - : Returned if the new track's `kind` doesn't match the original track.

## Usage notes

### Things that require negotiation

Most track replacements can be done without renegotiation. In fact, even changes that seem huge
can be done without requiring negotiation. However, some changes may require
negotiation and thus fail `replaceTrack()`:

- The new track has a resolution which is outside the bounds of the dimensions negotiated with the peer;
  however, most browser end points allow resolution changes.
- The new track's frame rate is high enough to cause the codec's block rate to be
  exceeded.
- The new track is a video track and its raw or pre-encoded state differs from that of
  the original track.
- The new track is an audio track with a different number of channels from the
  original.
- Media sources that have built-in encoders — such as hardware encoders — may not be
  able to provide the negotiated codec. Software sources may not implement the
  negotiated codec.

## Examples

### Switching video cameras

```js
const localConnection = new RTCPeerConnection();
const remoteConnection = new RTCPeerConnection();
// Configuring these to use the WebRTC API can be explored at
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
const connections = [localConnection, remoteConnection];
function setCamera(selectedCamera) {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: {
          exact: selectedCamera,
        },
      },
    })
    .then((stream) => {
      const [videoTrack] = stream.getVideoTracks();
      connections.forEach((pc) => {
        const sender = pc
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        console.log("Found sender:", sender);
        sender.replaceTrack(videoTrack);
      });
    })
    .catch((err) => {
      console.error(`Error happened: ${err}`);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
