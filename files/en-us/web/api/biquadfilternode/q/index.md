---
title: BiquadFilterNode.Q
slug: Web/API/BiquadFilterNode/Q
tags:
  - API
  - BiquadFilterNode
  - Property
  - Q
  - Reference
  - Web Audio API
browser-compat: api.BiquadFilterNode.Q
---
{{ APIRef("Web Audio API") }}

The `Q` property of the {{ domxref("BiquadFilterNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](https://en.wikipedia.org/wiki/Q_factor), or _quality factor_.

It is a dimensionless value with a default value of `1` and a nominal range of `0.0001` to `1000`.

## Syntax

```js
var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
biquadfilter.Q.value = 100;
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

biquadFilter.type = "peaking";
biquadFilter.frequency.value = 1000;
biquadFilter.Q.value = 100;
biquadFilter.gain.value = 25;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
