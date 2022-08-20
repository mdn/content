---
title: AudioBuffer
slug: Web/API/AudioBuffer
page-type: web-api-interface
tags:
  - API
  - AudioBuffer
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.AudioBuffer
---
{{APIRef("Web Audio API")}}

The **`AudioBuffer`** interface represents a short audio asset residing in memory, created from an audio file using the {{ domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()") }} method, or from raw data using {{ domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()") }}. Once put into an AudioBuffer, the audio can then be played by being passed into an {{ domxref("AudioBufferSourceNode") }}.

Objects of these types are designed to hold small audio snippets, typically less than 45 s. For longer sounds, objects implementing the {{domxref("MediaElementAudioSourceNode")}} are more suitable. The buffer contains data in the following format: non-interleaved IEEE754 32-bit linear PCM with a nominal range between `-1` and `+1`, that is, a 32-bit floating point buffer, with each sample between -1.0 and 1.0. If the {{domxref("AudioBuffer")}} has multiple channels, they are stored in separate buffers.

## Constructor

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : Creates and returns a new `AudioBuffer` object instance.

## Properties

- {{domxref("AudioBuffer.sampleRate")}} {{ReadOnlyInline}}
  - : Returns a float representing the sample rate, in samples per second, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.length")}} {{ReadOnlyInline}}
  - : Returns an integer representing the length, in sample-frames, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.duration")}} {{ReadOnlyInline}}
  - : Returns a double representing the duration, in seconds, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.numberOfChannels")}} {{ReadOnlyInline}}
  - : Returns an integer representing the number of discrete audio channels described by the PCM data stored in the buffer.

## Methods

- {{domxref("AudioBuffer.getChannelData()")}}
  - : Returns a {{jsxref("Float32Array")}} containing the PCM data associated with the channel, defined by the `channel` parameter (with `0` representing the first channel).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : Copies the samples from the specified channel of the `AudioBuffer` to the `destination` array.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : Copies the samples to the specified channel of the `AudioBuffer`, from the `source` array.

## Example

The following simple example shows how to create an `AudioBuffer` and fill it with random white noise. You can find the full source code at our [webaudio-examples](https://github.com/mdn/webaudio-examples) repository; a [running live](https://mdn.github.io/webaudio-examples/audio-buffer/) version is also available.

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
const myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 3, audioCtx.sampleRate);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // This gives us the actual array that contains the data
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() is in [0; 1.0]
    // audio needs to be in [-1.0; 1.0]
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// Get an AudioBufferSourceNode.
// This is the AudioNode to use when we want to play an AudioBuffer
const source = audioCtx.createBufferSource();

// set the buffer in the AudioBufferSourceNode
source.buffer = myArrayBuffer;

// connect the AudioBufferSourceNode to the
// destination so we can hear the sound
source.connect(audioCtx.destination);

// start the source playing
source.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
