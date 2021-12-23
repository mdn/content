---
title: ChannelMergerNode()
slug: Web/API/ChannelMergerNode/ChannelMergerNode
tags:
  - API
  - Audio
  - ChannelMergerNode
  - Constructor
  - Reference
  - Web Audio API
browser-compat: api.ChannelMergerNode.ChannelMergerNode
---
{{APIRef("Web Audio API")}}

The **`ChannelMergerNode()`** constructor creates a new {{domxref("ChannelMergerNode")}} object instance.

## Syntax

```js
var myNode = new ChannelMergerNode(context, options);
```

### Parameters

- _context_
  - : A {{domxref("BaseAudioContext")}} representing the audio context you want the node to be associated with.
- _options_ {{optional_inline}}

  - : A [`ChannelMergerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-ChannelMergerOptions) dictionary object defining the properties you want the `ChannelMergerNode` to have:

    - `numberOfInputs`: A number defining the number of inputs the {{domxref("ChannelMergerNode")}} should have. If not specified, the default value used is 6.
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

A new {{domxref("ChannelMergerNode")}} object instance.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if an option such as `channelCount` or `channelCountMode` has been given an invalid value.

## Example

    var ac = new AudioContext();

    var options = {
      numberOfInputs : 2
    }

    var myMerger = new ChannelMergerNode(ac, options);

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
