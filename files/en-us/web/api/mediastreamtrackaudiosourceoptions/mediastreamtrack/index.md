---
title: MediaStreamTrackAudioSourceOptions.mediaStreamTrack
slug: Web/API/MediaStreamTrackAudioSourceOptions/mediaStreamTrack
tags:
  - API
  - Audio
  - Media
  - MediaStreamTrack
  - MediaStreamTrackAudioSourceNode
  - Node
  - Options
  - Property
  - Reference
  - Web Audio
  - Web Audio API
  - sound
  - source
  - track
browser-compat: api.MediaStreamTrackAudioSourceOptions.mediaStreamTrack
---
{{APIRef("Web Audio API")}}

The {{domxref("MediaStreamTrackAudioSourceOptions")}}
dictionary's **`mediaStreamTrack`** property must contain a
reference to the {{domxref("MediaStreamTrack")}} from which the
`MediaStreamTrackAudioSourceNode` being created using the
{{domxref("MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode",
    "MediaStreamTrackAudioSourceNode()")}} constructor.

## Syntax

```js
mediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: audioSourceTrack;
}

mediaStreamTrackAudioSourceOptions.mediaStreamTrack = audioSourceTrack;
```

### Value

A {{domxref("MediaStreamTrack")}} from which the audio output of the new
`MediaStreamTrackAudioSourceNode` will be taken.

## Example

{{page("/en-US/docs/Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode",
  "Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
