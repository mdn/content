---
title: BiquadFilterNode.gain
slug: Web/API/BiquadFilterNode/gain
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

The `gain` property of the {{ domxref("BiquadFilterNode") }} interface Is a [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing the [gain](https://en.wikipedia.org/wiki/Gain) used in the current filtering algorithm.

When it takes a positive value it is a real gain, when negative it is an attenuation.

It is expressed in dB, has a default value of `0` and can take a value in a nominal range of `-40` to `40`.

## Syntax

```js
var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
biquadfilter.gain.value = 25;
```

> **Note:** Though the `AudioParam` returned is read-only, the value it represents is not.

### Value

An {{domxref("AudioParam")}}.

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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
