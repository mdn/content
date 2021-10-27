---
title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
tags:
  - API
  - Audio
  - Constructor
  - MediaStreamAudioSourceNode
  - Reference
  - Web Audio API
browser-compat: api.MediaStreamAudioSourceNode.MediaStreamAudioSourceNode
---
{{APIRef("Web Audio API")}}

The [Web Audio
API](/en-US/docs/Web/API/Web_Audio_API)'s **`MediaStreamAudioSourceNode()`** constructor
creates and returns a new {{domxref("MediaStreamAudioSourceNode")}} object which uses
the first audio track of a given {{domxref("MediaStream")}} as its source.

> **Note:** Another way to create a
> `MediaStreamAudioSourceNode` is to call
> the{{domxref("AudioContext.createMediaStreamSource()")}} method, specifying the stream
> from which you want to obtain audio.

## Syntax

```js
audioSourceNode = new MediaStreamAudioSourceNode(context, options);
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to
    be associated with.
- `options`

  - : A {{domxref("MediaStreamAudioSourceOptions")}} object defining the properties you
    want the `MediaStreamAudioSourceNode` to have:

    {{page("/en-US/docs/Web/API/MediaStreamAudioSourceOptions", "Properties")}}

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
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
if (navigator.mediaDevices.getUserMedia) {
   navigator.mediaDevices.getUserMedia (
      // constraints: audio and video for this app
      {
         audio: true,
         video: false
      }).then(function(stream) {
        var options = {
          mediaStream : stream
        }

        var source = new MediaStreamAudioSourceNode(audioCtx, options);
        source.connect(audioCtx.destination);
      }).catch(function(err) {
       console.log('The following gUM error occurred: ' + err);
      });
} else {
  console.log('new getUserMedia not supported on your browser!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
