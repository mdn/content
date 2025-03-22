---
title: "ChannelMergerNode: ChannelMergerNode() constructor"
short-title: ChannelMergerNode()
slug: Web/API/ChannelMergerNode/ChannelMergerNode
page-type: web-api-constructor
browser-compat: api.ChannelMergerNode.ChannelMergerNode
---

{{APIRef("Web Audio API")}}

The **`ChannelMergerNode()`** constructor creates a new {{domxref("ChannelMergerNode")}} object instance.

## Syntax

```js-nolint
new ChannelMergerNode(context)
new ChannelMergerNode(context, options)
```

### Parameters

- `context`
  - : A {{domxref("BaseAudioContext")}} representing the audio context you want the node to be associated with.
- `options` {{optional_inline}}
  - : An object defining the properties you want the `ChannelMergerNode` to have:
    - `numberOfInputs` {{optional_inline}}
      - : A number defining the number of inputs the {{domxref("ChannelMergerNode")}} should have. If not specified, the default value used is 6.
    - `channelCount` {{optional_inline}}
      - : An integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node.
        (See {{domxref("AudioNode.channelCount")}} for more information.)
        Its usage and precise definition depend on the value of `channelCountMode`.
    - `channelCountMode` {{optional_inline}}
      - : A string describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation` {{optional_inline}}
      - : A string describing the meaning of the channels.
        This interpretation will define how audio
        [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`.
        (See {{domxref("AudioNode.channelCountMode")}} for more information including default values.)

### Return value

A new {{domxref("ChannelMergerNode")}} object instance.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if an option such as `channelCount` or `channelCountMode` has been given an invalid value.

## Examples

```js
const ac = new AudioContext();

const options = {
  numberOfInputs: 2,
};

const myMerger = new ChannelMergerNode(ac, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
