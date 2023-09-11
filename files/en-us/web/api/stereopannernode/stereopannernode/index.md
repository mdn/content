---
title: "StereoPannerNode: StereoPannerNode() constructor"
short-title: StereoPannerNode()
slug: Web/API/StereoPannerNode/StereoPannerNode
page-type: web-api-constructor
browser-compat: api.StereoPannerNode.StereoPannerNode
---

{{APIRef("Web Audio API")}}

The **`StereoPannerNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("StereoPannerNode")}} object which is an {{domxref("AudioNode")}} that represents a simple stereo panner node that can be used to pan an audio stream left or right.

## Syntax

```js-nolint
new StereoPannerNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Options are as follows:

    - `pan`
      - : A floating point number in the range \[-1,1] indicating the position of an {{domxref("AudioNode")}} in an output image.
        The value -1 represents full left and 1 represents full right.
        The default value is `0`.
    - `channelCount`
      - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node.
        (See {{domxref("AudioNode.channelCount")}} for more information.)
        Its usage and precise definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : Represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.
        (See {{domxref("AudioNode.channelCountMode")}} for more information including default values.)
    - `channelInterpretation`
      - : Represents an enumerated value describing the meaning of the channels.
        This interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`.
        (See {{domxref("AudioNode.channelCountMode")}} for more information including default values.)

### Return value

A new {{domxref("StereoPannerNode")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
