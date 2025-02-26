---
title: "OscillatorNode: OscillatorNode() constructor"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
page-type: web-api-constructor
browser-compat: api.OscillatorNode.OscillatorNode
---

{{APIRef("Web Audio API")}}

The **`OscillatorNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("OscillatorNode")}} object which is an {{domxref("AudioNode")}} that
represents a periodic waveform, like a sine wave, optionally setting the node's
properties' values to match values in a specified object.

If the default values of the properties are acceptable, you can optionally use the
{{domxref("BaseAudioContext.createOscillator()")}} factory method instead; see
[Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
new OscillatorNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : An object whose properties specify the initial values for the oscillator node's
    properties. Any properties omitted from the object will take on the default value
    as documented.

    - `type`
      - : The shape of the wave produced by the node. Valid values are
        `"sine"`, `"square"`, `"sawtooth"`,
        `"triangle"` and `"custom"`. The default is
        `"sine"`.
    - `detune`
      - : A detuning value (in cents) which will offset
        the `frequency` by the given amount. Its default is 0.
    - `frequency`
      - : The frequency (in [hertz](https://en.wikipedia.org/wiki/Hertz)) of the periodic
        waveform. Its default is 440.
    - `periodicWave`
      - : An arbitrary period waveform described by a {{domxref("PeriodicWave")}}
        object.
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

A new {{domxref("OscillatorNode")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
