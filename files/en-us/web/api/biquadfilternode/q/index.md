---
title: BiquadFilterNode.Q
slug: Web/API/BiquadFilterNode/Q
page-type: web-api-instance-property
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

The `Q` property of the {{ domxref("BiquadFilterNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](https://en.wikipedia.org/wiki/Q_factor), or _quality factor_.

It is a dimensionless value with a default value of `1` and a nominal range of `0.0001` to `1000`.

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
