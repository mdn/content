---
title: "WaveShaperNode: WaveShaperNode() constructor"
short-title: WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
page-type: web-api-constructor
browser-compat: api.WaveShaperNode.WaveShaperNode
---

{{APIRef("Web Audio API")}}

The **`WaveShaperNode()`** constructor
of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("WaveShaperNode")}} object which is an {{domxref("AudioNode")}} that
represents a non-linear distorter.

## Syntax

```js-nolint
new WaveShaperNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Options are as follows:

    - `curve`
      - : The shaping curve used for the waveshaping effect. The input
        signal is nominally within the range \[-1;1].
    - `oversample`
      - : Specifies what type of oversampling (if any) should be
        used when applying the shaping curve. Valid values are '`none`',
        '`2x`', or '`4x`'. The default is '`none`'.
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

A new {{domxref("WaveShaperNode")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
