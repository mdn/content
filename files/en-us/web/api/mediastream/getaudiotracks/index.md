---
title: MediaStream.getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
tags:
  - API
  - Audio
  - Experimental
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStream
  - MediaStreamTrack
  - Method
  - Reference
  - getAudioTracks
  - track
browser-compat: api.MediaStream.getAudioTracks
---
{{APIRef("Media Capture and Streams")}}

The **`getAudioTracks()`** method of the
{{domxref("MediaStream")}} interface returns a sequence that represents all the
{{domxref("MediaStreamTrack")}} objects in this
stream's [`track set`](https://www.w3.org/TR/mediacapture-streams/#track-set) where {{domxref("MediaStreamTrack.kind")}}
is `audio`.

## Syntax

```js
var mediaStreamTracks = mediaStream.getAudioTracks()
```

### Parameters

None.

### Return value

An array of {{domxref("MediaStreamTrack")}} objects, one for each audio track contained
in the stream. Audio tracks are those tracks whose {{domxref("MediaStreamTrack.kind",
  "kind")}} property is `audio`. The array is empty if the stream contains no
audio tracks.

> **Note:** The order of the returned tracks is not defined by the
> specification and may, in fact, change from one call to `getAudioTracks()`
> to the next.

Early versions of this API included a special `AudioStreamTrack` interface
which was used as the type for each entry in the list of audio streams; however, this
has since been merged into the main {{domxref("MediaStreamTrack")}} interface.

## Example

This example gets a webcam's audio and video in a stream using
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, attaches the stream to a
{{HTMLElement("video")}} element, then sets a timer that, upon expiring, will stop the
first audio track found on the stream.

```js
navigator.mediaDevices.getUserMedia({audio: true, video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;
  // Stop the audio stream after 5 seconds
  setTimeout(() => {
    const tracks = mediaStream.getAudioTracks()
    tracks[0].stop()
  }, 5000)
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
