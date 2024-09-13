---
title: "OfflineAudioContext: OfflineAudioContext() constructor"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
page-type: web-api-constructor
browser-compat: api.OfflineAudioContext.OfflineAudioContext
---

{{APIRef("Web Audio API")}}

The
**`OfflineAudioContext()`** constructor—part of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)—creates and returns a new
{{domxref("OfflineAudioContext")}} object instance, which can then be used to render
audio to an {{domxref("AudioBuffer")}} rather than to an audio output device.

## Syntax

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameters

You can specify the parameters for the `OfflineAudioContext()` constructor
as either the same set of parameters as are inputs into the
{{domxref("BaseAudioContext.createBuffer")}} method, or by passing those parameters in an
`options` object. Either way, the individual parameters are the same.

- `numberOfChannels`
  - : An integer specifying the number of channels the resulting
    {{domxref("AudioBuffer")}} should have.
- `length`
  - : An integer specifying the size of the buffer to create for the audio context, in
    sample-frames, where one sample-frame is a unit that can contain a single sample of
    audio data for every channel in the audio data. For example, a 5-second buffer with a
    `sampleRate` of 48000Hz would have a length of
    `5 * 48000 = 240000` sample-frames.
- `sampleRate`
  - : The sample-rate of the linear audio data in sample-frames per second. All user
    agents are required to support a range of 8000Hz to 96000Hz, and may support a wider
    range than that. The most commonly-used rate is 44100Hz, which is the sample rate used
    by CD audio.

It is important to note that, whereas you can create a new {{domxref("AudioContext")}}
using the {{domxref("AudioContext.AudioContext()", "AudioContext()")}} constructor
with no arguments, the `OfflineAudioContext()` constructor requires three
arguments, since it needs to create an `AudioBuffer`. This works in exactly
the same way as when you create a new {{domxref("AudioBuffer")}} with the
{{domxref("BaseAudioContext.createBuffer")}} method. For more detail, read [Audio buffers: frames, samples and channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) from our [Basic concepts](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) guide.

### Return value

A new {{domxref("OfflineAudioContext")}} object whose associated
`AudioBuffer` is configured as requested.

Like a regular `AudioContext`, an
`OfflineAudioContext` can be the target of events, therefore it implements
the {{domxref("EventTarget")}} interface.

## Examples

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
