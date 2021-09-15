---
title: BiquadFilterNode.detune
slug: Web/API/BiquadFilterNode/detune
tags:
  - API
  - BiquadFilterNode
  - Property
  - Reference
  - Web Audio API
  - detune
browser-compat: api.BiquadFilterNode.detune
---
{{ APIRef("Web Audio API") }}

The `detune` property of the {{ domxref("BiquadFilterNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of the frequency in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).

## Syntax

```js
var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.detune.value = 100;
```

> **Note:** Though the `AudioParam` returned is read-only, the value it represents is not.

### Value

An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}.

## Example

The following example shows basic usage of an AudioContext to create a Biquad filter node. For a complete working example, check out our [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) demo (look at the [source code](https://github.com/mdn/voice-change-o-matic) too).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//set up the different audio nodes we will use for the app
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

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
biquadFilter.detune.value = 100;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
