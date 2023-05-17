---
title: "BiquadFilterNode: BiquadFilterNode() constructor"
short-title: BiquadFilterNode()
slug: Web/API/BiquadFilterNode/BiquadFilterNode
page-type: web-api-constructor
browser-compat: api.BiquadFilterNode.BiquadFilterNode
---

{{APIRef("Web Audio API")}}

The **`BiquadFilterNode()`**
constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
creates a new {{domxref("BiquadFilterNode")}} object, which represents a simple
low-order filter.

## Syntax

```js-nolint
new BiquadFilterNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : An object with the following properties:

    - `type`

      - : One of the following strings. The meaning
        of the other options depends on the value of `type`.

        - `lowpass`

          - : The default. Allows frequencies below a cutoff frequency to pass through, and attenuates frequencies above the cutoff. This is a standard second-order resonant lowpass filter with 12dB/octave rolloff. With this type of filter, the meaning of the other options are as follows:

            - `Q`: controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
            - `frequency`: the cutoff frequency.
            - `gain`: not used.

        - `highpass`

          - : A highpass filter is the opposite of a lowpass filter.
            Frequencies above the cutoff frequency are passed through, but frequencies below the cutoff are attenuated. It implements a standard second-order resonant highpass filter with 12dB/octave rolloff. With this type of filter, the meaning of the other options are as follows:

            - `Q`: controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
            - `frequency`: the cutoff frequency.
            - `gain`: not used.

        - `bandpass`

          - : A bandpass filter allows a range of frequencies to pass
            through and attenuates the frequencies below and above this frequency range. It implements a second-order bandpass filter. With this type of filter, the meaning of the other options are as follows:

            - `Q`: controls the width of the band. The width becomes narrower as the Q value increases.
            - `frequency`: the center of the frequency band.
            - `gain`: not used.

        - `lowshelf`

          - : The lowshelf filter allows all frequencies through, but adds
            a boost (or attenuation) to the lower frequencies. It implements a second-order lowshelf filter. With this type of filter, the meaning of the other options are as follows:

            - `Q`: not used.
            - `frequency`: the upper limit of the frequencies where the boost, or attenuation, is applied.
            - `gain`: the boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.

        - `highshelf`

          - : The highshelf filter is the opposite of the lowshelf filter
            and allows all frequencies through, but adds a boost to the higher frequencies. It implements a second-order highshelf filter. With this type of filter, the meaning of the other options are as follows:

            - `Q`: not used.
            - `frequency`: the lower limit of the frequencies where the boost, or attenuation, is applied.
            - `gain`: the boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.

        - `peaking`

          - : The peaking filter allows all frequencies through, adding a
            boost, or attenuation, to a range of frequencies. With this type of filter, the meaning of the other options are as follows:

            - `Q`: the width of the band of frequencies that are boosted. A large value implies a narrow width.
            - `frequency`: the center frequency of the boost range.
            - `gain`: the boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.

        - `notch`

          - : The notch filter (also known as a band-stop, or band-rejection filter) is the opposite of a bandpass filter. It allows all frequencies through, except for a set of frequencies. With this type of filter, the meaning of the other options are as follows:

            - `Q`: the width of the band of frequencies that are attenuated. A large value implies a narrow width.
            - `frequency`: the center frequency of the attenuation range.
            - `gain`: not used.

        - `allpass`

          - : An allpass filter allows all frequencies through, but changes
            the phase relationship between the various frequencies. It implements a second-order allpass filter. With this type of filter, the meaning of the other options are as follows:

            - `Q`: the sharpness of the phase transition at the center frequency. A larger value implies a sharper transition and a larger group delay.
            - `frequency`: the frequency where the center of the phase transition occurs. Viewed another way, this is the frequency with maximal group delay.
            - `gain`: not used.

    - `Q`
      - : Defaults to 1. The meaning of this option depends on the value of `type`.
    - `detune`
      - : Defaults to 0.
    - `frequency`
      - : Defaults to 350.
    - `gain`
      - : Defaults to 0. The meaning of this option depends on the value of `type`.
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

### Return value

A new {{domxref("BiquadFilterNode")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
