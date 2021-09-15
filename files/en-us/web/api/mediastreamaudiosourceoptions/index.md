---
title: MediaStreamAudioSourceOptions
slug: Web/API/MediaStreamAudioSourceOptions
tags:
  - API
  - Audio
  - AudioNode
  - Dictionary
  - Media
  - MediaStream
  - MediaStreamAudioSourceOptions
  - Options
  - Reference
  - Web
  - Web Audio
  - Web Audio API
  - stream
browser-compat: api.MediaStreamAudioSourceOptions
---
{{APIRef("Web Audio API")}}

The **`MediaStreamAudioSourceOptions`** dictionary provides configuration options used when creating a {{domxref("MediaStreamAudioSourceNode")}} using its constructor.

It is not needed when using the {{domxref("AudioContext.createMediaStreamSource()")}} method.

## Properties

- {{domxref("MediaStreamAudioSourceOptions.mediaStream", "mediaStream")}}
  - : A required property which specifies the {{domxref("MediaStream")}} from which to obtain audio for the node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
