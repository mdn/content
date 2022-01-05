---
title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
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
var myAudioSource = new MediaElementAudioSourceNode(context, options);
```

### Parameters

- _context_
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- _options_

  - : A `MediaElementAudioSourceOptions` dictionary object defining the properties you want the `MediaElementAudioSourceNode` to have:

    - `mediaElement`: An {{domxref("HTMLMediaElement")}} that will be used as the source for the audio.
    - `channelCount`: Represents an integer used to determine how many channels are used when [up-mixing
      and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
      {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
      definition depend on the value of `channelCountMode`.
    - `channelCountMode`: Represents an enumerated value describing the way channels must be matched between
      the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
      information including default values.)
    - `channelInterpretation`: Represents an enumerated value describing the meaning of the channels. This
      interpretation will define how audio [up-mixing
      and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
      The possible values are `"speakers"` or `"discrete"`. (See
      {{domxref("AudioNode.channelCountMode")}} for more information including default
      values.)

### Return value

A new {{domxref("MediaElementAudioSourceNode")}} object instance.

## Example

```js
var ac = new AudioContext();
var mediaElement = document.createElement('audio');

var options = {
  mediaElement : mediaElement
}

var myAudioSource = new MediaElementAudioSourceNode(ac, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
