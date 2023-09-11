---
title: "DelayNode: DelayNode() constructor"
short-title: DelayNode()
slug: Web/API/DelayNode/DelayNode
page-type: web-api-constructor
browser-compat: api.DelayNode.DelayNode
---

{{APIRef("Web Audio API")}}

The **`DelayNode()`**
constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
creates a new {{domxref("DelayNode")}} object with a delay-line; an AudioNode
audio-processing module that causes a delay between the arrival of an input data, and
its propagation to the output.

## Syntax

```js-nolint
new DelayNode(context)
new DelayNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}} or {{domxref("OfflineAudioContext")}}.
- `options` {{optional_inline}}

  - : An object specifying the delay node options. Can contain the following members:

    - `delayTime`
      - : The initial delay time for the node, in seconds. The
        default is `0`.
    - `maxDelayTime`
      - : The maximum delay time for the node, in seconds.
        Defaults to `1`.
    - `channelCount`
      - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
        {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
        definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : Represents an enumerated value describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation`
      - : Represents an enumerated value describing the meaning of the channels. This
        interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)

### Return value

A new {{domxref("DelayNode")}} object instance.

## Examples

```js
const audioCtx = new AudioContext();
const delayNode = new DelayNode(audioCtx, {
  delayTime: 0.5,
  maxDelayTime: 2,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
