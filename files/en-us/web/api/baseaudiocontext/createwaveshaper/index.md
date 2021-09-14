---
title: BaseAudioContext.createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createWaveShaper
browser-compat: api.BaseAudioContext.createWaveShaper
---
{{ APIRef("Web Audio API") }}

The `createWaveShaper()` method of the {{ domxref("BaseAudioContext") }}
interface creates a {{ domxref("WaveShaperNode") }}, which represents a non-linear
distortion. It is used to apply distortion effects to your audio.

> **Note:** The {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}}
> constructor is the recommended way to create a {{domxref("WaveShaperNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
baseAudioCtx.createWaveShaper();
```

### Returns

A {{domxref("WaveShaperNode")}}.

## Example

The following example shows basic usage of an AudioContext to create a wave shaper
node. For applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) [demo](https://mdn.github.io/voice-change-o-matic/) ([see
app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js) for relevant code).

> **Note:** Sigmoid functions are commonly used for distortion curves
> because of their natural properties. Their S-shape, for instance, helps create a
> smoother sounding result. We found the below distortion curve code on [Stack
> Overflow](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var distortion = audioCtx.createWaveShaper();

  ...

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

  ...

distortion.curve = makeDistortionCurve(400);
distortion.oversample = '4x';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
