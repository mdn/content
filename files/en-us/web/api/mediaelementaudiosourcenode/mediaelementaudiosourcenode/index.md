---
title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
page-type: web-api-constructor
tags:
  - API
  - Audio
  - Constructor
  - MediaElementAudioSourceNode
  - Reference
  - Web Audio API
browser-compat: api.MediaElementAudioSourceNode.MediaElementAudioSourceNode
---
{{APIRef("Web Audio API")}}

The **`MediaElementAudioSourceNode()`** constructor creates a new {{domxref("MediaElementAudioSourceNode")}} object instance.

## Syntax

```js
new MediaElementAudioSourceNode(context, options)
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- `options`
  - : An object defining the properties you want the `MediaElementAudioSourceNode` to have:
    - `mediaElement`
      - : An {{domxref("HTMLMediaElement")}} that will be used as the source for the audio.
    - `channelCount`
      - : An integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
        {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
        definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : A string describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation`
      - : A string describing the meaning of the channels. This
        interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)

### Return value

A new {{domxref("MediaElementAudioSourceNode")}} object instance.

## Examples

```js
const ac = new AudioContext();
const mediaElement = document.createElement('audio');

const myAudioSource = new MediaElementAudioSourceNode(ac, {
  mediaElement,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
