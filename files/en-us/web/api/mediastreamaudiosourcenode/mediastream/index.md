---
title: "MediaStreamAudioSourceNode: mediaStream property"
short-title: mediaStream
slug: Web/API/MediaStreamAudioSourceNode/mediaStream
page-type: web-api-instance-property
browser-compat: api.MediaStreamAudioSourceNode.mediaStream
---

{{APIRef("Web Audio API")}}

The {{domxref("MediaStreamAudioSourceNode")}} interface's
read-only **`mediaStream`** property indicates the
{{domxref("MediaStream")}} that contains the audio track from which the node is
receiving audio.

This stream was specified when the node was first created,
either using the {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode",
  "MediaStreamAudioSourceNode()")}} constructor or the
{{domxref("AudioContext.createMediaStreamSource()")}} method.

## Value

A {{domxref("MediaStream")}} representing the stream which contains the
{{domxref("MediaStreamTrack")}} serving as the source of audio for the node.

The {{Glossary("user agent")}} uses the first audio track it finds on the specified
stream as the audio source for this node. However, there is no way to be certain which
track that will be on multi-track streams. If the specific track matters to you, or you
need to have access to the track itself, you should use a
{{domxref("MediaStreamTrackAudioSourceNode")}} instead.

## Examples

```js
const audioCtx = new window.AudioContext();
let options = {
  mediaStream: stream,
};

let source = new MediaStreamAudioSourceNode(audioCtx, options);
console.log(source.mediaStream);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
