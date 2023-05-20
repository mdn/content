---
title: "MediaElementAudioSourceNode: mediaElement property"
short-title: mediaElement
slug: Web/API/MediaElementAudioSourceNode/mediaElement
page-type: web-api-instance-property
browser-compat: api.MediaElementAudioSourceNode.mediaElement
---

{{APIRef("Web Audio API")}}

The {{domxref("MediaElementAudioSourceNode")}} interface's
read-only **`mediaElement`** property indicates the
{{domxref("HTMLMediaElement")}} that contains the audio track from which the node is
receiving audio.

This stream was specified when the node was first created,
either using the {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode",
  "MediaElementAudioSourceNode()")}} constructor or the
{{domxref("AudioContext.createMediaElementSource()")}} method.

## Value

An {{domxref("HTMLMediaElement")}} representing the element which contains the source
of audio for the node.

## Examples

```js
const audioCtx = new window.AudioContext();
const audioElem = document.querySelector("audio");

let options = {
  mediaElement: audioElem,
};

let source = new MediaElementAudioSourceNode(audioCtx, options);
console.log(source.mediaElement);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
