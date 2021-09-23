---
title: MediaStreamAudioDestinationNode.stream
slug: Web/API/MediaStreamAudioDestinationNode/stream
tags:
  - API
  - Audio
  - MediaStreamAudioDestinationNode
  - Property
  - Reference
  - Web Audio API
  - stream
browser-compat: api.MediaStreamAudioDestinationNode.stream
---
{{ APIRef("Web Audio API") }}

The `stream` property of the {{ domxref("AudioContext") }} interface represents a {{domxref("MediaStream")}} containing a single audio {{domxref("MediaStreamTrack")}} with the same number of channels as the node itself.

You can use this property to get a stream out of the audio graph and feed it into another construct, such as a [Media Recorder](/en-US/docs/Web/API/MediaStream_Recording_API).

## Syntax

```js
var audioCtx = new AudioContext();
var destination = audioCtx.createMediaStreamDestination();
var myStream = destination.stream;
```

### Value

A {{domxref("MediaStream")}} containing a single audio track. The audio track is a {{domxref("MediaStreamTrack")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio`.

## Example

See [`AudioContext.createMediaStreamDestination()`](/en-US/docs/Web/API/AudioContext/createMediaStreamDestination#examples) for example code that creates a `MediaStreamAudioDestinationNode` and uses its `stream` property as a source for audio to be recorded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
