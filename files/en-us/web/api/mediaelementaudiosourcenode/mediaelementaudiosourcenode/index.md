---
title: "MediaElementAudioSourceNode: MediaElementAudioSourceNode() constructor"
short-title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
page-type: web-api-constructor
browser-compat: api.MediaElementAudioSourceNode.MediaElementAudioSourceNode
---

{{APIRef("Web Audio API")}}

The **`MediaElementAudioSourceNode()`** constructor creates a new {{domxref("MediaElementAudioSourceNode")}} object instance.

## Syntax

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- `options`
  - : An object defining the properties you want the `MediaElementAudioSourceNode` to have:
    - `mediaElement`
      - : An {{domxref("HTMLMediaElement")}} that will be used as the source for the audio.

### Return value

A new {{domxref("MediaElementAudioSourceNode")}} object instance.

## Examples

```js
const ac = new AudioContext();
const mediaElement = document.createElement("audio");

const myAudioSource = new MediaElementAudioSourceNode(ac, {
  mediaElement,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
