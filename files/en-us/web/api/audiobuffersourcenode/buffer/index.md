---
title: "AudioBufferSourceNode: buffer property"
short-title: buffer
slug: Web/API/AudioBufferSourceNode/buffer
page-type: web-api-instance-property
browser-compat: api.AudioBufferSourceNode.buffer
---

{{ APIRef("Web Audio API") }}

The **`buffer`** property of the {{
  domxref("AudioBufferSourceNode") }} interface provides the ability to play back audio
using an {{domxref("AudioBuffer")}} as the source of the sound data.

If the `buffer` property is set to the value `null`, the node
generates a single channel containing silence (that is, every sample is 0).

## Value

An {{domxref("AudioBuffer")}} which contains the data representing the sound which the
node will play.

## Examples

> **Note:** For a full working example, see [this code running live](https://mdn.github.io/webaudio-examples/audio-buffer/), or [view the source](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html).

```js
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
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
