---
title: "MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode() constructor"
short-title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
page-type: web-api-constructor
browser-compat: api.MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode
---

{{APIRef("Web Audio API")}}

The **`MediaStreamAudioDestinationNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("MediaStreamAudioDestinationNode")}} object instance.

## Syntax

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### Parameters

- `context`
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- `options` {{optional_inline}}

  - : An object defining the properties you want the `MediaStreamAudioDestinationNode` to have:

    - `channelCount`
      - : An integer used to determine how many channels are used when
        [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        connections to any inputs to the node. (See
        {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
        definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : A string describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation`
      - : A string describing the meaning of the channels. This interpretation will define how audio
        [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        will happen. The possible values are `"speakers"` or `"discrete"`. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)

## Examples

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
