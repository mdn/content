---
title: MediaStream.getTracks()
slug: Web/API/MediaStream/getTracks
tags:
  - API
  - Experimental
  - Media Streams API
  - MediaStream
  - MediaStreamTrack
  - Method
  - Reference
  - getTracks
browser-compat: api.MediaStream.getTracks
---
{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The **_`getTracks()`_** method of the
{{domxref("MediaStream")}} interface returns a sequence that represents all the
{{domxref("MediaStreamTrack")}} objects in this
stream's [`track set`](https://www.w3.org/TR/mediacapture-streams/#track-set),
regardless of {{domxref("MediaStreamTrack.kind")}}.

## Syntax

```js
var mediaStreamTracks = mediaStream.getTracks()
```

### Parameters

None.

### Return value

An array of {{domxref("MediaStreamTrack")}} objects.

## Example

```js
navigator.mediaDevices.getUserMedia({audio: false, video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;
  // Stop the stream after 5 seconds
  setTimeout(() => {
    const tracks = mediaStream.getTracks()
    tracks[0].stop()
  }, 5000)
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
