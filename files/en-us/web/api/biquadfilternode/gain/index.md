---
title: BiquadFilterNode.gain
slug: Web/API/BiquadFilterNode/gain
page-type: web-api-instance-property
tags:
  - API
  - BiquadFilterNode
  - Gain
  - Property
  - Reference
  - Web Audio API
browser-compat: api.BiquadFilterNode.gain
---
{{ APIRef("Web Audio API") }}

The `gain` property of the {{ domxref("BiquadFilterNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} — a double representing the [gain](https://en.wikipedia.org/wiki/Gain) used in the current filtering algorithm.

When its value is positive, it represents a real gain; when negative, it represents an attenuation.

It is expressed in dB, has a default value of `0`, and can take a value in a nominal range of `-40` to `40`.

## Value

An {{domxref("AudioParam")}}.

> **Note:** Though the `AudioParam` returned is read-only, the value it represents is not.

## Examples

The following example shows basic usage of an AudioContext to create a Biquad filter node. For a complete working example, check out our [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) demo (look at the [source code](https://github.com/mdn/voice-change-o-matic) too).

```js
const audioCtx = new AudioContext();

//set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
