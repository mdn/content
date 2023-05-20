---
title: "AnalyserNode: AnalyserNode() constructor"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
page-type: web-api-constructor
browser-compat: api.AnalyserNode.AnalyserNode
---

{{APIRef("'Web Audio API'")}}

The **`AnalyserNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("AnalyserNode")}} object instance.

## Syntax

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}} or {{domxref("OfflineAudioContext")}}.
- `options` {{optional_inline}}

  - : An object with the following properties, all optional:

    - `fftSize`
      - : The desired initial size of the [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) for [frequency-domain](https://en.wikipedia.org/wiki/Frequency_domain) analysis.
        The default is `2048`.
    - `maxDecibels`
      - : The desired initial maximum power in [dB](https://en.wikipedia.org/wiki/Decibel) for FFT analysis.
        The default is `-30`.
    - `minDecibels`
      - : The desired initial minimum power in dB for FFT analysis.
        The default is `-100`.
    - `smoothingTimeConstant`
      - : The desired initial smoothing constant for the FFT analysis. The default is `0.8`.
    - `channelCount`
      - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
        {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
        definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : Represents an [enumerated](/en-US/docs/Glossary/Enumerated) value describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation`
      - : Represents an enumerated value describing the meaning of the channels. This
        interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BaseAudioContext.createAnalyser()")}}, the equivalent factory method
