---
title: AudioBufferSourceNode.detune
slug: Web/API/AudioBufferSourceNode/detune
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioBufferSourceNode
  - Property
  - Reference
  - Web Audio API
  - detune
browser-compat: api.AudioBufferSourceNode.detune
---
{{APIRef("Web Audio API")}}

The **`detune`** property of the
{{domxref("AudioBufferSourceNode")}} interface is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}
representing detuning of oscillation in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).

For example, values of +100 and -100 detune the source up or down by one semitone,
while +1200 and -1200 detune it up or down by one octave.

## Value

A [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}
whose value indicates the detuning of oscillation in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).

> **Note:** Though the `AudioParam` returned is read-only, the
> value it represents is not.

## Examples

```js
const audioCtx = new AudioContext();

const channelCount = 2;
const frameCount = audioCtx.sampleRate * 2.0; // 2 seconds

const myArrayBuffer = audioCtx.createBuffer(channelCount, frameCount, audioCtx.sampleRate);

for (let channel = 0; channel < channelCount; channel++) {
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < frameCount; i++) {
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

const source = audioCtx.createBufferSource();
source.buffer = myArrayBuffer;
source.connect(audioCtx.destination);
source.detune.value = 100; // value in cents
source.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
