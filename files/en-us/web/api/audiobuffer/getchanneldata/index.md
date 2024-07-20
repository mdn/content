---
title: "AudioBuffer: getChannelData() method"
short-title: getChannelData()
slug: Web/API/AudioBuffer/getChannelData
page-type: web-api-instance-method
browser-compat: api.AudioBuffer.getChannelData
---

{{ APIRef("Web Audio API") }}

The **`getChannelData()`** method of the {{ domxref("AudioBuffer") }} Interface returns a {{jsxref("Float32Array")}} containing the PCM data associated with the channel, defined by the channel parameter (with 0 representing the first channel).

## Syntax

```js-nolint
getChannelData(channel)
```

### Parameters

- `channel`
  - : The channel property is an index representing the particular channel to get data for. An index value of 0 represents the first channel. If the `channel` index value is greater than of equal to {{domxref("AudioBuffer.numberOfChannels")}}, an `INDEX_SIZE_ERR` exception will be thrown.

### Return value

A {{jsxref("Float32Array")}}.

## Examples

In the following example we create a two second buffer, fill it with white noise, and then play it via an {{ domxref("AudioBufferSourceNode") }}. The comments should clearly explain what is going on. You can also [run the code live](https://mdn.github.io/webaudio-examples/audio-buffer/), or [view the source](https://github.com/mdn/webaudio-examples).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// Stereo
const channels = 2;
// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (let channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
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
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
