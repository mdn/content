---
title: "BaseAudioContext: createWaveShaper() method"
short-title: createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
page-type: web-api-instance-method
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

```js-nolint
createWaveShaper()
```

### Parameters

None.

### Return value

A {{domxref("WaveShaperNode")}}.

## Examples

The following example shows basic usage of an AudioContext to create a wave shaper node.
For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

> **Note:** Sigmoid functions are commonly used for distortion curves
> because of their natural properties. Their S-shape, for instance, helps create a
> smoother sounding result. We found the below distortion curve code on [Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion).

```js
const audioCtx = new AudioContext();
const distortion = audioCtx.createWaveShaper();

// …

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;

  for (let i = 0; i < n_samples; i++) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

// …

distortion.curve = makeDistortionCurve(400);
distortion.oversample = "4x";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
