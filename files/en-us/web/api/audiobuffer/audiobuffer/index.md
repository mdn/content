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

#### Deprecated parameters

The following parameters were previously part of the `AudioBufferOptions` interface in older versions of the Web Audio API specification. They are no longer in use.

- `channelCount` {{Deprecated_Inline}}
  - : Used to define the number of channels for up-mixing and down-mixing connections to inputs. See {{domxref("AudioNode.channelCount")}}.
- `channelCountMode` {{Deprecated_Inline}}
  - : Described the matching of channels between node inputs and outputs. See {{domxref("AudioNode.channelCountMode")}}.
- `channelInterpretation` {{Deprecated_Inline}}
  - : Interpreted the meaning of channels for up-mixing and down-mixing, with possible values `"speakers"` or `"discrete"`. See {{domxref("AudioNode.channelInterpretation")}}.
- `context` {{Deprecated_Inline}}
  - : A reference to an {{domxref("AudioContext")}}. This parameter was removed from the spec.

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
