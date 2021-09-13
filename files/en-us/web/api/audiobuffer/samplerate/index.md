---
title: AudioBuffer.sampleRate
slug: Web/API/AudioBuffer/sampleRate
tags:
  - API
  - AudioBuffer
  - Property
  - Reference
  - Web Audio API
  - sampleRate
browser-compat: api.AudioBuffer.sampleRate
---
{{ APIRef("Web Audio API") }}

The **`sampleRate`** property of the {{
  domxref("AudioBuffer") }} interface returns a float representing the sample rate, in
samples per second, of the PCM data stored in the buffer.

## Syntax

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
myArrayBuffer.sampleRate;
```

### Value

A floating-point value indicating the current sample rate of the buffers data, in
samples per second.

## Example

```js
// Stereo
var channels = 2;

// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.sampleRate);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio
  API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
