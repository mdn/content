---
title: "AudioBuffer: AudioBuffer() constructor"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
page-type: web-api-constructor
browser-compat: api.AudioBuffer.AudioBuffer
---

{{APIRef("Web Audio API")}}

The **`AudioBuffer`** constructor of
the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("AudioBuffer")}} object.

## Syntax

```js-nolint
new AudioBuffer(options)
```

### Parameters

- `options`

  - : Options are as follows:

    - `length`
      - : The size of the audio buffer in sample-frames. To determine
        the `length` to use for a specific number of seconds of audio, use
        `numSeconds * sampleRate`.
    - `numberOfChannels`
      - : The number of channels for the buffer. The
        default is 1, and all user agents are required to support at least 32 channels.
    - `sampleRate`
      - : The sample rate in Hz for the buffer. The default is
        the sample rate of the `context` used in constructing this object. User
        agents are required to support sample rates from 8,000 Hz to 96,000 Hz (but are
        allowed to go farther outside this range).
    - `channelCount`
      - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node.
        (See {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
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

#### Deprecated parameters

- `context` {{Deprecated_Inline}}
  - : A reference to an {{domxref("AudioContext")}}. This parameter was removed from the
    spec.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one or more of the options are negative or otherwise has an invalid value
    (such as `numberOfChannels` being higher than supported,
    or a `sampleRate` outside the nominal range).
- {{jsxref("RangeError")}}
  - : Thrown if there isn't enough memory available to allocate the buffer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
