---
title: "BaseAudioContext: createBuffer() method"
short-title: createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createBuffer
---

{{ APIRef("Web Audio API") }}

The `createBuffer()` method of the {{ domxref("BaseAudioContext") }}
Interface is used to create a new, empty {{ domxref("AudioBuffer") }} object, which
can then be populated by data, and played via an {{ domxref("AudioBufferSourceNode")}}.

For more details about audio buffers, check out the {{ domxref("AudioBuffer") }}
reference page.

> **Note:** `createBuffer()` used to be able to take compressed
> data and give back decoded samples, but this ability was removed from the specification,
> because all the decoding was done on the main thread, so
> `createBuffer()` was blocking other code execution. The asynchronous method
> `decodeAudioData()` does the same thing — takes compressed audio, such as an
> MP3 file, and directly gives you back an {{ domxref("AudioBuffer") }} that you can
> then play via an {{ domxref("AudioBufferSourceNode") }}. For simple use cases
> like playing an MP3, `decodeAudioData()` is what you should be using.

## Syntax

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### Parameters

> **Note:** For an in-depth explanation of how audio buffers work, and
> what these parameters mean, read [Audio buffers: frames, samples and channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) from our Basic concepts guide.

- `numOfChannels`
  - : An integer representing the number of channels this buffer should have. The default
    value is 1, and all user agents must support at least 32 channels.
- `length`
  - : An integer representing the size of the buffer in sample-frames (where each
    sample-frame is the size of a sample in bytes multiplied by
    `numOfChannels`). To determine the `length` to use for a
    specific number of seconds of audio, use `numSeconds * sampleRate`.
- `sampleRate`
  - : The sample rate of the linear audio data in sample-frames per second. All browsers
    must support sample rates in at least the range 8,000 Hz to 96,000 Hz.

### Return value

An {{domxref("AudioBuffer")}} configured based on the specified options.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one or more of the options are negative or otherwise has an invalid value (such as
    `numberOfChannels` being higher than supported, or a
    `sampleRate` outside the nominal range).
- {{jsxref("RangeError")}}
  - : Thrown if there isn't enough memory available to allocate the buffer.

## Examples

First, a couple of simple trivial examples, to help explain how the parameters are
used:

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

If you use this call, you will get a stereo buffer (two channels), that, when played
back on an AudioContext running at 44100Hz (very common, most normal sound cards run at
this rate), will last for 0.5 seconds: 22050 frames / 44100Hz = 0.5 seconds.

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

If you use this call, you will get a mono buffer (one channel), that, when played back
on an `AudioContext` running at 44100Hz, will be automatically \*resampled\* to
44100Hz (and therefore yield 44100 frames), and last for 1.0 second: 44100 frames /
44100Hz = 1 second.

> **Note:** audio resampling is very similar to image resizing: say you've
> got a 16 x 16 image, but you want it to fill a 32x32 area: you resize (resample) it.
> the result has less quality (it can be blurry or edgy, depending on the resizing
> algorithm), but it works, and the resized image takes up less space. Resampled audio
> is exactly the same — you save space, but in practice you will be unable to properly
> reproduce high frequency content (treble sound).

Now let's look at a more complex `createBuffer()` example, in which we
create a three-second buffer, fill it with white noise, and then play it via an {{domxref("AudioBufferSourceNode")}}. The comment should clearly explain what is going on.
You can also [run the code live](https://mdn.github.io/webaudio-examples/audio-buffer/), or [view the source](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // This gives us the actual ArrayBuffer that contains the data
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
