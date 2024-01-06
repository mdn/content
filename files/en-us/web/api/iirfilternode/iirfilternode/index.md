---
title: "IIRFilterNode: IIRFilterNode() constructor"
short-title: IIRFilterNode()
slug: Web/API/IIRFilterNode/IIRFilterNode
page-type: web-api-constructor
browser-compat: api.IIRFilterNode.IIRFilterNode
---

{{APIRef("Web Audio API")}}

The **`IIRFilterNode()`** constructor
of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("IIRFilterNode")}} object which an {{domxref("AudioNode")}} processor
which implements a general infinite impulse response filter.

## Syntax

```js-nolint
new IIRFilterNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options`

  - : Options are as follows:

    - `feedforward`
      - : A sequence of feedforward coefficients.
    - `feedback`
      - : A sequence of feedback coefficients.
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

Unlike other nodes in the Web Audio API, the options passed into the IIR
filter upon creation are not optional. The filter needs these values to work and with
the vast range of filters available, there is no default.

### Return value

A new {{domxref("IIRFilterNode")}} object instance.

## Examples

```js
let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const iirFilter = new IIRFilterNode(audioCtx, {
  feedforward: feedForward,
  feedback: feedBackward,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
