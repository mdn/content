---
title: "OfflineAudioContext: OfflineAudioContext() constructor"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
page-type: web-api-constructor
browser-compat: api.OfflineAudioContext.OfflineAudioContext
---

{{APIRef("Web Audio API")}}

The
**`OfflineAudioContext()`** constructor creates and returns a new
{{domxref("OfflineAudioContext")}} object instance, which can then be used to render
audio to an {{domxref("AudioBuffer")}} rather than to an audio output device.

## Syntax

```js-nolint
new OfflineAudioContext(options)
new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameters

- `numberOfChannels`
  - : An integer specifying the number of channels the resulting
    {{domxref("AudioBuffer")}} should have.
- `length`
  - : An integer specifying the size of the buffer to create for the audio context, in
    sample-frames, where one sample-frame is a unit that can contain a single sample of
    audio data for every channel in the audio data. For example, a 5-second buffer with a
    `sampleRate` of 48000Hz would have a length of
    `5 * 48000 = 240000` sample-frames.
- `renderSizeHint` {{optional_inline}}
  - : Specifies a render quantum size for your audio context as a number of audio frames (see {{domxref("BaseAudioContext.renderQuantumSize")}} for more information). Possible values are:
    - `default`
      - : Uses the default value of `128`.
    - `hardware`
      - : Asks the browser to choose a suitable size for the underlying hardware. There is no concept of hardware for an `OfflineAudioContext`, so specifying `hardware` in this case is equivalent to `default`.
    - An integer
      - : A specific number of frames between `1` and 6 times the context's `sampleRate`.
- `sampleRate`
  - : The sample-rate of the linear audio data in sample-frames per second. All user
    agents are required to support a range of 8000Hz to 96000Hz, and may support a wider
    range than that. The most commonly-used rate is 44100Hz, which is the sample rate used
    by CD audio.

You can specify the parameters for the `OfflineAudioContext()` constructor as direct arguments or properties of an `options` object. Note that you can only specify a `renderSizeHint` value in an `options` object. When using direct arguments, you can only specify `numberOfChannels`, `length`, and `sampleRate`.

Unlike the {{domxref("AudioContext.AudioContext()", "AudioContext()")}} constructor, where you specify no arguments if wished, the `OfflineAudioContext()` constructor requires at least three arguments, since it needs to create an {{domxref("AudioBuffer")}}. Internally, this works the same as when you create a new {{domxref("AudioBuffer")}} with the {{domxref("BaseAudioContext.createBuffer()")}} method.

### Return value

A new {{domxref("OfflineAudioContext")}} object whose associated `AudioBuffer` is configured as requested.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified [`renderSizeHint`](#rendersizehint) is an integer outside the range of `1` and 6 times the context's `sampleRate`.

## Examples

### Basic usage

```js
const offlineCtx = new OfflineAudioContext({
  numberOfChannels: 2,
  length: 44100 * 40,
  sampleRate: 44100,
});
const source = offlineCtx.createBufferSource();
// …
```

For a full working example, see our [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/)
GitHub repo (see the [source code](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/index.html) too.)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Audio buffers: frames, samples and channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels)
