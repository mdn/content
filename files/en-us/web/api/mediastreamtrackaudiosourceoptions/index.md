---
title: MediaStreamTrackAudioSourceOptions
slug: Web/API/MediaStreamTrackAudioSourceOptions
tags:
  - API
  - Audio
  - Dictionary
  - Media
  - MediaStreamTrack
  - MediaStreamTrackAudioSourceOptions
  - Node
  - Options
  - Reference
  - Web Audio
  - Web Audio API
  - sound
browser-compat: api.MediaStreamTrackAudioSourceOptions
---
{{APIRef("Web Audio API")}}

The **`MediaStreamTrackAudioSourceOptions`** dictionary is used when specifying options to the {{domxref("MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode", "MediaStreamTrackAudioSourceNode()")}} constructor.

Note that this dictionary isn't needed when using the {{domxref("AudioContext.createMediaStreamTrackSource()")}} method.

## Properties

- {{domxref("MediaStreamTrackAudioSourceOptions.mediaStreamTrack", "mediaStreamTrack")}}
  - : The {{domxref("MediaStreamTrack")}} from which to take audio data for this node's output.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
