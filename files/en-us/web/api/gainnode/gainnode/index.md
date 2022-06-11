---
title: GainNode()
slug: Web/API/GainNode/GainNode
page-type: web-api-constructor
tags:
  - API
  - Audio
  - Constructor
  - GainNode
  - Media
  - Reference
  - Web Audio API
browser-compat: api.GainNode.GainNode
---
{{APIRef("Web Audio API")}}

The **`GainNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("GainNode")}} object which is an {{domxref("AudioNode")}} that represents a
change in volume.

## Syntax

```js
new GainNode(context, options)
```

### Parameters

- `context`
  - : A reference to a {{domxref("BaseAudioContext")}}, e.g. an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Options are as follows:

    - `gain`
      - : The amount of gain to apply. This parameter is a- `rate`
        and it's nominal range is (-∞,+∞). The default is `1`.
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

A new {{domxref("GainNode")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
