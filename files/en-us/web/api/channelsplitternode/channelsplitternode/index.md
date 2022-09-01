---
title: ChannelSplitterNode()
slug: Web/API/ChannelSplitterNode/ChannelSplitterNode
page-type: web-api-constructor
tags:
  - API
  - Audio
  - ChannelSplitterNode
  - Constructor
  - Reference
  - Splitter
  - Web Audio
  - Web Audio API
browser-compat: api.ChannelSplitterNode.ChannelSplitterNode
---
{{APIRef("Web Audio API")}}

The **`ChannelSplitterNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("ChannelSplitterNode")}} object instance, representing a node that splits the input into a separate output for each of the source node's audio channels.

## Syntax

```js
new ChannelSplitterNode(context)
new ChannelSplitterNode(context, options)
```

### Parameters

- `context`
  - : A {{domxref("BaseAudioContext")}} representing the audio context you want the node to be associated with.
- `options` {{optional_inline}}

  - : An object defining the properties you want the `ChannelSplitterNode` to have:
    - `numberOfOutputs` {{optional_inline}}
      - : A number defining the number of inputs the {{domxref("ChannelSplitterNode")}} should have. If not specified, the default value used is 6.
    - `channelCount` {{optional_inline}}
      - : An integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node.
        (See {{domxref("AudioNode.channelCount")}} for more information.)
        Its usage and precise definition depend on the value of `channelCountMode`.
    - `channelCountMode` {{optional_inline}}
      - : A string describing the way channels must be matched between the node's inputs and outputs.
        (See {{domxref("AudioNode.channelCountMode")}} for more information including default values.)
    - `channelInterpretation` {{optional_inline}}
      - : A string describing the meaning of the channels.
        This interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`.
        (See {{domxref("AudioNode.channelCountMode")}} for more information including default values.)

### Return value

A new {{domxref("ChannelSplitterNode")}} object instance.

## Examples

```js
const ac = new AudioContext();

const options = {
  numberOfOutputs : 2
}

const mySplitter = new ChannelSplitterNode(ac, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
