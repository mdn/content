---
title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
tags:
  - API
  - Audio
  - Constructor
  - MediaStreamAudioDestinationNode
  - Reference
  - Web Audio API
browser-compat: api.MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode
---
{{APIRef("Web Audio API")}}

The **`MediaStreamAudioDestinationNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("MediaStreamAudioDestinationNode")}} object instance.

## Syntax

```js
var myAudioDest = new MediaStreamAudioDestinationNode(context, options);
```

### Parameters

- _context_
  - : An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.
- _options {{optional_inline}}_

  - : An object defining the properties you want the `MediaStreamAudioDestinationNode` to have:

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

A new {{domxref("MediaStreamAudioDestinationNode")}} object instance.

## Example

```js
var ac = new AudioContext();

var myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
