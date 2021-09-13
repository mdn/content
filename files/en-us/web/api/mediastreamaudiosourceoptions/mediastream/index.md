---
title: MediaStreamAudioSourceOptions.mediaStream
slug: Web/API/MediaStreamAudioSourceOptions/mediaStream
tags:
  - API
  - Audio
  - Media
  - MediaStream
  - MediaStreamAudioSourceOptions
  - MediaStreamTrack
  - Options
  - Property
  - Reference
  - Web
  - Web Audio
  - Web Audio API
browser-compat: api.MediaStreamAudioSourceOptions.mediaStream
---
{{APIRef("Web Audio API")}}

The {{domxref("MediaStreamAudioSourceOptions")}} dictionary's
**`mediaStream`** property must specify the
{{domxref("MediaStream")}} from which to retrieve audio data when instantiating a
`MediaStreamAudioSourceNode` using the
{{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode",
    "MediaStreamAudioSourceNode()")}} constructor.

## Syntax

```js
mediaStreamAudioSourceOptions = {
  mediaStream: audioSourceStream;
}

mediaStreamAudioSourceOptions.mediaStream = audioSourceStream;
```

### Value

A {{domxref("MediaStream")}} representing the stream from which to use a
{{domxref("MediaStreamTrack")}} as the source of audio for the node.

## Example

{{page("/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode",
  "Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
