---
title: RTCRtpSender.replaceTrack()
slug: Web/API/RTCRtpSender/replaceTrack
tags:
  - Audio
  - Media
  - Method
  - RTCRtpSender
  - RTP
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - replace
  - replaceTrack
  - track
browser-compat: api.RTCRtpSender.replaceTrack
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpSender")}} method
**`replaceTrack()`** replaces the track currently being used
as the sender's source with a new {{domxref("MediaStreamTrack")}}.

The new
track must be of the same media kind (audio, video, etc) and switching the track should
not require negotiation.

Among the use cases for `replaceTrack()` is the common need to switch
between the rear- and front-facing cameras on a phone. With `replaceTrack()`,
you can have a track object for each camera and switch between the two as needed. See
the example {{anch("Switching cameras")}} below.

## Syntax

```js
trackReplacedPromise = sender.replaceTrack(newTrack);
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
allowed (see {{anch("Things that require negotiation")}}).

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
- `TypeError` {{domxref("DOMException")}}
  - : Returned if the new track's `kind` doesn't match the original track.

## Usage notes

### Things that trigger negotiation

Not all track replacements require renegotiation. In fact, even changes that seem huge
can be done without requiring negotation. Here are the changes that can trigger
negotiaton:

- The new track has a resolution which is outside the bounds of the current track;
  that is, the new track is either wider or taller than the current one.
- The new track's frame rate is high enough to cause the codec's block rate to be
  exceeded.
- The new track is a video track and its raw or pre-encoded state differs from that of
  the original track.
- The new track is an audio track with a different number of channels fom the
  original.
- Media sources that have built-in encoders — such as hardware encoders — may not be
  able to provide the negotiated codec. Software sources may not implement the
  negotiated codec.

## Examples

### Switching video cameras

    // example to change video camera, suppose selected value saved into window.selectedCamera

    navigator.mediaDevices
      .getUserMedia({
        video: {
          deviceId: {
            exact: window.selectedCamera
          }
        }
      })
      .then(function(stream) {
        let videoTrack = stream.getVideoTracks()[0];
        PCs.forEach(function(pc) {
          var sender = pc.getSenders().find(function(s) {
            return s.track.kind == videoTrack.kind;
          });
          console.log('found sender:', sender);
          sender.replaceTrack(videoTrack);
        });
      })
      .catch(function(err) {
        console.error('Error happens:', err);
      });

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
