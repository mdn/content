---
title: "MediaStreamAudioSourceNode: MediaStreamAudioSourceNode() constructor"
short-title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
page-type: web-api-constructor
browser-compat: api.MediaStreamAudioSourceNode.MediaStreamAudioSourceNode
---

{{APIRef("Web Audio API")}}

The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)'s **`MediaStreamAudioSourceNode()`** constructor
creates and returns a new {{domxref("MediaStreamAudioSourceNode")}} object which uses
the first audio track of a given {{domxref("MediaStream")}} as its source.

> **Note:** Another way to create a
> `MediaStreamAudioSourceNode` is to call
> the {{domxref("AudioContext.createMediaStreamSource()")}} method, specifying the stream
> from which you want to obtain audio.

## Syntax

```js-nolint
new MediaStreamAudioSourceNode(context, options)
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to
    be associated with.
- `options`

  - : An object defining the properties you want the `MediaStreamAudioSourceNode` to have:

    - `mediaStream`
      - : A required property which specifies the {{domxref("MediaStream")}} from which to obtain audio for the node.

### Return value

A new {{domxref("MediaStreamAudioSourceNode")}} object representing the audio node
whose media is obtained from the specified source stream.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the specified {{domxref("MediaStream")}} does not contain any audio tracks.

## Examples

This example uses {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to obtain
access to the user's camera, then creates a new
{{domxref("MediaStreamAudioSourceNode")}} from its {{domxref("MediaStream")}}.

```js
// define variables
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia(
      // constraints: audio and video for this app
      {
        audio: true,
        video: false,
      },
    )
    .then((stream) => {
      const options = {
        mediaStream: stream,
      };

      const source = new MediaStreamAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    })
    .catch((err) => {
      console.error(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log("new getUserMedia not supported on your browser!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
