---
title: MediaStreamTrackAudioSourceNode()
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
page-type: web-api-constructor
tags:
  - API
  - Audio
  - AudioSource
  - Interface
  - Media
  - MediaStreamTrack
  - MediaStreamTrackAudioSourceNode
  - Node
  - Reference
  - Web Audio
  - Web Audio API
  - sound
  - source
  - track
browser-compat: api.MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode
---
{{APIRef("Web Audio API")}}

The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)'s **`MediaStreamTrackAudioSourceNode()`** constructor creates and returns a new {{domxref("MediaStreamTrackAudioSourceNode")}} object whose audio is taken from the {{domxref("MediaStreamTrack")}} specified in the given options object.

Another way to create a `MediaStreamTrackAudioSourceNode` is to call the {{domxref("AudioContext.createMediaStreamTrackSource()")}} method, specifying the {{domxref("MediaStreamTrack")}} from which you want to obtain audio.

## Syntax

```js
new MediaStreamTrackAudioSourceNode(context, options)
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- `options`

  - : An object defining the properties you want the `MediaStreamTrackAudioSourceNode` to have:

    - `mediaStreamTrack`
      - : The {{domxref("MediaStreamTrack")}} from which to take audio data for this node's output.

### Return value

A new {{domxref("MediaStreamTrackAudioSourceNode")}} object representing the audio node whose media is obtained from the specified media track.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified `context` is not an {{domxref("AudioContext")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the specified {{domxref("MediaStreamTrack")}} isn't an audio track (that is, its {{domxref("MediaStreamTrack.kind", "kind")}} property isn't `audio`.

## Example

This example uses {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to obtain access to the user's camera, then creates a new {{domxref("MediaStreamAudioSourceNode")}} from the first audio track provided by the device.

```js
const audioCtx = new AudioContext();

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia (
    {
      audio: true,
      video: false
    }).then((stream) => {
      const options = {
        mediaStreamTrack: stream.getAudioTracks()[0]
      }

      const source = new MediaStreamTrackAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    }).catch((err) => {
      console.error(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log('new getUserMedia not supported on your browser!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
